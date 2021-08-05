
//All public domain metmuseum images
//only public domain images can have image URL accessed
//https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=isPublicDomain
//https://collectionapi.metmuseum.org/public/collection/v1/search?q=textiles&q=isPublicDomain
//&q=

let requestIdUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=isPublicDomain`;
let imgContainerOne = $("#row-one");
let imgContainerTwo = $("#row-two");
let requestUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/`;


apiObjects = [];
favObjects = [];

//Use event handlers to change these values
//Mats: cermaics, furniture, paintings, sculpture, textiles
//GeoLocation: asia, europe, africa, 

let geoLocation = "";
//let materials = "&textiles";
let materials = "";


// console.log(requestIdUrl + `&q=${materials}`);

function onPageLoad() {
    let storedFavs = JSON.parse(localStorage.getItem("likes"));
    if (storedFavs !== null) {
        favObjects = storedFavs;
    }
}



///////Builds the first row of images
function buildImageRowOne(response) {
    $.ajax({
        url: requestUrl + response.objectIDs[Math.floor(Math.random() * response.objectIDs.length)],
        method: "GET",
    }).then(function (response) {
        let testBtn = $("<button>").addClass("button").html("Like");
        let imgDiv = $("<div>").addClass("class='column testHere'");
        let imgFigure = $("<figure>").addClass("class='image'");
        let imgSrc = $(`<img src='${response.primaryImageSmall}'>`);

        imgFigure.append(imgSrc, testBtn);
        imgDiv.append(imgFigure);
        imgContainerOne.append(imgDiv);
        testBtn.on("click", function () {
            console.log("like");
            favObjects.push(response.primaryImageSmall);
            localStorage.setItem("likes", JSON.stringify(favObjects));
        })
        return apiObjects
    });
}

//Builds the second row of images
function buildImageRowTwo(response) {
    $.ajax({
        url: requestUrl + response.objectIDs[Math.floor(Math.random() * response.objectIDs.length)],
        method: "GET",
    }).then(function (response) {
        let testBtn = $("<button>").addClass("button").html("Like");
        let imgDiv = $("<div>").addClass("class='column testHere'");
        let imgFigure = $("<figure>").addClass("class='image'");
        let imgSrc = $(`<img src='${response.primaryImageSmall}'>`);
        imgFigure.append(imgSrc, testBtn);
        imgDiv.append(imgFigure);
        imgContainerTwo.append(imgDiv);
        testBtn.on("click", function () {
            favObjects.push(response.primaryImageSmall);
            localStorage.setItem("likes", JSON.stringify(favObjects));
            console.log("like");
        })
        return apiObjects
    }).catch(function() {
        console.log("thats a lot of requests");
    });
}

//Calls the building functions and calls the initial ajax calls
$.ajax({
    url: requestIdUrl + materials + geoLocation,
    method: "GET",
}).then(function (response) {
    console.log(response);
    for (let i = 0; i < 4; i++) {
        buildImageRowOne(response);
        buildImageRowTwo(response);
    }
})

onPageLoad();
