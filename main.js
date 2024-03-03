function setup(){
    Can = createCanvas(500 , 500)
    Can.position(900 , 110)
    Vid = createCapture(VIDEO)
    Vid.position(30 , 150)
    MyModel = ml5.poseNet(Vid, modelLoaded)
    MyModel.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("Model Loaded")
}

NoseX = 0
NoseY = 0
LWX = 0
RWX = 0
difference = 0

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        NoseX = results[0].pose.nose.x
        NoseY = results[0].pose.nose.y
        LWX = results[0].pose.leftWrist.x
        RWX = results[0].pose.rightWrist.x
        difference = floor(LWX-RWX)
        console.log("Size of the sqaure is ", difference)
        console.log("x position of my nose: ", NoseX)
        console.log("y position of my nose: ", NoseY)
        console.log("x position of my left wrist: ", LWX)
        console.log("x position of my right wrist: ", RWX)
    }
}

function draw(){
    background("red")
    fill("blue")
    square(NoseX, NoseY, difference)
    document.getElementById("status").innerHTML = "Size of the sqaure is: "+difference + " px."

}

