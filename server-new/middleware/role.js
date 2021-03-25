const ROLES = {
  Admin: 'admin',
  Customer: 'user',
  Merchant: 'merchant'
};


// Grant access to specific roles
const checkRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
          new ErrorResponse(
              `User role ${req.user.role} is not authorized to access this route`,
              403
          )
      );
    }
    next();
  };
};

const role = { ROLES, checkRole };

module.exports = role;
