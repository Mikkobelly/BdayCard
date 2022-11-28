// prompt("Do you want to reveal your birthday card?? Type yes if you do!:)");

const card = document.querySelector('.card');

card.addEventListener('click', () => {
    card.classList.toggle("flipCard");
})