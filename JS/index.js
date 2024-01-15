import { Games } from "../JS/games.js"

export let load = document.getElementById('load')
let categories = document.querySelectorAll(".nav-link")
let game = new Games(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter`)
game.fetchGames()

categories.forEach(element => {
    element.addEventListener('click', function (eventInfo) {
        load.classList.replace('d-none', 'd-flex')
        let categoryToShow = eventInfo.target.getAttribute("category")
        let game = new Games(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryToShow}`)
        game.fetchGames()
        
    })
    
});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}