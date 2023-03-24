const p1button = document.querySelector("#p1");
const p2button = document.querySelector("#p2");
const resetButton = document.querySelector("#reset");
const p1display = document.querySelector("#p1display");
const p2display = document.querySelector("#p2display");
const totalScore = document.querySelector("#totalScore");

let p1score = 0;
let p2score = 0;
let winningScore = 3;

totalScore.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

p1button.addEventListener('click', function () {
    if (p1score + p2score !== winningScore) {
        p1score += 1;
        p1display.innerHTML = p1score;
    }
    else{
        changecolour();
    }
})

p2button.addEventListener('click', function () {
    if (p1score + p2score !== winningScore) {
        p2score += 1;
        p2display.innerHTML = p2score;
    }
    else{
        changecolour();
    }
})

function changecolour(){
    if(p1score>p2score){
        p1display.classList.add('has-text-success');
        p2display.classList.add('has-text-danger');
    }
    else{
        p2display.classList.add('has-text-success');
        p1display.classList.add('has-text-danger');
    }
    p1button.disabled=true;
    p2button.disabled=true;
}

resetButton.addEventListener('click', reset)

function reset() {
    p1score = 0;
    p2score = 0;
    p1display.innerHTML = 0;
    p2display.innerHTML = 0;
    p1display.classList.remove('has-text-success','has-text-danger');
    p2display.classList.remove('has-text-success','has-text-danger');
    p1button.disabled=false;
    p2button.disabled=false;
    
}