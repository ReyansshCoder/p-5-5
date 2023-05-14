function setup(){
    XD=createCanvas(500,400)
    vid=createCapture(VIDEO)
    vid.hide()
}

rangm_namm="";

function draw(){
image (vid, 0,0,500,400)
tint (rangm_namm)
fill ("red")
circle(20,20,50)
fill ("blue")
rect ( 40, 1, 100, 40)
fill ("red")
circle (158,20,50)
fill ("blue")
rect ( 178, 1, 100, 40)
fill ("red")
circle(285,20,50)
fill("blue")
rect ( 300, 1, 100, 40)
fill ("red")
circle(415,20,50)
fill("blue")
rect ( 430, 1, 100, 40)

fill ("red")
circle(20,380,50)
fill ("blue")
rect ( 40, 380, 100, 40)
fill ("red")
circle (158,380,50)
fill ("blue")
rect ( 178, 380, 100, 40)
fill ("red")
circle(285,380,50)
fill("blue")
rect ( 300, 380, 100, 40)
fill ("red")
circle(415,380,50)
fill("blue")
rect ( 430, 380, 100, 40)
}

function change_shade(){
rangm_namm=document.getElementById("rang_naam").value
}

function take_snapshot(){
save ("chitra.png")
    
}