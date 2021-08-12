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
const path=require('path')
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
app.use('/api',routes);
app.use(errorHandler);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/out')))
  app.get('/admin/*', (req, res) =>
      res.sendFile(path.resolve(__dirname, '../client/out/index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.listen(port, () => {
  console.log(
    `${chalk.green('✓')} ${chalk.blue(
      `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
    )}`
  );
});
