/*
Your code goes here!
 */

var validate = function() {
	console.log('this');
	if( firstPasswordInput.value.length > 16 && firstPasswordInput.value.length < 100 ) {
		lenItem.classList.add("valid");
		length = true;
		console.log('added');
	} else if (firstPasswordInput.value.length > 100 ) { //too many characters
		lenItem.classList.remove("valid");
		length = false;
	} else { //too few characters
		lenItem.classList.remove("valid");
		length = false;
	}
};

var checkMatch = function() {
	if( firstPasswordInput.value === secondPasswordInput.value ) {
		console.log('true');
		return true;
	} else {
		return false;
	}
};

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

var length, symbol, number, lower, upper = false;
var lenItem = document.querySelector('#length');
var symItem = document.querySelector('#symbol');
var numItem = document.querySelector('#number');
var lowItem = document.querySelector('#lower');
var upItem = document.querySelector('#upper');

/*
You'll probably find this function useful...
 */  
submit.onclick = function () {
	notif.innerHTML = "";
	notif.classList.remove("success");
	if( !checkMatch() ){
		notif.innerHTML = "Passwords do not match.";
	} else {
		notif.classList.add("success");
		notif.innerHTML = "Password successfully updated!";
	}
};

firstPasswordInput.addEventListener('keyup',function(){
	validate();
});