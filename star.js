export class Star {


    x = 50;
    y = 50;
    pencil;

    constructor(canvas,pencil) {
        this.pencil = pencil;
        this.x = canvas.width * Math.random();
        this.y = canvas.height * Math.random();
    }

    draw(pencil) {
        this.pencil.beginPath();
        this.pencil.arc(this.x, this.y, 40, 0, 2 * Math.PI);
        this.pencil.fillStyle = "red";
        this.pencil.fill();
        this.pencil.closePath();
    }

    move() {
        this.x += 5;
    }

}