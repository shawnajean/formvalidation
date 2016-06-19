/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');
var notif = document.querySelector('#notif');

var lengthLess100 = true;
var lengthMore16 = false;
var symbol = false;
var number = false;
var lower = false;
var upper = false;
var validated = false;

var lenItem = document.querySelector('#length');
var symItem = document.querySelector('#symbol');
var numItem = document.querySelector('#number');
var lowItem = document.querySelector('#lower');
var upItem = document.querySelector('#upper');

var validate = function() {
	var pswd = firstPasswordInput.value;
	if( pswd.length >= 16 && pswd.length <= 100 ) {
		lenItem.classList.add("valid");
		lengthLess100 = true;
		lengthMore16 = true;
	} else if (pswd.length > 100 ) { //too many characters
		lenItem.classList.remove("valid");
		lengthLess100 = false;
		lengthMore16 = true;
	} else { //too few characters
		lenItem.classList.remove("valid");
		lengthMore16 = false;
		lengthLess100 = true;
	}

	if( /[\!\@\#\$\%\^\&\*]/g.test(pswd) ){ //includes a symbol
		symItem.classList.add("valid");
		symbol = true;
	} else {
		symItem.classList.remove("valid");
		symbol = false;
	}

	if( /\d/g.test(pswd) ){ //includes a number
		numItem.classList.add("valid");
		number = true;
	} else {
		numItem.classList.remove("valid");
		number = false;
	}

	if( /[a-z]/g.test(pswd) ){ //includes lowercase letter
		lowItem.classList.add("valid");
		lower = true;
	} else {
		lowItem.classList.remove("valid");
		lower = false;
	}

	if( /[A-Z]/g.test(pswd) ){ //includes uppercase letter
		upItem.classList.add("valid");
		upper = true;
	} else {
		upItem.classList.remove("valid");
		upper = false;
	}

	if( /[^A-z0-9\!\@\#\$\%\^\&\*]/g.test(pswd) ) { //checks for disallowed characters
		validated = false;
	} else {
		validated = true;
	}

	validated = validated && length && symbol && number && lower && upper;
};

var checkMatch = function() {
	if( firstPasswordInput.value === secondPasswordInput.value ) {
		return true;
	} else {
		return false;
	}
};

/*
You'll probably find this function useful...
 */  
submit.onclick = function () {
	firstPasswordInput.setCustomValidity('');
	if( !checkMatch() ){
		firstPasswordInput.setCustomValidity( "Passwords do not match." );
	} else if( !lengthLess100 ) {
		firstPasswordInput.setCustomValidity( "Must be fewer than 100 characters.");
	} else if( !lengthMore16 ) {
		firstPasswordInput.setCustomValidity( "Must be at least 16 characters.");
	} else if( !symbol ) {
		firstPasswordInput.setCustomValidity( "A symbol must be included.");
	}
	else if( validated ){
		notif.innerHTML = "Password successfully updated!";
		firstPasswordInput.value = "";
		secondPasswordInput.value = "";
	}
};

firstPasswordInput.addEventListener('keyup',function(){
	validate();
});