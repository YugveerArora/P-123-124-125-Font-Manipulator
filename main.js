difference = 0
leftWristX = 0
rightWristX = 0

function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)
    canvas = createCanvas(550, 500)
    canvas.position(560, 150)
    postNet = ml5.poseNet(video, modelLoaded)
    postNet.on("pose", gotPoses)
}

function draw() {
    background("black")
    document.getElementById("widthAndHeight").innerHTML = "The Width and the height of the text is " + difference + "px"
    fill("purple")
    textSize(difference)
    text("Yugveer", 50, 350)
}

function modelLoaded() {
    console.log("PoseNet Is Initialized")
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result)
        leftWristX = result[0].pose.leftWrist.x
        rightWristX = result[0].pose.rightWrist.x
        difference = round(leftWristX - rightWristX)
    }
}