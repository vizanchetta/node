// Modules 
// commonJS -> every file is module (by default)
// modules - encapsulated code (only sharing minimum)
const names = require('./4_names')
const sayHi = require('./5_utils')
const data = require('./5_exportAsYouGo')
require('./7_mindGrenade')
// # EVERY FILE IS A MODULE IN NODE.js #

sayHi('susan')
sayHi(names.john)
sayHi(names.peter) 

console.log(data)

// Every file is a module,
// and we ARE IN CHARGE WHAT WE ARE SHARING
// if we export or make something avaliable from the module, we just set up the "exports"
