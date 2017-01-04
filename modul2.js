// задание 1

window.alert = function(message){	
	$('body').append('<div class="mess">' + message + '</div>')
};
alert('Hello, world');
$('.mess').css(
{
	background: '#6EFFA8',
	height: '40px',
	textAlign: 'center'
});
 function hide(){
 setTimeout(function(){$('.mess').fadeOut()}, 3000); 
 }
hide()

// задание 2

/*var array = [];
var i;
function number(){
	while (!true){
	for (i=0; i>=0; i++){
		var b = +prompt('Введите число', '');
		break;
		array.push(b);
}
}
};

console.log(array);
number()*/

// задание 3
var sum = 0;
function avg (){
	for (var i = 0; i < arguments[i]; i++)
		sum += arguments[i];
	return sum / arguments.length;	
};
console.log(avg (1, 5, 7, 12, 1));

// задание 4

// задание 5

var createUser = function(firstName, lastName, fullName){
	this.firstName = firstName;
	$('ul').append('<li>' + firstName + '</li>');
	this.lastName = lastName;
	$('ul').append('<li>' + lastName + '</li>');
	this.fullName = firstName + ' ' + lastName;
	$('ul').append('<li>' + this.fullName + '</li>');
	
};
var user = new createUser(prompt('Введите ваше имя',''), prompt('Введите вашу фамилию',''));
console.log(user)


// задание 6


// задание 7
var points = [
[3, 4, 5],
[2, 3, 9, 16],
[1, 2, 9, 10, 15, 16],
[1, 2, 5, 6, 9, 10, 11, 12, 13, 14, 15 ,16],
[1, 2, 4, 5, 6, 7, 9, 12, 13, 16],
[1, 2, 3, 4, 5, 6, 7, 8, 9, 12 ,13, 16],
[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14 ,15 ,16],
[2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14 ,15 ],
[2, 3, 4, 7, 8, 12, 13],
[2, 3, 7, 8],
[2, 3, 4, 5, 7, 8, 9],
[2, 3, 4, 5, 7, 8, 9]
];

for (var i = 0; i < points.length; i++){
	points[i].length = 16;
	console.log(points[i]);
	$('.cat').append('<div class="white">' + points[i]+ '</div>');
	
};
