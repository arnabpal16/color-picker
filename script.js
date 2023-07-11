const button = document.querySelector('.btn');
const body = document.querySelector('body');

var colors=['red','Azure','Maroon','blue','green','yellow','black','purple','lime','gold','pink'];

body.style.background='azure';

function pickcolor(){
    const color = parseInt(Math.random()*colors.length);
    body.style.background=colors[color];
    count++;
}