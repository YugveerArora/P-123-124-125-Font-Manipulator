function setup(){
    video=createCapture(VIDEO)
    video.size(550, 500)
    canvas=createCanvas(550, 500)
    canvas.position(560, 150)
    postNet=ml5.poseNet(video, modelLoaded)
    postNet.on("pose", gotPoses)
}

function draw(){
    background("blue")
}

function modelLoaded(){
    console.log("PoseNet Is Initialized")
}

function gotPoses(result){
if(result.length>0){
console.log(result)
}
}