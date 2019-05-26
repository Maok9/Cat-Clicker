


let cat = document.getElementById('cat');
let score = document.getElementById('score');
let moves=0;



cat.addEventListener("click", function() {
    moves++;
    score.innerHTML=moves;
});


