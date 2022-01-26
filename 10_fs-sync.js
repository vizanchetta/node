// módulo FS -> sync
// módulo FS -> assync

const {readFileSync, writeFileSync} = require('fs');
// const fs = require('fs');

console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`); // sem a flag vc sobreescreve o arquivo
// writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'}); // com a flag você adiciona no final do arquivo

console.log('done with this task')
console.log('starting the next one')