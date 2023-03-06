var x=300;
var y=300;
var a=100;
var b=100;


function draw_one_frame(cur_frac, cur_frame) {
	//setup-------------------------------
	background(134, 177, 247);
	strokeWeight(60);
	//maps-------------------------------
	let ripple=map(cur_frac,0,1,0,width/2);
	let ripple2=map(cur_frac,0,1,width/2,width);
	let ripple3=map(cur_frac,0,1,width,width*1.5);

	let strip1=map(cur_frac,0,1,0,10);
	let strip2=map(cur_frac,0,1,11,30);
	let strip3=map(cur_frac,0,1,31,60);
	//work-------------------------------

		
	//first iteration----------------------------------------------------------

	//big stroke
	
	// strokeWeight(60);
	stroke(152, 190, 250);
	fill(152, 190, 250,0)
	strokeWeight(strip3);
		ellipse(width/2,height/2,ripple3,ripple3/2);//big outside one
		strokeWeight(strip2);
		ellipse(width/2,height/2,ripple2,ripple2/2);//big one
		strokeWeight(strip1);
		ellipse(width/2,height/2,ripple,ripple/2);//middle small one

	//midlight stroke
	// stroke(161, 194, 247);
	// fill(152, 190, 250,0)
	// 	ellipse(width/2,height/2,ripple3,ripple3/2);//big outside one
	// 	ellipse(width/2,height/2,ripple2,ripple2/2);//big one
	// 	ellipse(width/2,height/2,ripple,ripple/2);//middle small one

	// // //highlight stroke
	// strokeWeight(6);
	// stroke(177, 206, 250);
	// fill(152, 190, 250,0)
	// 	ellipse(width/2,height/2,ripple3,ripple3/2);//big outside one
	// 	ellipse(width/2,height/2,ripple2,ripple2/2);//big one
	// 	ellipse(width/2,height/2,ripple,ripple/2);//middle small one

	//second iteration----------------------------------------------------------
// fill(0,0,0,0);
	// stroke(104, 146, 212);
	// for(let i=0;i<4;i++){//makes one big one spreading outfully
	// 	ellipse(width/2,height/2,ripple*i,ripple*i/2)
	// }
}	
