const amount = 12

//  VARIAVEIS GLOBAIS:
//  __dirname, __filename,
//  require, module, process

if(amount < 10) {
    console.log('small number');
}
else{
    console.log('large number');
}

console.log(`hey it's my first node app!!`);
// console.log(require)

setInterval(() => {
    console.log('hellooo world 1 sec')
}, 1000)