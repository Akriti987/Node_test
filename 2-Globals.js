//GLOBALS -NO WINDOW!!!...no matter how complex or nested the app gets we will always have access to global variables


//__dirname -path to current directory
// __filename -filename
// require  -function to use modules
// module  -info about env where the program is being executed
// process  -info about env where the program is being executed

setInterval(()=>{
    console.log("Hello world");
},1000)


//..........................Modules......................
// 

const names = require("./names")
console.log(names);


const sayHi=(name)=>{
    console.log(`Hello there ${name}`)
}

sayHi(names.john);
sayHi(names.peter);
//Node uses commonJS library....->every file is a module (by default)
 
