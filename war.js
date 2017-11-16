var char1 = new Char(300, 500, 50, 75);

function setup() {

    createCanvas(600, 600);

}



function draw() {
    background(0);
    char1.afficher();
    char1.bouger();
}

function Char(x, y, lo, la, ) {
    this.x = x;
    this.y = y;
    this.lo = lo;
    this.la = la;


    this.afficher = function() {
        rectMode(CENTER);
        rect(this.x, this.y, this.lo, this.la);

    }
    this.bouger = function() {

        if (keyIsDown(LEFT_ARROW)) {
            this.x -= 3;
        } else if (keyIsDown(RIGHT_ARROW)) {
            this.x += 3;

        }
        if (this.x > 575) { this.x = 575 }
        if (this.x < 25) { this.x = 25 }
    }


}
