canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;
function add(){
    rover_imgTab = new Image ();
    rover_imgTab.onload = uploadrover;
    rover_imgTab.src = rover_image;console.log("loaded");
}
function uploadrover(){
    ctx.drawImage(rover_imgTab, rover_x, rover_y, rover_width, rover_height);
}
