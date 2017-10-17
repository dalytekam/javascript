var boule1 = new Boule(200,250);
var boule2 = new Boule(300,250);
var boule3 = new Boule(100,50, 'gray');
function setup() {
createCanvas(500,500);




}

function draw(){
background(0);
boule1.afficher();
boule1.bouger();
boule2.afficher();
boule2.bouger();

 var d = dist(boule1.x,boule1.y,boule2.x,boule2.y);
if(d < boule1.rayon + boule2.rayon){
	boule3.afficher();
	
}
}var boule1 = new Boule(200,250,'white');
var boule2 = new Boule(300,200,'red');

function Boule(x,y,c){
this.x=x;
this.y=y;
this.rayon=60;
this.c = c;

this.afficher=function(){
fill(this.c);
ellipse(this.x,this.y,this.rayon*2,this.rayon*2);
};

this.bouger=function(){
this.x+=random(-3,3);
this.y+=random(-3,3);

};
this.retrecir = function(){
this.rayon-=0.05;
if(this.rayon<0){
	this.rayon=60;
}
};

}
