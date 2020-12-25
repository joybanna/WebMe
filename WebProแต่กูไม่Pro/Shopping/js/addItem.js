window.onload = pageLoad;

function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

function pageLoad(){
	var para = getParams();
	if(Object.keys(para).length >0){
		if (para["error"]==1){
			document.getElementById('errordisplayRegister').innerHTML =" Sorry!! This Game name already exists. ";
		}
    else if(para["error"]==2){
      document.getElementById('errordisplayUpdate').innerHTML =" Sorry!! Can't find this Game name ";
    }
     else if(para["error"]==3){
      document.getElementById('errordisplayDelete').innerHTML =" Sorry!! Can't find this Game name ";
    }
	}
}