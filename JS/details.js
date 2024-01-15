import { UI } from "../JS/interface.js"
export var number
export class Details {
    async fetchDetails(id) {
        load.classList.replace('d-none', 'd-flex')
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b049f6fd68mshbef2e595531380dp110c78jsn00e1adb45584',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let fetchedData = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        var uiInstant = new UI()
        load.classList.replace('d-flex', 'd-none')
        uiInstant.displayDetails(await fetchedData.json())
        document.getElementById('details').addEventListener('click', function () {
            document.getElementById('details').classList.add('d-none')
        })
    }
    showDetails() {
        let cardList = document.querySelectorAll(".card")
        cardList.forEach(element => {
            element.addEventListener("click", function (eventInfo) {
                var test = new Details()
                document.getElementById('details').classList.replace('d-none', 'd-flex')
                test.fetchDetails(eventInfo.target.getAttribute('game-id'))
            })
        });
    }
}