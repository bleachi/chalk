const chalk = require('chalk');

console.log(
    chalk.blue.bgWhite.bold('Hello Latin!\n'),
    chalk.bgBlue('Lorem Ipsum.\n'),
    chalk.bgMagenta.bold.underline.yellow('Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n'),
    chalk.redBright.inverse('Praesent ornare nisl sit amet augue egestas posuere. Vivamus vestibulum ac purus a facilisis.\nMorbi elit erat, accumsan et libero in, hendrerit aliquam eros. ')
);