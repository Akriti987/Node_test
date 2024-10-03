//const file = require('file') 
const { readFileSync, writeFileSync } = require('fs')
console.log('Start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
writeFileSync(
    './content/result-sync.txt',`Here is the result : ${first},${second}`
)
//console.log(first,second)

//CREATING NEW FILE
//TWO ARGUMENTS FILENAME AND VALUE

console.log('done with this task')
console.log('starting the next one')





