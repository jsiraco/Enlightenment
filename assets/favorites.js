const favContainter = $(".favorites-here");
const nofavs = $(".no-favorites-yet");

favObjects = [];

function init() {
    let storedFavs = JSON.parse(localStorage.getItem("likes"));
    if (storedFavs !== null) {
        favObjects = storedFavs;
    }

    loadImages();
}

function buildRows(event) {

}

function loadImages() {
    if (favObjects.length == 0) {
        nofavs.removeClass("no-favorites-yet");

    }
    let uniqueFavs = favObjects.filter((v, i, a,) => a.indexOf(v) === i);
    for (let i = 0; i < uniqueFavs.length; i++) {
        let favBtn = $("<button>").addClass("button is-fullwidth is-light is-primary").html("❤️");
        let imgDiv = $("<div>").addClass("column testHere is-clickable");
        let imgFigure = $("<figure>").addClass("image");
        let imgSrc = $(`<img src='${uniqueFavs[i]}'>`).addClass("spaced-image");

        imgFigure.append(imgSrc, favBtn);
        imgDiv.append(imgFigure);
        favContainter.append(imgDiv);

        imgSrc.on("click", function () {
            window.open(uniqueFavs[i], "_blank");
            console.log("click");
        })

        favBtn.on("click", function () {
            favBtn.html("🖤");
            console.log(uniqueFavs[i]);
            favObjects.pop(uniqueFavs[i]);
            localStorage.setItem("likes", JSON.stringify(favObjects));
        })
    }
}


init();