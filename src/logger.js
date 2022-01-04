const chalk = require("chalk");

const successLog = (message) => {
    console.log(`${chalk.bgGreen.white(" ✓ ")} ${chalk.bold(message)}`);
}

const errorLog = (message) => {
    console.log(`${chalk.bgRed.white(" X ")} ${chalk.bold(message)}`);
}

module.exports = {
    successLog,
    errorLog
}