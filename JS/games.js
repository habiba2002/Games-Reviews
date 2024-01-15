import { UI } from "../JS/interface.js"
import { load } from "../JS/index.js"
import { Details } from "../JS/details.js";

export class Games {
    constructor(Url) {
        this.Url = Url
    }
    async fetchGames() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b049f6fd68mshbef2e595531380dp110c78jsn00e1adb45584',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let fetchedData = await fetch(this.Url, options)
        load.classList.replace('d-flex', 'd-none')
        var uiInstant = new UI()
        uiInstant.displayGames(await fetchedData.json())
        var test = new Details()
        test.showDetails()
    }
}

