function validateNumber() {
	var x,	text;
	x = document.getElementById('numberDate').value;

	if (isNaN(x)||x<1||x>12) {
		return false;
	}
	else{
		return true;
	}
	document.getElementById('demo').innerHTML = text;
}	