const cartbutton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartbutton.addEventListener('click', toogleModal);

close.addEventListener('click', toogleModal);

function toogleModal() {
    modal.classList.toggle('is-open');
}

new WOW().init ();