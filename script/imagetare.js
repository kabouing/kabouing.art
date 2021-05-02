R=0; //x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=400; y4=200; x5=600; y5=200;
	
	x1 = Math.random();
	y1 = Math.random();
	x2 = Math.random();
	y2 = Math.random();
	x3 = Math.random()+1;
	y3 = Math.random();
	x4 = Math.random()*200+400;
	y4 = Math.random()*100+150;
	x5 = Math.random()*150+550;
	y5 = Math.random()*70+180;
DI=document.images; 
DIL=DI.length;
function Afolie(){
	/*x1 = Math.random();
	y1 = Math.random();
	x2 = Math.random();
	y2 = Math.random();
	x3 = Math.random()+1;
	y3 = Math.random();
	x4 = Math.random()*200+400;
	y4 = Math.random()*100+150;
	x5 = Math.random()*150+550;
	y5 = Math.random()*70+180;*/
	for(i=0; i-DIL; i++){
		DIS=DI[ i ].style;
		DIS.position='absolute'; 
		DIS.left=(Math.sin(R*x1+i*x2+x3)*x4+x5)+"px";
		DIS.top=(Math.cos(R*y1+i*y2+y3)*y4+y5)+"px";
	}
	R++
}
setInterval('Afolie()',150); 
void(0);