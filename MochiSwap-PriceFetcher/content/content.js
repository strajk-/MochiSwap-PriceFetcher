setInterval(function(){ 
	var inputContainer = document.getElementsByClassName("token-amount-input")[1];
	if(inputContainer.value > 0){
		var currentdate = new Date(); 
		var datetime = currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " "  + currentdate.getHours() + ":"  + currentdate.getMinutes() + ":" + currentdate.getSeconds();
		var output = datetime + ";" + inputContainer.value;
		console.log(output);
	}
}, 5000);
