var col11 = document.querySelector("#col11");
var col12 = document.querySelector("#col12");
var col13 = document.querySelector("#col13");
var col21 = document.querySelector("#col21");
var col22 = document.querySelector("#col22");
var col23 = document.querySelector("#col23");
var col31 = document.querySelector("#col31");
var col32 = document.querySelector("#col32");
var col33 = document.querySelector("#col33");
var happy = document.querySelector("#happy");

//audios
var audio1 = document.querySelector("#audio1");
var audio2 = document.querySelector("#audio2");
var audio3 = document.querySelector("#audio3");
var audio4 = document.querySelector("#audio4");
var audio5 = document.querySelector("#audio5");
var audio6 = document.querySelector("#audio6");
var audio7 = document.querySelector("#audio7");
var audio8 = document.querySelector("#audio8");
var audio9 = document.querySelector("#audio9");

// 1st box
function func1() {
    col11.classList.toggle("col11");

    audio1.play();
    happy.textContent = "play with it";

    happy.classList.remove("bday");
}

function fun1() {

    audio1.pause();
}


//2nd box
function func2() {
    col12.classList.toggle("col12");
    audio2.play();
    happy.textContent = "play with it";
    happy.classList.remove("bday");

};


function fun2() {
    audio2.pause();
};

//3rd box
function func3() {
    col13.classList.toggle("col13");
    audio3.play();
    happy.textContent = "happy birthday Parnava ";
    happy.classList.add("bday");
}

function fun3() {

    audio3.pause();
}


//4th box
function func4() {
    col21.classList.toggle("col21");
    audio4.play();
    happy.textContent = "play with it";
    happy.classList.remove("bday");

}

function fun4() {

    audio4.pause();
}


//5th box
function func5() {
    col22.classList.toggle("col22");
    audio5.play();
    col22.classList.toggle("col22x")
    happy.textContent = "play with it";
    happy.classList.remove("bday");

}

function fun5() {

    audio5.pause();
}



//6th box
function func6() {
    col23.classList.toggle("col23");
    audio6.play();
    happy.textContent = "play with it";
    happy.classList.remove("bday");
}



function fun6() {

    audio6.pause();
}


//7th box
function func7() {
    col31.classList.toggle("col31");
    audio7.play();
    happy.textContent = "play with it";
    happy.classList.remove("bday");
}

function fun7() {

    audio7.pause();
}

//8th box
function func8() {
    col32.classList.toggle("col32");
    audio8.play();
    happy.textContent = "Happy Birthday Parnava"
    happy.classList.add("bday");
}

function fun8() {

    audio8.pause();
}


//9th box
function func9() {
    col33.classList.toggle("col33");
    audio9.play();
    happy.textContent = "i love you Baby"
    happy.classList.add("bday");
}

function fun9() {

    audio9.pause();
}