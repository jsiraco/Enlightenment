
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

$("#discoverSearch").on("click", function () {
    imgContainerOne.html("");
    imgContainerTwo.html("");

    let eraRaw = document.getElementById("medium");
    let eraResult = eraRaw.options[eraRaw.selectedIndex].value;

    let materialRaw = document.getElementById("type-materials");
    let materialResult = materialRaw.options[materialRaw.selectedIndex].value;

    let locationRaw = document.getElementById("areas");
    let locationResult = locationRaw.options[locationRaw.selectedIndex].value;

    let medium = "&" + materialResult;
    let geoLocation = "&" + locationResult;
    let era = "&" + eraResult;
    console.log(eraResult)

    $.ajax({
        url: requestIdUrl + medium + geoLocation + era,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        console.log("generating url")
        for (let i = 0; i < 4; i++) {
            buildImageRowOne(response);
            buildImageRowTwo(response);
        }
    })
    let tester = requestIdUrl + era + geoLocation + medium;
    console.log(tester);
});

//get favorites if there are any
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
        let testBtn = $("<button>").addClass("button is-fullwidth is-light is-primary").html("🖤");
        let imgDiv = $("<div>").addClass("column testHere is-clickable");
        let imgFigure = $("<figure>").addClass("image");
        let imgSrc = $(`<img src='${response.primaryImageSmall}'>`).addClass("spaced-image");

        if (favObjects.includes(response.primaryImageSmall)) {
            testBtn.html("❤️")
        }

        imgFigure.append(imgSrc, testBtn);
        imgDiv.append(imgFigure);
        imgContainerOne.append(imgDiv);

        //opens a seperate page to learn more about the art
        imgSrc.on("click", function () {
            window.open(response.objectURL, "_blank");
            console.log("click");
        })

        //adds image to a favorite array
        testBtn.on("click", function () {
            testBtn.html("❤️");
            console.log("like");
            favObjects.push(response.primaryImageSmall);
            localStorage.setItem("likes", JSON.stringify(favObjects));
        })
        return apiObjects
    });
}

//Builds the second row of images, has the same functions as the first
function buildImageRowTwo(response) {
    $.ajax({
        url: requestUrl + response.objectIDs[Math.floor(Math.random() * response.objectIDs.length)],
        method: "GET",
    }).then(function (response) {
        let testBtn = $("<button>").addClass("button is-fullwidth is-primary is-light").html("🖤");
        let imgDiv = $("<div>").addClass("column testHere is-clickable");
        let imgFigure = $("<figure>").addClass("image");
        let imgSrc = $(`<img src='${response.primaryImageSmall}'>`).addClass("spaced-image");

        if (favObjects.includes(response.primaryImageSmall)) {
            testBtn.html("❤️")
        }

        imgFigure.append(imgSrc, testBtn);
        imgDiv.append(imgFigure);
        imgContainerTwo.append(imgDiv);

        testBtn.on("click", function () {
            testBtn.html("❤️");
            favObjects.push(response.primaryImageSmall);
            localStorage.setItem("likes", JSON.stringify(favObjects));
            console.log("like");
        })

        imgSrc.on("click", function () {
            window.open(response.objectURL, "_blank");
            console.log("click");
        })

        return apiObjects
    })
}

//Calls the building functions and the initial ajax calls
$.ajax({
    url: requestIdUrl,
    method: "GET",
}).then(function (response) {
    console.log(response);
    for (let i = 0; i < 4; i++) {
        buildImageRowOne(response);
        buildImageRowTwo(response);
    }
}).catch(function () {
    console.log("thats a lot of requests");
});

onPageLoad();
