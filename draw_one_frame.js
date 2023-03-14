
function draw_one_frame(cur_frac, cur_frame) {
	//setup-------------------------------
	//540/2=270
	//960/2=480
	let halfX = width/2;
	let halfY = height/2;
	let ESX = 400;
	let ESY = ESX/2;
	background(144, 224, 239);
	strokeWeight(60);
	//========================================================
	let shadow=map(cur_frac,0,1,halfX/2,halfX*1.5);
	let shadow1=map(cur_frac,0,1,halfX*1.5,halfX*2.8);

	let ripple=map(cur_frac,0,1,0,halfX);
	let ripple2=map(cur_frac,0,1,halfX,width);
	let ripple3=map(cur_frac,0,1,width,width*1.7);

	let IW=map(cur_frac,0,1,halfY/1000,halfY/100);
	let MW=map(cur_frac,0,1,halfY/100,halfY/50);
	let BW=map(cur_frac,0,1,halfY/50,halfY/25);
	let strip1=map(cur_frac,0,1,halfY/500,halfY/20);
	let strip2=map(cur_frac,0,1,halfY/20,halfY/10);
	let strip3=map(cur_frac,0,1,halfY/10,halfY/5);

	let HL=color(255)//(177, 206, 250);165, 217, 250 , ,#DAE4F5
	let LL=color(0);//(52, 190, 250);//115, 198, 250, , #92BCFF
//mid light  #B7D1FA

	let wadda=lerpColor(LL,HL,cur_frac);
	//=========================================================================

		//	RIPPLE____________________________________________
	let smaller = height/ 10
	let smallerRipple = ripple-smaller;
		if(ripple-smaller < 0){
			smallerRipple = 0;
		}
	let medSrip = ripple2-smaller;
		if(ripple2-smaller<0){
			medSrip = 0;
	}
	let bigSrip = ripple3-smaller;
		if(bigSrip-smaller<0){
			bigSrip=0;
		}

	fill(0,0,0,0)

strokeWeight(strip3);//outside.................................
push();
	translate(-25,-12.5);
	scale(1.05);
	stroke(173, 232, 244);
	ellipse(halfX,halfY,bigSrip,bigSrip/2);//BACKLIGHT
pop();
	stroke(202, 240, 248);
	ellipse(halfX,halfY,bigSrip,bigSrip/2);//HIGHLIGHT

strokeWeight(strip2);//middle.................................
push();
	translate(-25,-12.5);
	scale(1.05);
	stroke(173, 232, 244);
	ellipse(halfX,halfY,medSrip,medSrip/2);//middle behind(BACKLIGHT)
pop();
stroke(202, 240, 248); 
	ellipse(halfX,halfY,medSrip,medSrip/2)

strokeWeight(strip3*2);
stroke(135, 217, 232);
	ellipse(halfX,halfY,shadow1,shadow1/2);//shaodw

strokeWeight(strip1);//inside.......................................
push();
	translate(-25,-12.5);
	scale(1.05);
	stroke(173, 232, 244);
	ellipse(halfX,halfY,smallerRipple,smallerRipple/2);//ripple,ripple/2//inside behind(BACKLIGHT)
pop();
stroke(202, 240, 248);
	ellipse(halfX,halfY,smallerRipple,smallerRipple/2);//inside front(HIGHLIGHT)

	strokeWeight(strip1*4);
stroke(135, 217, 232);
	ellipse(halfX,halfY,shadow,shadow/2);//shadow

//white highlight.................................................
	stroke(255);
strokeWeight(IW);
ellipse(halfX,halfY,smallerRipple,smallerRipple/2);//inside front(HIGHLIGHT)
strokeWeight(MW);
ellipse(halfX,halfY,medSrip,medSrip/2)
strokeWeight(BW);
ellipse(halfX,halfY,bigSrip,bigSrip/2);


			//WATERDROP____________________________________________
			let tbvr =map(cur_frac,0,1,height-height*1.6,halfY*1.05);
			let rainSize=map(cur_frac,0,1,100,150);

			// scale(rainSize);
			translate(halfX-halfX,tbvr-halfY);
			DrawRaindrop(0,0);

	//=========================================================================
	}
	
	function DrawRaindrop (){
		strokeWeight(4);
		fill(255);
		let halfX = width/2;
	let halfY = height/2;
		let triSize=halfX/40;
	

		
		ellipse(halfX,halfY,halfX/20,halfX/15);
		triangle(halfX,halfY-triSize*3,halfX-triSize,halfY,halfX+triSize,halfY);
	
	


	}

	// second iteration------------------------------------------------------------------------
// fill(0,0,0,0);
// strokeWeight(2);
	// stroke(104, 146, 212);
	// for(let i=0;i<4;i++){
	// 	stroke(255);
	// 	ellipse(halfX,bob,ESX*i,ESY*i);
	// 	// scale(i);
	// }
	// for(let i=0;i<8;i++){
	// 	// stroke(200,255,100);//greeny
	// 	ellipse(halfX,halfY,(ESX/1.1)*i,(ESY/1.1)*i);
	// 	}

	// for(let i=0;i<8;i++){
	// 	// stroke(255,100,200);//pinky
	// 	ellipse(halfX,halfY,(ESX/1.2)*i,(ESY/1.2)*i);
	// 	}

	// for(let i=0;i<8;i++){
	// 	// stroke(100,200,255);//bluey
	// 	ellipse(halfX,halfY,(ESX/1.3)*i,(ESY/1.3)*i);
	// 	}

	// for(let i=0;i<8;i++){
	// 	// stroke(250,155,155);//ornge
	// 	ellipse(halfX,halfY,(ESX/1.4)*i,(ESY/1.4)*i);
	// 	}