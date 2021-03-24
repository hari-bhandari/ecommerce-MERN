const Mongoose = require('mongoose');

const { Schema } = Mongoose;

// User Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: () => {
      return this.provider !== 'email' ? false : true;
    }
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  password: {
    type: String
  },
  merchant: {
    type: Schema.Types.ObjectId,
    ref: 'Merchant',
    default: null
  },
  provider: {
    type: String,
    required: true,
    default: 'email'
  },
  googleId: {
    type: String,
    unique: true
  },
  facebookId: {
    type: String,
    unique: true
  },
  avatar: {
    type: String
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin', 'ROLE_MERCHANT']
  },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

// Encrypt passwrod using bcrypt
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate and hash password token
UserSchema.methods.getResetPasswordToken = function () {
  // Genereate token
  const resetToken = crypto.randomBytes(20).toString('hex');

  // Hash token and set to resetPasswordToken field
  this.resetPasswordToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

  // Set expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

module.exports = Mongoose.model('User', UserSchema);
