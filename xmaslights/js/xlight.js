

document.write("<div id='lights' style='position:absolute;width:100%;height:180px;top:20px;background:url(./e107_plugins/xmaslights/images/light.png') no-repeat;left:40%;margin-left:-10px'></div>")

setInterval( "xmasLights();", 1000 );
var lights = "active";
function xmasLights(){
	var img = document.getElementById('lights');
	if(lights == "active"){
		img.style.backgroundPosition = "0 -180px";
		lights = "inactive";
	}else{
		img.style.backgroundPosition = "";
		lights = "active";
	}
}
