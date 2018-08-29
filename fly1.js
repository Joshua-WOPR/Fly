/* Setting URL path for the flies resource */
var path="https://cdn.rawgit.com/Joshua-WOPR/Fly/8b155f1a/flies.png";

/* Obtaining the size of the window */
if( typeof( window.innerWidth ) == 'number' ) {
    var shellWidth = window.innerWidth;
    var shellHeight = window.innerHeight;
} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    var shellWidth = document.documentElement.clientWidth;
    var shellHeight = document.documentElement.clientHeight;
} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    var shellWidth = document.body.clientWidth;
    var shellHeight = document.body.clientHeight;
};

/* Setting initial y-axis velocity */
var x=100;var xx=3;var y=100;var yy=3;

var offset = 200;
var offsetb = 250;
var walking = true;

/* Setting boundaries of workspace */
var f=document.createElement("DIV");
f.style.width = "50px";
f.style.height = "50px";
f.style.backgroundImage = "url("+path+")";
f.style.backgroundPosition = "0px -"+offset+"px";
f.style.position="absolute";
f.style.left=Math.round(x)+"px";
f.style.top=Math.round(y)+"px";
f.style.zIndex=9999;
document.body.appendChild(f);

/* Setting the function for movement */ 
function move(){
	if(y>=(shellHeight-100)){
		yy=-yy;c();
	}else if(y<=1){
		yy=-yy;c();
	}
	if(x>=(shellWidth-100)){
		xx=-xx;c();
	}else if(x<=1){
		xx=-xx;c();
	}
	
	x=x+xx;y=y+yy;
	
	f.style.left=Math.round(x)+"px";f.style.top=Math.round(y)+"px";

	if(Math.random()<0.05){
		clearInterval(id);
		id=setInterval('p()',30);
		walking = false;
		showOffset(offset);
	}else{
	    if (walking) {
	      walking = false;
	      showOffset(offset);
	    }else{
	      walking = true;
	      showOffset(offsetb);
	    }
	}

};
function p(){
	if(Math.random()<0.075){
		clearInterval(id);
		id=setInterval('move()',30);
	}
};
function c(){
	if(yy<0){
		if(xx<0){
			offset = 100;
			offsetb = 150;
		}else{
			offset = 0;
			offsetb = 50;
		}
	}else if(xx<0){
		offset = 300;
		offsetb = 350;
	}else{
		offset = 200;
		offsetb = 250;
	}
};

function showOffset(o) {
  f.style.backgroundPosition = "0px -"+o+"px";
}
var id=setInterval('move()',30);void(0);
