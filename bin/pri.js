#!/usr/bin/env node
const chalk = require('chalk');
const { Command } = require('commander');
const minimist = require('minimist');

const package = require('../package.json');

// 获取package.version
const { version } = package;
const program = new Command()

// 定义当前版本
program.version(
  `pri: ${version}`,
  "-v, --version",
  "output the currnet pri version"
);

// 定义create命令
program
  .command("create <app-name>")
  .description("Create a new pri project")
  .option("-f --force", "Overwrite target directory if it exists")
  .alias("c")
  .action((name, options) => {
    if(minimist(process.argv.slice(3))._.length > 1) {
      const info = `Info: You provided more than one argument. The first one will be used as the app's name, the rest are ignored.`
      console.log(chalk.yellow(info))
    }
    create(name, options)
  });

// 解析运行参数(必须且要放在最后一行)
program.parse(process.argv);