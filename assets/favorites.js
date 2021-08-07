const favContainter = $(".favorites-here");
const otherFavContainer = $(".other-favorites-here");
const nofavs = $(".no-favorites-yet");

favObjects = [];

//Gets items from local storage
function init() {
    let storedFavs = JSON.parse(localStorage.getItem("likes"));
    if (storedFavs !== null) {
        favObjects = storedFavs;
    }
//calls load function
    loadImages();
}

function loadImages() {
    //if there are no favorites, an html element telling the user to go like something is shown
    if (favObjects.length == 0) {
        nofavs.removeClass("no-favorites-yet");

    }
    //Filters out any duplicate favorites from the array
    let uniqueFavs = favObjects.filter((v, i, a,) => a.indexOf(v) === i);
    for (let i = 0; i < uniqueFavs.length; i++) {
        //creates HTML elements
        let favBtn = $("<button>").addClass("button is-fullwidth is-light is-primary").html("❤️");
        let imgDiv = $("<div>").addClass("column testHere is-clickable margin");
        let imgFigure = $("<figure>").addClass("image");
        let imgSrc = $(`<img src='${uniqueFavs[i]}'>`).addClass("spaced-image");

        imgFigure.append(imgSrc, favBtn);
        imgDiv.append(imgFigure);

        //if the index of a favorite is an even number, it will be put in the second column
        if (i % 2) {
            otherFavContainer.append(imgDiv);
        } else {
            //otherwise put it in the first
            favContainter.append(imgDiv);
        }

        //opens image in a new tab/window
        imgSrc.on("click", function () {
            window.open(uniqueFavs[i], "_blank");
        })

        //removes item from favorites
        favBtn.on("click", function () {
            favBtn.html("🖤");
            console.log(uniqueFavs[i]);
            let removeItem = uniqueFavs[i];
            favObjects = $.grep(favObjects, function(event) {
                return event != removeItem;
            })
            //sets the array again
            localStorage.setItem("likes", JSON.stringify(favObjects));
        })
    }
}


init();