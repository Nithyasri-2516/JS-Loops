function uploadVideo(){
    console.log(`uploading video`);
    setTimeout(()=>{
        console.log(`upload done`);  
    },4000)
}

function publishVideo(){
    console.log(`publishing video`);
    setTimeout(()=>{
        console.log(`publishing done`);  
    },4000)
}

function notificationSent(){
    console.log(`notification sent`);
}


uploadVideo();
publishVideo();
notificationSent();