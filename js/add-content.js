var today = new Date();
var hourNow = today.getHours();
var greeting;
//var text-placeholder = document.getElementById('text-placeholder')

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}
document.write('<h3>' + greeting + '</h3>')
//<div id='text-placeholder'></div>
//text-placeholder.textContent =  'some text'