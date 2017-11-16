var bubble = new Bubble(200, 200, 100);
var speedx = 15;
var speedy = -8;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0);
    bubble.afficher();
    bubble.move();

}

function Bubble(x, y, d) {

    this.x = x;
    this.y = y;
    this.d = d;


    this.afficher = function() {
        ellipse(this.x, this.y, this.d, this.d);

    }
    this.move = function() {



        if (this.x > width || this.x < 0) {
            speedx = -speedx;
        }
        if (this.y > height || this.y < 0) {
            speedy = -speedy;
        }
        this.x += speedx;
        this.y += speedy;

    }


}
