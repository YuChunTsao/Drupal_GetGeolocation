//網頁載入後執行。
window.onload = main;

function GetGeolcation(){
	if(navigator.geolocation){
		//watchPosition ==> 持續回傳用戶移動時的更新位置
		navigator.geolocation.watchPosition(ShowPosition);
	}
	else{
		alert("Geolocation is not supported by this browser.");
	}
}
function ShowPosition(position){
	var latlng = {
		"latitude":position.coords.latitude,
		"longitude":position.coords.longitude
	}
	document.write(JSON.stringify(latlng) + "<br>");
	console.log(JSON.stringify(latlng));
	alert(JSON.stringify(latlng));
}

function main(){
	//setInterval(GetGeolcation , 1000);
	GetGeolcation();
}
