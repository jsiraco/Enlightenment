
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


///////Builds the first row of images
function buildImageRowOne(response) {
    $.ajax({
        url: requestUrl + response.objectIDs[Math.floor(Math.random() * response.objectIDs.length)],
        method: "GET",
    }).then(function (response) {
        let imgDiv = $("<div>").addClass("class='column testHere'");
        let imgFigure = $("<figure>").addClass("class='image'");
        let imgSrc = $(`<img src='${response.primaryImageSmall}'>`);

        imgFigure.append(imgSrc);
        imgDiv.append(imgFigure);
        imgContainerOne.append(imgDiv);
        return apiObjects
    });
}

//Builds the second row of images
function buildImageRowTwo(response) {
    $.ajax({
        url: requestUrl + response.objectIDs[Math.floor(Math.random() * response.objectIDs.length)],
        method: "GET",
    }).then(function (response) {
        let testBtn = $("<btn>").addClass("button").html("test");
        let imgDiv = $("<div>").addClass("class='column testHere'");
        let imgFigure = $("<figure>").addClass("class='image'");
        let imgSrc = $(`<img src='${response.primaryImageSmall}'>`);


        imgFigure.append(imgSrc).append(testBtn);
        imgDiv.append(imgFigure);
        imgContainerTwo.append(imgDiv);
        return apiObjects
    });
}

//Calls the building functions and calls the initial ajax calls
$.ajax({
    url: requestIdUrl + materials + geoLocation,
    method: "GET",
}).then(function (response) {
    console.log(response);
    buildImageRowOne(response);
    buildImageRowOne(response);
    buildImageRowOne(response);
    buildImageRowOne(response);
    buildImageRowTwo(response);
    buildImageRowTwo(response);
    buildImageRowTwo(response);
    buildImageRowTwo(response);

  
})
