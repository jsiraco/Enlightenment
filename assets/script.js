
//All public domain metmuseum images
//only public domain images can have image URL accessed
//https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=isPublicDomain
//https://collectionapi.metmuseum.org/public/collection/v1/search?q=textiles&q=isPublicDomain
//&q=

let requestIdUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=isPublicDomain"
let imgContainerOne = $("#row-one");
let imgContainerTwo = $("#row-two");
let requestUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/`;
let materials = "";
let geoLocation = "";
let era = "";


apiObjects = [];
favObjects = [];

//Use event handlers to change these values
//Mats: cermaics, furniture, paintings, sculpture, textiles
//GeoLocation: asia, europe, africa, 

$("#discoverSearch").on("click", function() {

    //location.reload();
    
    let eraRaw = document.getElementById("medium");
        let eraResult= eraRaw.options[eraRaw.selectedIndex].value;

    let materialRaw = document.getElementById("type-materials");
        let materialResult = materialRaw.options[materialRaw.selectedIndex].value;

    let locationRaw = document.getElementById("areas");
        let locationResult = locationRaw.options[locationRaw.selectedIndex].value;
    
    let materials = "&" + materialResult;
    let geoLocation ="&" + locationResult;
    let era = "&" + eraResult;
    console.log(eraResult)

    $.ajax({
        url: requestIdUrl + era + geoLocation + materials,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        for (let i = 0; i < 4; i++) {
            buildImageRowOne(response);
            buildImageRowTwo(response);
        }
    })
    let tester = requestIdUrl + era + geoLocation + materials;
    console.log(tester);
});







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
            JSON.stringify(favObjects.push(response.primaryImageSmall));
            localStorage.setItem("likes", favObjects);
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
            JSON.stringify(favObjects.push(response.primaryImageSmall));
            localStorage.setItem("likes", favObjects);
            console.log("like");
        })
        return apiObjects
    });
}

//Calls the building functions and calls the initial ajax calls
$.ajax({
    url: requestIdUrl,
    method: "GET",
}).then(function (response) {
    console.log(response);
    for (let i = 0; i < 4; i++) {
        buildImageRowOne(response);
        buildImageRowTwo(response);
    }
})

onPageLoad();
