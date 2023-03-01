var x=300;
var y=300;
var a=100;
var b=100;


function draw_one_frame(cur_frac) {

	let ripple=map(cur_frac,0,1,0,width*2);
	ellipse(width/2,height/2,ripple,ripple);
	fill(100,0,100)
	ellipse(width/2,height/2,ripple/2,ripple/2);

}
