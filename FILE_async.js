
//...............................ASYNC FILE SYSTEM...............
//for synchronus method to work we provide a callback method...

const { readFile, writeFile } = require('fs')
//we run callback when we are done with the functionality like eventlistener
console.log('Start')
readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    //console.log(result)
    //if we dont aff utf8 in the parameters we will get a numeric buffer in place of string

    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        //console.log(result)
        //if we dont aff utf8 in the parameters we will get a numeric buffer in place of string
    
        const second = result;
    writeFile(
        './content/result-async.txt', 
        `Here is the result: ${first}, ${second}`,
        (err,result) => { 
        if(err){
            console.log(err)
            return
            
        }

        console.log('done with this task')
    })

})
})
console.log('starting next task')
