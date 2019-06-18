window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menu_burger").addEventListener("click", foldUd);
}


function foldUd() {
    console.log("foldUd");
    document.querySelector(".menu").classList.toggle("hidden");

    let erSkjult = document.querySelector(".menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menu_burger").addEventListener("click", toggleMenu)
    } else {
        document.querySelector("#menu_burger").addEventListener("click", toggleMenu)
    }
}
