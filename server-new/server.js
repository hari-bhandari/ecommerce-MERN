require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const cors = require('cors');
const passport = require('passport');
const errorHandler = require('./middleware/error');
const keys = require('./config/keys');
const routes = require('./routes');
const connectDB = require('./config/db');
const {cloudinaryConfig}=require('./config/cloudinary')
const {  port } = keys;
//initialising the app
const app = express();
// Connect to the database //mongodb

connectDB()
//configs
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use('*', cloudinaryConfig);

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
