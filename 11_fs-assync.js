// DIFERENÇAS ENTRE SÍNCRONO E ASSÍNCRONO:
// Síncrono: linha a linha
// Assíncrono: começa uma tarefa, offload essa tarefa e já começa a próxima


const {readFile, writeFile} = require('fs');
//AGORA NÃO TEMOS MAIS O readFileSYNC e writeFileSYNC 

console.log('start')

readFile('./content/first.txt','utf-8', (err,result)=>{
    if (err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',
        `Here is the result: ${first} e ${second}`,
        (err, result) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log('done with this task')
        }
        )
    })
})


// readFile('./content/second.txt')
// const fs = require('fs');

console.log('starting the next task')