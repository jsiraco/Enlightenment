const favContainter = $(".favorites-here");
const otherFavContainer = $(".other-favorites-here");
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
        let imgDiv = $("<div>").addClass("column testHere is-clickable margin");
        let imgFigure = $("<figure>").addClass("image");
        let imgSrc = $(`<img src='${uniqueFavs[i]}'>`).addClass("spaced-image");

        imgFigure.append(imgSrc, favBtn);
        imgDiv.append(imgFigure);

        if (i % 2) {
            otherFavContainer.append(imgDiv);
        } else {

            favContainter.append(imgDiv);
        }

        imgSrc.on("click", function () {
            window.open(uniqueFavs[i], "_blank");
        })

        favBtn.on("click", function () {
            favBtn.html("🖤");
            console.log(uniqueFavs[i]);
            let removeItem = uniqueFavs[i];
            favObjects = $.grep(favObjects, function(event) {
                return event != removeItem;
            })
            localStorage.setItem("likes", JSON.stringify(favObjects));
        })
    }
}


init();