console.log("JS WORKING");
const portfolioItems = document.querySelectorAll(".portfolio-item-wrapper");
portfolioItems.forEach((portfolioItem) => {
    portfolioItem.onmouseover = () => {
        portfolioItem.childNodes[1].classList.add("img-darken");
    };
    portfolioItem.onmouseout = () => {
        portfolioItem.childNodes[1].classList.remove("img-darken");
    };
});

const reaction_timer = document.querySelector("#reaction-timer");
const tournament_timer = document.querySelector("#tournament-timer");
