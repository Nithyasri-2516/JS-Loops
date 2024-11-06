function uploadVideo(value,callback){
    console.log(`uploading video`);
    setTimeout(()=>{
        console.log(`upload done `+value.title);  
        callback(value);
    },4000)
    
}

function publishVideo(value,publishedCallback){
    console.log(`publishing video`);
    setTimeout(()=>{
        console.log(`publishing done`+value.description); 
        publishedCallback(value); 
    },4000);
   
}

function notificationSent(){
    console.log(`notification sent`);
}

const data={
    title: 'my first day experience at Chainsys',
    description:' this is my 1st video in youtube'
}



uploadVideo(data,function(value){           //callback function passed as an argument 
    publishVideo(value,function(){
        notificationSent()
    })

})