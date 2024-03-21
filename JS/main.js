// creating letters button
const Alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];


const btns = document.getElementById("buttons");
const movieName = document.getElementById("MovieName");
const startBtn = document.getElementById("startBtn")
const start = document.getElementById('start');
const moviePlace = document.getElementById("moviePlace");
const gameStart = document.getElementById("gameStart")
const lostGame = document.getElementById("lostGame")
const winGame = document.getElementById("winGame")
const newGame = document.getElementById("newGame")
const tryAgian = document.getElementById("tryAgian")
const movieholder = document.getElementById("movieholder")
const displayName = document.getElementById("displayName");
const displayName1 = document.getElementById("displayName1");
const alretMsg = document.getElementById("incorrect")
const movie = [];
const indices = [];





//create letters 
function createLett() {
    let lettBtn = ``;
    for (let i = 0; i < Alph.length; i++) {
        lettBtn += ` <button class="border border-1 p-2 rounded-2 btn btn-outline-warning text-white id="${Alph[i]}">${Alph[i].toUpperCase()}</button>`
    }

    btns.innerHTML = lettBtn;
}

createLett()

// Start the game 
start.addEventListener("click", function () {
    gameStart.style.display = "none"
})

newGame.addEventListener("click", function () {

    location.reload();
})

tryAgian.addEventListener("click", function () {

    location.reload();
})

// main function

function main() {
    movies();
}

startBtn.addEventListener('click', main)

// take movie name from user
function movies() {
    if (movieName.value == "") {
        alretMsg.style.display = "flex"
        return false;
    }

    movie.unshift(movieName.value);
    movie.join("");
    movieName.value = "";
    movieLett(movie[0]);
    movieholder.classList.add("d-none");

}

// function loop on array and create a placeholders on html
var placeHolder = [];
function movieLett(str) {
    placeHolder = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            placeHolder.push(" / ");
        } else {
            placeHolder.push("_");
        }
    }
    moviePlace.innerHTML = placeHolder.join("");
}



// function to choose a letter and guess if the string has it or not

let buttonList = btns.querySelectorAll("button");
buttonList.forEach(function (el) {

    el.addEventListener("click", function (e) {
        el.disabled = true;

        let letter = e.target.innerHTML.toLowerCase();
        let movieStr = movie[0];
        addLett(movieStr, letter)
        moviePlace.innerHTML = placeHolder.join("");

    });
});


// if letter is right wirte in its place and if its wrong add to the table

let cells = Array.from(document.querySelectorAll("#myTable tbody .TableRow td"))
let j = 0;

// function which determine if you win or lose
function addLett(str, letter) {
    if (cells[7].innerHTML != "") {
        lostGame.style.display = "flex";
        displayName.innerHTML = movie[0].toUpperCase();

    }
    if (!(str.includes(letter))) {
        cells[j].innerHTML = letter.toUpperCase();
        j++;
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase().includes(letter)) {
            placeHolder[i] = letter.toUpperCase();
        }

        if (!(placeHolder.includes("_"))) {
            winGame.style.display = "flex";
            displayName1.innerHTML = movie[0].toUpperCase();
            break;
        }
    }

}


