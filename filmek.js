document.addEventListener("DOMContentLoaded", function() {
    // AddNewFilm függvény definíciója a DOMContentLoaded eseménykezelő tartományon belül
    function addNewFilm(title, director, releaseYear, genre, rating) {
        const newFilmDiv = document.createElement("div");
        newFilmDiv.classList.add("col-6", "col-sm-3");
        newFilmDiv.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img id="resizableImage" src="https://wallpapers.video/wp-content/uploads/2023/01/rick-realism-wallpaper-estatico.jpg" alt="Kép">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">Rendező: ${director}</p>
                    <p class="card-text">Megjelenés éve: ${releaseYear}</p>
                    <p class="card-text">Műfaj: ${genre}</p>
                    <p class="card-text">Értékelés: ${rating}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `;
        document.getElementById("filmContainer").appendChild(newFilmDiv);
    }

    document.getElementById("filmForm").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const title = document.getElementById("title").value;
        const director = document.getElementById("director").value;
        const releaseYear = document.getElementById("releaseYear").value;
        const genre = document.getElementById("genre").value;
        const rating = document.getElementById("rating").value;
        const newFilm = {
            title: title,
            director: director,
            releaseYear: releaseYear,
            genre: genre,
            rating: rating
        };
        console.log("Új film adatai:");
        console.log(newFilm);
        this.reset();
        addNewFilm(title, director, releaseYear, genre, rating);
    });
    
});
