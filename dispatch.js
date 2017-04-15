var varNums = 0;
var values = [];
var units = [];
/*
	Units list:
	0: A, acceleration
	1: D, displacement
	2: F. force
	3: J, impulse
	4: K, spring constant
	5: KE, kinetic energy
	6: M, mass
	7: P, power
	8: PE, potential energy
	9: Q, internal energy
	10: R, radius
	11: T, time
	12: V, velocity
	13, W, work
	14: X, change in spring length
	15: THETA, angle
	16: MU, coefficient of friction
*/
var all = [];
function addValue() {
	var hold = document.getElementById('form').innerHTML;
	hold += '<br><input type="text" id="var' + varNums +'" value=""><input type="text" id="un'+ varNums +'" value="">';
	document.getElementById('form').innerHTML = hold;
	varNums++;
}
function resetForm() {
	varNums = 0;
	document.getElementById('form').innerHTML = '<input type="button" name="add" value="add value" onclick="addValue();"><input type="button" name="reset" value="reset form" onclick="resetForm();">';
	document.getElementById('options').innerHTML = "";
	document.getElementById('answers').innerHTML = "";
}
function solveVariables() {
	gather();
	trueFalse();
	options();
}
function gather() {
	for (var i = 0; i < varNums; i++) {
		values[i] = parseFloat(document.getElementById('var' + i).value);
		units[i] = document.getElementById('un' + i).value.toUpperCase();
	}
}
function trueFalse() {
	for (var i = 0; i < 17; i++) {
		all[i] = 0;
	}
	for (var i = 0; i < units.length; i++) {
		if (units[i] == "A") {
			all[0] = values[i];
		}
		if (units[i] == "D") {
			all[1] = values[i];
		}
		if (units[i] == "F") {
			all[2] = values[i];
		}
		if (units[i] == "J") {
			all[3] = values[i];
		}
		if (units[i] == "K") {
			all[4] = values[i];
		}
		if (units[i] == "KE") {
			all[5] = values[i];
		}
		if (units[i] == "M") {
			all[6] = values[i];
		}
		if (units[i] == "P") {
			all[7] = values[i];
		}
		if (units[i] == "PE") {
			all[8] = values[i];
		}
		if (units[i] == "Q") {
			all[9] = values[i];
		}
		if (units[i] == "R") {
			all[10] = values[i];
		}
		if (units[i] == "T") {
			all[11] = values[i];
		}
		if (units[i] == "V") {
			all[12] = values[i];
		}
		if (units[i] == "W") {
			all[13] = values[i];
		}
		if (units[i] == "X") {
			all[14] = values[i];
		}
		if (units[i] == "THETA") {
			all[15] = values[i];
		}
		if (units[i] == "MU") {
			all[16] = values[i];
		}
	}
}
function options() {
	var buttons = "";
	//d = v / t
	if (all[1] != 0 && all[11] != 0) {
		buttons += "<input type='button' value='v' onclick='vdt( " + all[1] + "," + all[11] + " );'>";
	}
	if (all[1] != 0 && all[12] != 0) {
		buttons += "<input type='button' value='t' onclick='tdv( " + all[1] + "," + all[12] + " );'>";
	}
	if (all[11] != 0 && all[12] != 0) {
		buttons += "<input type='button' value='d' onclick='dvt( " + all[11] + "," + all[12] + " );'>";
	}
	//a = v / t
	if (all[12] != 0 && all[11] != 0) {
		buttons += "<input type='button' value='a' onclick='avt( " + all[12] + "," + all[11] + " );'>";
	}
	if (all[12] != 0 && all[0] != 0) {
		buttons += "<input type='button' value='t' onclick='tva( " + all[12] + "," + all[0] + " );'>";
	}
	if (all[11] != 0 && all[0] != 0) {
		buttons += "<input type='button' value='v' onclick='vat( " + all[11] + "," + all[0] + " );'>";
	}
	document.getElementById('options').innerHTML = buttons;
}
