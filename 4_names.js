// local
const secret = "super secret"
// share
const john = 'john'
const peter = 'peter'

//EXPORTAR -> ENVIA PARA TODO O RESTO DO AMBIENTE
// console.log(module)
// qnd vc usa esse console log module, dá pra ver nele "exports"
// exports permite a aplicação toda ver esse módulo aqui (esse arquivo)

module.exports = {john, peter}