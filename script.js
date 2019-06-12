/*
let burger = document.querySelector("#burger");
let menu = document.querySelector(".menu");

*/
/*function burgerMenu() {
    console.log("burgerMenu");*/
document.querySelector("#burger").addEventListener("click", openNav);
/*}*/

function openNav() {
    console.log("openNav");
    document.querySelector(".menu").classList.remove("hidden");
    document.querySelector("#burger").addEventListener("click", closeNav);
}

function closeNav() {
    console.log("closeNav");
    document.querySelector(".menu").classList.add("hidden");

}
