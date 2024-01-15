export class UI {
    displayGames(gamesData) {
        var temp = ' '
        for (var i = 0; i < gamesData.length; i++) {
            temp +=
                `<div class="col-md-3 col-sm-6">
                <div class="card p-3 h-100 bg-transparent border border-black text-white"  game-id=${gamesData[i].id} >
                    <img src=${gamesData[i].thumbnail} class="rounded-1" alt="..." game-id=${gamesData[i].id}>
                    <div class="card-body my-3" game-id=${gamesData[i].id}>
                        <h5 class="card-title fw-bold" game-id=${gamesData[i].id}>${gamesData[i].title}</h5>
                        <p class="card-text text-white-50" game-id=${gamesData[i].id}>${gamesData[i].short_description}</p>
                    </div>
                    <div class="d-flex" game-id=${gamesData[i].id}>
                            <p class="w-50 bg-dark text-center" game-id=${gamesData[i].id}>${gamesData[i].genre}</p>
                            <p class="w-50 bg-dark text-center" game-id=${gamesData[i].id}>${gamesData[i].platform}</p>
                     </div>
                </div>
        </div>`
        }
        document.getElementById("games").innerHTML = temp

    }

    displayDetails(gamesDetails) {
        var temp =
            `
            <div class="d-flex justify-content-evenly mt-3">
                <div class="w-25 mt-5">
                <img src="${gamesDetails.thumbnail}" class="w-100 rounded-2">
            </div>
            <div class="w-50 mt-5">
                <h3 class="fw-bold">${gamesDetails.title}</h3>
                <p><span class="fw-bold">Category : </span>${gamesDetails.genre}</p>
                <p><span class="fw-bold">Platform : </span>${gamesDetails.platform}</p>
                <p><span class="fw-bold">Status : </span>${gamesDetails.status}</p>
                <p><span class="fw-bold">Description: : </span>${gamesDetails.description}</p>
                <a href=${gamesDetails.game_url}><button class="btn btn-light my-2">Show Game</button></a>
            </div>
            </div>
            
        `
        document.getElementById("details").innerHTML = temp
    }

}

