require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const errorHandler = require('./middleware/error');
const keys = require('./config/keys');
const routes = require('./routes');

const { database, port } = keys;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// Connect to MongoDB
mongoose.set('useCreateIndex', true);
mongoose
  .connect(database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() =>
    console.log(`${chalk.green('✓')} ${chalk.blue('MongoDB Connected!')}`)
  )
  .catch(err => console.log(err));

require('./config/passport');
app.use(routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(
    `${chalk.green('✓')} ${chalk.blue(
      `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
    )}`
  );
});
