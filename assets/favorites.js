const favContainter = $(".favorites-here");

favObjects = [];

function init() {
    let storedFavs = JSON.parse(localStorage.getItem("likes"));
    if (storedFavs !== null) {
        favObjects = storedFavs;
    }
    loadImages();
}

function loadImages() {
    for (let i = 0; i < favObjects.length; i++) {
        let imgDiv = $("<div>").addClass("class='column testHere'");
        let imgFigure = $("<figure>").addClass("class='image'");
        let imgSrc = $(`<img src='${favObjects[i]}'>`);
        imgFigure.append(imgSrc);
        imgDiv.append(imgFigure);
        favContainter.append(imgDiv);
        }
}


init();