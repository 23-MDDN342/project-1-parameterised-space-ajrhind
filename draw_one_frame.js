var x=300;
var y=300;
var a=100;
var b=100;


function draw_one_frame(cur_frac) {
	background(255);
	

	let ripple=map(cur_frac,0,1,0,width/2);
	let ripple2=map(cur_frac,0,1,width/2,width);
	let ripple3=map(cur_frac,0,1,width,width*2);


	fill(255,);
	ellipse(width/2,height/2,ripple3,ripple3/2);//big outside one
	ellipse(width/2,height/2,ripple2,ripple2/2);//big ong
	ellipse(width/2,height/2,ripple,ripple/2);//middle small one

}
