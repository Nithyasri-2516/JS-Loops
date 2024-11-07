//fullfilled, rejected , pending (state)

const mypromise= new Promise((resolve,reject)=>
{
    const err= false;
    if(!err){
        resolve("this is solved")
    }
    else{
        reject("rejected")
    }
})

console.log(mypromise);
