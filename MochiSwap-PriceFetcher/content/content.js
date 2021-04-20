setInterval(function(){ 
	var inputContainer = document.getElementsByClassName("sc-bFADNz hzhxvm token-amount-input")[0];
	if(inputContainer.value > 0){
		var addrContainer = document.getElementsByClassName("css-1qqnh8x")[5];
		var val = addrContainer.innerText.split(' ')[0];
		if(val > 0){
			var currentdate = new Date(); 
			var datetime = currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " "  + currentdate.getHours() + ":"  + currentdate.getMinutes() + ":" + currentdate.getSeconds();
			var output = datetime + ";" + val;
			console.log(output);
		}
	}
}, 5000);


