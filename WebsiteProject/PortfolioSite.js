window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    const topButton = document.getElementById("scroll");
    topButton.addEventListener("click", clickHandler);
}

function clickHandler(event) {
    window.scrollTo({top:0, behavior: 'smooth'});
}

function scrollto1() {
    document.getElementById("sub1").scrollIntoView();
}

function scrollto2() {
    document.getElementById("sub2").scrollIntoView();
}

function scrollto3() {
    document.getElementById("sub3").scrollIntoView();
}

function scrollto4() {
    document.getElementById("sub4").scrollIntoView();
}

function scrollto5() {
    document.getElementById("sub5").scrollIntoView();
}

function scrollto6() {
    document.getElementById("sub6").scrollIntoView();
}