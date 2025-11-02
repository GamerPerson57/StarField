export class Star {


    x = 50;
    y = 50;
    pencil;

    constructor(canvas, pencil, size) {
        this.pencil = pencil;
        this.x = canvas.width * Math.random();
        this.y = canvas.height * Math.random();
        this.size = size || Math.random() * 4 + 1; // defaults the size between 1 and 4
    }

    draw(pencil) {
        this.pencil.beginPath();
        this.pencil.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        this.pencil.fillStyle = "white";
        this.pencil.fill();
        this.pencil.closePath();
    }

    move() {
        this.x += 5;
    }

}