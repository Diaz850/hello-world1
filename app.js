'use strict';

function getAge() {
    let userName = prompt('What is your age?');
    let ageint = parseInt(userName) 
if (ageint >= 18){
    document.write( ageint + ' looks good on you!')
}
else{
    alert('Come back when youre old enough');
}
}
getAge();



function greetUser() {
    console.log('Welcome to the console page!')
}
greetUser()

for(let i= 3;i <10; i++){
    console.log(i)}

for(let i = 10; i >=0; i--){
    console.log('you have' + i + 'turns left')
}