let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil

import { Star } from "./star.js";

//draw stars
let mySpecialStar = new Star(canvas, pencil);
mySpecialStar.draw();

let mySpecialStar2 = new Star(canvas, pencil);
mySpecialStar2.draw();

let mySpecialStar3 = new Star(canvas, pencil);
mySpecialStar3.draw();


// creates first three stars
let stars = [
    mySpecialStar,
    mySpecialStar2,
    mySpecialStar3,
];

// adds a 100 stars
for(let i = 0; i <= 100; i++) {
    let multipleStars = new Star(canvas,pencil);
    stars.push(multipleStars)
    multipleStars.draw();
}

//Game loop
function gameLoop() {
    //erase canvas
    pencil.clearRect(0, 0, canvas.width, canvas.height);
    //draw background
    
    //move stars
    for(let i = 0; i < stars.length; i++) {
        stars[i].move();
        stars[i].draw();

         //recycle stars/restart stars
        if (stars[i].x >= canvas.width) {
        stars[i].x = 0;
    }
}


}

setInterval(gameLoop, 50);