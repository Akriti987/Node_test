const names = require("./names")
const sayHi = require("./5-util")
const data = require("./6-alternative")

console.log(names);
console.log(data);

sayHi(names.john);
sayHi(names.peter);

//Modules - encapsulated code (only share minimum)
const secret = 'Super Secret'
require("./7-mind-grenade")


// Built-in Modules
//OS
//PATH
//FS
//HTTP

const os = require('os') //looking for built in module

//info about current user
const user = os.userInfo()
console.log(user)

// up time of system in seconds

console.log(`System uptime is ${os.uptime()} seconds`)

const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)

//......................................PATH MODULE............................
//PATH.js


