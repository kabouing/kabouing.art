 /* -- jQuery Colourific */
 /* -- v 1.0 - January 2008 */
 /* -- by ben watts (http://www.benwatts.ca/sandbox/jquery-colourific/) */

/*  $(document).ready(function(){
 	setupColourific();
 }); */

 // setupColourific
 function setupColourific(el){
 	//var elementToChange = $(el); // the element that's changing
 	changeColour(el);
 	//window.setInterval( function(){changeColour(elementToChange)}, 2000);
  }

 // changeColour
 function changeColour(e){
	//alert(e);
 	// random values between 0 and 255, these are the 3 colour values
 	var r = Math.floor(Math.random()*256);
 	var g = Math.floor(Math.random()*256);
 	var b = Math.floor(Math.random()*256);

 	// puts the hex value inside this element (e is a jquery object)
 	//e.text(getHex(r,g,b));
	var couleur = getHex(r,g,b);
	//alert(couleur);
	e.css({'color': couleur});
	//alert (e+".css({'color': couleur})");
 	// change the text colour of this element
 	//e.hide().css("color", getHex(r,g,b)).fadeIn("fast");
	

 }

 // intToHex()
 function intToHex(n){
 	n = n.toString(16);
 	// eg: #0099ff. without this check, it would output #099ff
 	if( n.length < 2)
 		n = "0"+n;
 	return n;
 }

 // getHex()
 // shorter code for outputing the whole hex value
 function getHex(r, g, b){
 	return '#'+intToHex(r)+intToHex(g)+intToHex(b);
 }
 
 function changeFont(a){
	catalog = new Array(
			"Arial",
			"verdana",
			"Courier New",
			"Lucida Console",
			"Helvetica Neue LT Std",
			"times new roman",
			"Florencesans Bold (TrueType)",
			"calibri",
			"helvetica",
			"Georgia",
			"Arial Black"
			
	);
	//alert (catalog.length);
	var lg = catalog.length;
	//alert(Math.floor(Math.random()*lg));
	rd = Math.floor(Math.random()*lg);
	//on change la police du lien passé
	a.css({'font-family' : catalog[rd]});
	
}

function changePosition(b){
	//b pour bougeable
	hasard_neg_pos_x = Math.round(Math.random());
	//alert(hasard_neg_pos_x);
	if (hasard_neg_pos_x > 0){
		x = Math.floor(Math.random()* 200);
	}else{
		x = Math.floor(Math.random()* -200)+100;
	}
	//alert(x);
	hasard_neg_pos_y = Math.round(Math.random());
	if (hasard_neg_pos_y > 0){
		y = Math.floor(Math.random()* 150);
	}else{
		y = Math.floor(Math.random()* -150)+200;
	}
	b.css({
			"margin-left" : x,
			"margin-top" : y
		});
}

function windowsize()
{
  var noPx = document.childNodes ? 'px' : 0;
  var browserName=navigator.appName; 
  if (browserName=="Netscape") { i=Math.round((window.innerWidth-945)/2); } 
  if (browserName=="Microsoft Internet Explorer")
  {   
   // alert(document.body.offsetWidth);
    i=Math.round((document.documentElement.clientWidth-945)/2); //Get Web Browser Width in IE ???
  }
  else
  {
    i=Math.round((screen.width-945)/2); //Get Screen Width for other browser
  }
  if (i<1) {i=1;} 
}
	
	
	
	
	
	
	
	
	
	
	
	
