
function draw_one_frame(cur_frac, cur_frame) {
	//setup-------------------------------
	let halfX = width/2;
	let halfY = height/2;
	let ESX = 400;
	let ESY = ESX/2;
	background(134, 177, 247);
	strokeWeight(60);
	//-----------------------------------
	let ripple=map(cur_frac,0,1,0,halfX);
	let ripple2=map(cur_frac,0,1,halfX,width);
	let ripple3=map(cur_frac,0,1,width,width*1.7);

	let strip1=map(cur_frac,0,1,0,10);
	let strip2=map(cur_frac,0,1,11,30);
	let strip3=map(cur_frac,0,1,31,60);

	let bob=map(cur_frac,0,1,);

	let HL=color(255)//(177, 206, 250);165, 217, 250 , ,#DAE4F5
	let LL=color(0);//(52, 190, 250);//115, 198, 250, , #92BCFF
	let mao=color(155,198,250);
//mid light  #B7D1FA

	let wadda=lerpColor(LL,HL,cur_frac);
	
	//work-------------------------------

		
	//first iteration----------------------------------------------------------

// 		//big stroke
// 	// stroke(wadda);
// 	fill(152, 190, 250,0)
// 	strokeWeight(strip3);
// 	stroke(255);
// 	ellipse(halfX,(halfY)+10,ripple3-40,(ripple3/2)-40);
// 	stroke(177, 206, 250);
// 		ellipse(halfX,halfY,ripple3,ripple3/2);//big outside one

// 		strokeWeight(strip2);
// 		stroke(255);
// 		ellipse(halfX,(halfY)+10,ripple2-40,(ripple2/2)-40)
// 		stroke(177, 206, 250);
// 		ellipse(halfX,halfY,ripple2,ripple2/2);//inbetween one
		
		
// 		stroke(177, 206, 250);
// 		strokeWeight(strip1);

// let howMuchSmaller = height/ 10
// let smallerRipple = ripple-howMuchSmaller;
// if(ripple-howMuchSmaller < 0){

// 	smallerRipple = 0;
// }
				
// 		stroke(255);
// 		// ellipse((halfX),(halfY)+10,
// 		// ripple-howMuchSmaller,(ripple/2)-howMuchSmaller); //white

// 		ellipse(halfX,halfY,smallerRipple,smallerRipple/2);//middle small one

// 		stroke(177, 206, 250);
// 		ellipse(halfX,halfY,ripple,ripple/2);//middle small one


	// second iteration----------------------------------------------------------
fill(0,0,0,0);
strokeWeight(2);
	// stroke(104, 146, 212);
	for(let i=0;i<4;i++){
		stroke(wadda);
		ellipse(halfX,halfY,ESX*i,ESY*i);
		// scale(i);
	}
	for(let i=0;i<8;i++){
		stroke(200,255,100);//greeny
		ellipse(halfX,halfY,(ESX/1.2)*i,(ESY/1.2)*i);
		}

	for(let i=0;i<8;i++){
		stroke(255,100,200);//pinky
		ellipse(halfX,halfY,(ESX/1.4)*i,(ESY/1.4)*i);
		}

	for(let i=0;i<8;i++){
		stroke(100,200,255);//bluey
		ellipse(halfX,halfY,(ESX/1.6)*i,(ESY/1.6)*i);
		}

	// for(let i=0;i<8;i++){
	// 	stroke(250,155,155);//ornge
	// 	ellipse(halfX,halfY,(ESX/1.8)*i,(ESY/1.8)*i);
	// 	}
}	
