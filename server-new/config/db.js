const mongoose =require('mongoose')
const chalk = require("chalk");
const {database} = require("./keys");

const connectDB =  async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });

    console.log(`${chalk.green('✓')} ${chalk.cyan('MongoDB Connected! with the host of')} ${chalk.yellowBright(conn.connection.host)}`)
}
module.exports = connectDB;


