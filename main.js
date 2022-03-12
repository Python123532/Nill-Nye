canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image="parkingLot.jpg";
car_image="car2.png";
car_x=20;
car_y=20;
car_width=100;
car_height=400;
function add(){
    background_imageTag=new Image();
    background_imageTag.onload=uploadbackground;
    background_imageTag.src=background_image;
    car_imageTag=new Image();
    car_imageTag.onload=uploadcar;
    car_imageTag.src=car_image;
}
function uploadbackground(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(car_imageTag,car_x,car_y,car_width,car_height);
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keyspressed=e.keyCode;
    if(keyspressed=='38'){
        up();
        console.log("up");
    }
     if(keyspressed=='40'){
        down();
        console.log("down");
         
    }
     if(keyspressed=='39'){
        right();
        console.log("right");
    }
     if(keyspressed=='37'){
        left();
        console.log("left");
    }
}
function up(){
    if(car_y >=0){
        car_y = car_y-10;
        uploadbackground();
        uploadcar();
    }
}
function down(){
    if(car_y <=900){
        
        car_y = car_y+10;
        uploadbackground();
        uploadcar();
    }
}
function left(){
    if(car_x>=0){
        
        car_x = car_x-10;
        uploadbackground();
        uploadcar();
    }
}
function right(){
    if(car_x<=900){
        
        car_x = car_x+10;
        uploadbackground();
        uploadcar();
    }
}