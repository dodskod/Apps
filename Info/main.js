let listGames =[
		"Float Boo",
		"Pixel Dado",
		"Pixel Moneda",
		"Frog Ninja"
	];
let canShowing = false;
function starts(){
	//appName
	let appName = getName("appName");
	for (var i = listGames.length - 1; i >= 0; i--) {
		if (listGames[i] == appName) {
			canShowing = true;
			break;
		}
	}
	if (canShowing) {
		document.getElementById("appName").innerHTML = appName;
	}else{
		//realApp
		document.getElementById("realApp").className = "hideSection";
		document.getElementById("fakeApp").className = "showSection";
	}
	
}

function getName(name){
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	let regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
	let results = regex.exec(location.search);
	return results === null ? "Float Boo" : decodeURIComponent(results[1].replace(/\+/g, " "));
}