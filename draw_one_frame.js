var x=300;
var y=300;
var a=100;
var b=100;


function draw_one_frame(cur_frac) {
	
	

	let ripple=map(cur_frac,0,1,0,width*0.5);
	fill(255,255,255);//big one 
	ellipse(width/2,height/2,ripple,ripple);
	fill(100,0,100);//little one
	ellipse(width/2,height/2,ripple/2,ripple/2);
	fill(100,0,100);//bigger
	ellipse(width/2,height/2,ripple/2,ripple/2);

}
