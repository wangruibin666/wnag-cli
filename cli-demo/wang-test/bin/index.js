#!/usr/bin/env node

const lib = require('wang-test-lib');

// 注册一个命令 wang-test init --name haha
// console.log(require('process'));
const argv = require('process').argv;

const command = argv[2];

const options = argv.slice(3);

console.log(options);

let [option, param] = options;

option = option.replace('--', '');

// console.log(option,param);

if(command){
  if(lib[command]) {
    lib[command]({option,param});
  }else{
    console.log('无效的命令！');
  }
}else{
  console.log('请输入命令！');
}


// console.log(argv[2])
// console.log(lib);
// console.log('hellow wang!!!!')