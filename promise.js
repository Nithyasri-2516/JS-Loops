//fullfilled, rejected , pending (state)

const promise= new Promise((resolve,reject)=>
{
    const err= false;
    if(err){
        resolve("this is solved")
    }
    else{
        reject("rejected")
    }
})

console.log(promise);

promise.then(value=>{  //thennables
    console.log(value);
    
})
promise.catch((err)=>{
  console.log(err);

});