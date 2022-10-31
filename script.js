'use strict'


const ss = document.getElementById('one');
const ss1 = document.getElementById('two');
const ss2 = document.getElementById('three');
const ss3 = document.getElementById('plus');


const ss4 = document.getElementById('four');
const ss5 = document.getElementById('five');
const ss6 = document.getElementById('six');
const ss7 = document.getElementById('minus');


const ss8 = document.getElementById('seven');
const ss9 = document.getElementById('eight');
const ss10 = document.getElementById('nine');
const ss11 = document.getElementById('times');


const ss12 = document.getElementById('zero');
const ss13 = document.getElementById('dot');
const ss14 = document.getElementById('equals');
const ss15 = document.getElementById('clear');
const ss16 = document.getElementById('division');

const ss17 = document.getElementById('delete');
const ss18 = document.getElementById('sin');
const ss19 = document.getElementById('cos');
const ss20 = document.getElementById('tan');
const ss21 = document.getElementById('pie');
const ss222 = document.getElementById('square');



const checkNum = (str) => {
	for (let i = 0; i < str.length; i++) {
		let ch = str.charAt(i);
		if (ch < "0" ?. ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				return false
				}
			}
		}
		return true
};



// function Coverts a pie 
const addChar = (input, character) => {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

// Cos function

function cos(form) {
	form.answer.value = Math.cos(form.answer.value);
}


// Sin function
function sin(form) {
	form.answer.value = Math.sin(form.answer.value);
}


// Tan function

function tan(form) {
	form.answer.value = Math.tan(form.answer.value);
}
// Square function
function square(form) {
	form.answer.value = eval(form.answer.value) * eval(form.answer.value)
}

// Button function one
ss.addEventListener('click', function(){
    form1.answer.value += '1'
});


// Button function two
ss1.addEventListener('click', function(){

    form1.answer.value += '2'
});


// Button function three
ss2.addEventListener('click', function(){
   
    form1.answer.value += '3'
});



// Button function plus
ss3.addEventListener('click', function(){
    
    form1.answer.value += '+'
});



// Button function four
ss4.addEventListener('click', function(){
    
    form1.answer.value += '4'
});


// Button function five
ss5.addEventListener('click', function(){
    
    form1.answer.value += '5'
});


// Button function six
ss6.addEventListener('click', function(){
    
    form1.answer.value += '6'
});


// Button function minus
ss7.addEventListener('click', function(){
   
    form1.answer.value += '-'
});



// Button function seven
ss8.addEventListener('click', function(){
    
    form1.answer.value += '7'
});



// Button function eight
ss9.addEventListener('click', function(){
    
    form1.answer.value += '8'
});

// Button function nine
ss10.addEventListener('click', function(){
   
    form1.answer.value += '9'
});


// Button function times
ss11.addEventListener('click', function(){
   
    form1.answer.value += '*'
});


// Button function zero
ss12.addEventListener('click', function(){
   
    form1.answer.value += '0'
});



// Button function dot
ss13.addEventListener('click', function(){
   
    form1.answer.value += '.'
});


// Button function equals
ss14.addEventListener('click', function(){
   
    form1.answer.value = eval(form1.answer.value);
});


// Button function clear
ss15.addEventListener('click', function(){
   
    form1.answer.value = ' ';
});



// Button function division
ss16.addEventListener('click', function(){
   
    form1.answer.value += '/'
});


// Delete function remove the element from total length ? 1 */

ss17.addEventListener('click', function(){
    const del = form1.answer.value;
    form1.answer.value = del.substring(0, del.length - 1); 

});


// Sin function button

ss18.addEventListener('click', function(){

    if(checkNum(this.form.answer.value)) { sin(this.form) }
});

// Cos function button
ss19.addEventListener('click', function(){

    if(checkNum(this.form.answer.value)) { cos(this.form) }
});

// tan function button
ss20.addEventListener('click', function(){

    if(checkNum(this.form.answer.value)) { tan(this.form) }
});

// Pie function button
ss21.addEventListener('click', function(){
    addChar(this.form.answer,'3.14159265359')
    
});

// Square function button
ss222.addEventListener('click', function(){
    if(checkNum(this.form.answer.value)) {square(this.form) }
});