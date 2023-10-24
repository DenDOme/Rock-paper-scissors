const computerDisplay = document.getElementById('computer');
const userDisplay = document.getElementById('user');
const resultDisplay = document.getElementById('result');
const userChoise = document.querySelectorAll('button');
let userChoises, computerChoises, result;

userChoise.forEach(userChoise => userChoise.addEventListener('click', (e) => {
    userChoises = e.target.id;
    userDisplay.innerHTML = userChoises;
    generateRandom();
    getResult();
}))

function generateRandom(){
    const randomNumb = Math.floor(Math.random() * 3) + 1;
    if(randomNumb === 1){
        computerChoises = 'rock';
    }
    if(randomNumb === 2){
        computerChoises = 'scissors';
    }
    if(randomNumb === 3) {
        computerChoises = 'paper'
    }
    computerDisplay.innerHTML = computerChoises;
}
function getResult(){
    if(computerChoises === userChoises){
        result = 'draw';
    }
    if(computerChoises === 'rock' && userChoises === 'paper'){
        result = 'win';
    }
    if(computerChoises === 'rock' && userChoises === 'scissors'){
        result = 'lose';
    }
    if(computerChoises === 'paper' && userChoises === 'scissors'){
        result = 'win';
    }
    if(computerChoises === 'paper' && userChoises === 'rock'){
        result = 'lost';
    }
    if(computerChoises === 'scissors' && userChoises === 'rock'){
        result = 'win';
    }
    if(computerChoises === 'scissors' && userChoises === 'paper'){
        result = 'lost';
    }
    resultDisplay.innerHTML = result;
}