//d = v / t
function vdt(d, t) {
	var ans = "";
	ans += "v = d / t";
	ans += "<br>";
	ans += "v = " + d + " / " + t;
	ans += "<br>";
	res = d / t;
	ans += "v = " + res;
	document.getElementById('answers').innerHTML = ans;
}
function tdv(d, v) {
	var ans = "";
	ans += "t = d / v";
	ans += "<br>";
	ans += "t = " + d + " / " + v;
	ans += "<br>";
	res = d / v;
	ans += "t = " + res;
	document.getElementById('answers').innerHTML = ans;
}
function dvt(v, t) {
	var ans = "";
	ans += "d = v * t";
	ans += "<br>";
	ans += "d = " + v + " * " + t;
	ans += "<br>";
	res = t * v;
	ans += "d = " + res;
	document.getElementById('answers').innerHTML = ans;
}
//a = v / t
function avt(d, t) {
	var ans = "";
	ans += "a = v / t";
	ans += "<br>";
	ans += "a = " + d + " / " + t;
	ans += "<br>";
	res = d / t;
	ans += "a = " + res;
	document.getElementById('answers').innerHTML = ans;
}
function tva(d, v) {
	var ans = "";
	ans += "t = v / a";
	ans += "<br>";
	ans += "t = " + d + " / " + v;
	ans += "<br>";
	res = d / v;
	ans += "t = " + res;
	document.getElementById('answers').innerHTML = ans;
}
function vat(v, t) {
	var ans = "";
	ans += "v = a * t";
	ans += "<br>";
	ans += "v = " + v + " * " + t;
	ans += "<br>";
	res = t * v;
	ans += "v = " + res;
	document.getElementById('answers').innerHTML = ans;
}
