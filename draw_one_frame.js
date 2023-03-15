
function draw_one_frame(cur_frac) {
	//setup-------------------------------
	//540/2=270
	//960/2=480
	let halfX = width/2;
	let halfY = height/2;
	let ESX = 400;
	background(144, 224, 239);
	strokeWeight(60);
	//========================================================
	let shadow=map(cur_frac,0,1,halfX/2,halfX*1.5);
	let shadow1=map(cur_frac,0,1,halfX*1.5,halfX*3);
	let ShadEnd1=map(cur_frac,0,1,halfX*3,halfX*5);

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

		//SHADOWS AND DEPTH.......................................
strokeWeight(strip1*6);//inside
	stroke(135, 217, 232);
		ellipse(halfX,halfY,shadow,shadow/2);//shadow
		strokeWeight(strip1*3);
		stroke(122, 200, 214);
		ellipse(halfX,halfY,shadow,shadow/2);//depth
		
		strokeWeight(strip3*6);
		stroke(135, 217, 232);
		ellipse(halfX,halfY,ShadEnd1,ShadEnd1/2)//lighter loop end
		

		strokeWeight(strip3*3);
		stroke(122, 200, 214);

		ellipse(halfX,halfY,ShadEnd1,ShadEnd1/2)//loop end DARKER
		stroke(135, 217, 232);
		ellipse(halfX,halfY,shadow1,shadow1/2);//shaodw
		

		strokeWeight(strip3*1.5);
		stroke(122, 200, 214);
		ellipse(halfX,halfY,shadow1,shadow1/2);//depth DARKER
		
		
		
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

strokeWeight(strip1);//inside.......................................
push();
	translate(-25,-12.5);
	scale(1.05);
	stroke(173, 232, 244);
	ellipse(halfX,halfY,smallerRipple,smallerRipple/2);//ripple,ripple/2//inside behind(BACKLIGHT)
pop();
// stroke(202, 240, 248);
stroke(186, 235, 245);

	ellipse(halfX,halfY,smallerRipple,smallerRipple/2);//inside front(HIGHLIGHT)

//white highlight.................................................
	stroke(222, 245, 250);
strokeWeight(IW);
ellipse(halfX,halfY,smallerRipple,smallerRipple/2);//inside front(HIGHLIGHT)
strokeWeight(MW);
ellipse(halfX,halfY,medSrip,medSrip/2)
strokeWeight(BW);
ellipse(halfX,halfY,bigSrip,bigSrip/2);

			//WATERDROP____________________________________________
			let tbvr =map(cur_frac,0,1,height-height*2,halfY*1.1);
			
			let rainSize=map(cur_frac,0,1,halfX/10,halfX/150);
			
			// translate(halfX-halfX,tbvr-halfY);	
			// DrawRaindrop(0,0);
			let triSize=halfX/40;
			strokeWeight(4);
			fill(222, 245, 250);

			push();
				ellipse(halfX,tbvr,rainSize,rainSize*2);
				// triangle(halfX,tbvr-triSize*4,halfX-triSize,tbvr,halfX+triSize,tbvr);
			pop();
			
			//=========================================================================
		}
		
		function DrawRaindrop (cur_frac){
			strokeWeight(4);
			fill(222, 245, 250);
			let halfX = width/2;
			let halfY = height/2;
			let triSize=halfX/40;
			


	push();
		ellipse(halfX,halfY,halfX/20,halfX/15);
		triangle(halfX,halfY-triSize*3,halfX-triSize,halfY,halfX+triSize,halfY);
		pop();
	}

