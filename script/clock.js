//version modifiée par Julien Fraichot 17/10/2008
//pour http://ww.kabouing.com
//le coeur du code est toujours présent mais l'affichage est modifié

//Version modifiée par NBC 
//La version originale permettait de placer l'horloge en absolut par rapport au coin haut gauche de l'écran
//celle-ci permettait de placer l'horloge en absolut par rapport au coin haut gauche du bloc contenant

//script original :
	//Analog clock script- By Kurt (kurt.grigg@virgin.net)
	//Script featured on Dynamic Drive
	//Visit http://www.dynamicdrive.com for this script and more


//Variables à modifier :

//Les couleurs :
fCol='7777BB'; //couleur des chiffres.
sCol='9999FF'; //couleur des secondes.
mCol='666699'; //couleur des minutes.
hCol='000066'; //couleur des heures.
miCol ="000000";//couleur millisecondes

//position en absolut :
Xoff=247;  //à gauche
Yoff=188; //en haut

//taille
Ybase=68; //hauteur
Xbase=68; //largeur

//rafraichissement :
refr=1;

//couleurs de fond
var couleur = new Array();
couleur[0] = '#FF0000';//rouge
couleur[1] = '#00FF00';//vert
couleur[2] = '#0000FF';//bleu
couleur[3] = '#FFFF00';//jaune
couleur[4] = '#00FFFF';//cyan
couleur[5] = '#FF00FF';//magenta

//phrase affichée
var phrase = new Array();
phrase[0] = "le temps ";
phrase[1] = "qui passe ";
phrase[2] = "est une illusion ";
var crpTxt="";
var txt="<h1>";

//ne pas modifier ci-après :
//taille aiguille heure
H='...';
H=H.split('');
//taille aiguille minute
M='....';
M=M.split('');
//taille aiguille secondes
S='.....';
S=S.split('');
//taille aiguille milisecondes
Mi='kabouing cest bien';
Mi=Mi.split('');
NS4=(document.layers);
NS6=(document.getElementById&&!document.all);
IE4=(document.all);
Ypos=0;
Xpos=0;
dots=12;
Split=360/dots;
if (NS6){
	//div milliseconde
	for (i=0; i < Mi.length; i++){
		document.write('<div id="Nw'+i+'" style="position:absolute;top:0px;left:0px;width:10px;height:10px;font-size:8px;font-family:Verdana;color:#FFCCFF;background:#'+miCol+'"></div>');
	}
}
if (NS4){
	//milliseconds
	for (i=0; i < Mi.length; i++){
		document.write('<layer name=nw'+i+' top=0 left=0 bgcolor='+miCol+' clip="0,0,2,2"></layer>');
	}
}
if (IE4){
	document.write('<div style="position:absolute;top:0px;left:0px"><div style="position:relative">');
	document.write('</div></div>');
	document.write('<div style="position:absolute;top:0px;left:0px"><div style="position:relative">');
	for (i=0; i < Mi.length; i++){
		document.write('<div id=w style="position:absolute;width:8px;height:8px;font-size:6px;background:'+mCol+'"></div>');
	}
	document.write('</div></div>');
}



function clock(){
	time = new Date ();
	millis = time.getMilliseconds();
	milli  = -1.57+ Math.PI * millis/500;
	secs = time.getSeconds();
	sec = -1.57 + Math.PI * secs/30;
	mins = time.getMinutes();
	min = -1.57 + Math.PI * mins/30;
	hr = time.getHours();
	hrs = -1.57 + Math.PI * hr/6 + Math.PI*parseInt(time.getMinutes())/360;

	if (NS6){
		Ypos=Yoff;
		Xpos=Xoff;
		 //millisecondes*/
		 for (i = 1; i < Mi.length;i++){
			document.getElementById("Nw"+i).style.top=Ypos+i*Ybase/4.1*Math.cos(milli);
			document.getElementById("Nw"+i).style.left=Xpos+i*Xbase/4.1*Math.sin(milli);
		}
	}
	if (NS4){
		Ypos=Yoff;
		Xpos=Xoff;
		//milliseconds
		for (i=0; i < Mi.length; i++){
			 document.layers["nw"+i].top=Ypos+i*Ybase/4.1*Math.cos(milli);
			 document.layers["nw"+i].left=Xpos+i*Xbase/4.1*Math.sin(milli);
		 }
	}

	if (IE4){
		Ypos=Yoff;
		Xpos=Xoff;
		//milliseconds
		for (i=0; i < Mi.length; i++){
			w[i].style.pixelTop =Ypos+i*Ybase/4.1*Math.cos(sec);
			w[i].style.pixelLeft=Xpos+i*Xbase/4.1*Math.sin(sec);
		 }
	}
	setTimeout('clock()',refr);
}
clock();
//change la couleur toutes les secondes
function changeBg (){
	var leTps = new Date();
	var laSec = leTps.getSeconds();
	var sec = (laSec % 6);
	var titre = (6-sec);
	document.body.style.backgroundColor = couleur[sec]; 
	document.getElementById("annonce").style.color = couleur[titre]; 
	setTimeout('changeBg()', 1000);
}
changeBg();
//ajoute un bout de phrase à chaque minute
function ajtPhrsInit(){
	var leTps = new Date();
	var laMin = leTps.getMinutes();
	for (i=0; i <laMin; i++){
		lit = i%3;
		crpTxt += phrase[lit];
	}
	txt +=crpTxt + "</h1>";
	document.getElementById('annonce').innerHTML = txt;
	crpTxt = "";
	txt = "<h1>";
	setTimeout('ajtPhrsInit()', 60000);
}
ajtPhrsInit();


function ajtImg(){
	var leTps = new Date();
	var lHeure = leTps.getHours();
	var min = leTps.getMinutes();
	var min = min*60*1000;
	var html = "";
	for (i=0;i<lHeure;i++){
		img = (i%6)+1;
		if (img == 4){
			html += "<a href='index2.html'><img src='img/letemps/logo.gif' /></a><br/>";
		}else{
			html += "<a href='index2.html'><img src='img/letemps/img"+img+".jpg' /></a><br/>";
		}
	}
	//alert(html);
	document.getElementById('image').innerHTML = html;
	setTimeout('ajtImg()', 3600000-min);
}
ajtImg();

R=0; x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=400; y4=200; x5=600; y5=200;
DI=document.images; 
DIL=DI.length;
function Afolie(){
	for(i=0; i-DIL; i++){
		DIS=DI[ i ].style;
		DIS.position='absolute'; 
		DIS.left=(Math.sin(R*x1+i*x2+x3)*x4+x5)+"px";
		DIS.top=(Math.cos(R*y1+i*y2+y3)*y4+y5)+"px";
	}
	R++
}
setInterval('Afolie()',35); 
void(0);