
//All public domain metmuseum images
//only public domain images can have image URL accessed
//https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=isPublicDomain
//https://collectionapi.metmuseum.org/public/collection/v1/search?q=textiles&q=isPublicDomain
//&q=

let requestIdUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=isPublicDomain`;
let imgContainerOne = $("#row-one");
let imgContainerTwo = $("#row-two");
let requestUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/`;
const objectIds = [
    437881,
    544864,
    21126,
    254896,
    466296,
    12012,
    21185,
    465991,
    329079,
    438816,
    254502,
    247117,
    813585,
    449533,
    544450,
    268621,
    544689,
    543867,
    436579,
    546037,
    209104,
    448401,
    473008,
    337699,
    469960,
    591832,
    544320,
    436545,
    469959,
    459209,
    267124,
    311021,
    196439,
    199708,
    438754,
    211383,
    437261,
    20768,
    472155,
    206918,
    316594,
    436918,
    205250,
    192727,
    206499,
    436106,
    453336,
    503467,
    459088,
    202141,
    323163,
    324290,
    451725,
    451717,
    191803,
    323735,
    436573,
    438417,
    459251,
    437869,
    206990,
    201862,
    680379,
    436095,
    327399,
    450409,
    324029,
    207797,
    322443,
    435621,
    6778,
    435817,
    437658,
    318622,
    204812,
    455059,
    264711,
    437372,
    316393,
    824771,
    436535,
    313327,
    13878,
    448671,
    437153,
    39901,
    451909,
    453279,
    437654,
    437056,
    459055,
    435844,
    438821,
    331619,
    437854,
    452111,
    452112,
    452160,
    39918,
    324291,
    436851,
    453183,
    626692,
    435641,
    437487,
    436792,
    437490,
    436121,
    436966,
    436892,
    435809,
    435876,
    436244,
    436944,
    437675,
    436896,
    436528,
    436002,
    436840,
    436105,
    436253,
    436516,
    435962,
    435896,
    437532,
    229770,
    435802,
    437891,
    437609,
    438815,
    436282,
    437423,
    436101,
    436964,
    435728,
    436037,
    435851,
    437826,
    438820,
    437879,
    435739,
    437394,
    437283,
    436504,
    436947,
    435868,
    470305,
    470304
]

apiObjects = [];
favObjects = [];

//Use event handlers to change these values


//Mats: cermaics, furniture, paintings, sculpture, textiles
//GeoLocation: asia, europe, africa, 
let materials = "textiles";

// console.log(requestIdUrl + `&q=${materials}`);

$.ajax({
    url: requestIdUrl,
    method: "GET",
}).then(function (response) {
    let apiObjects = JSON.stringify(response);
    localStorage.setItem("objects", apiObjects);
    console.log(response);




    // $.ajax({
    //     url: `https://collectionapi.metmuseum.org/public/collection/v1/search?q=sculpture` + objectIds[Math.floor(Math.random() * objectIds.length)],
    //     method: "GET",
    // }).then(function (response) {
    //     let imgDiv = $("<div>").addClass("class='column testHere'");
    //     let imgFigure = $("<figure>").addClass("class='image'");
    //     let imgSrc = $(`<img src='${response.primaryImageSmall}'>`);

    //     imgFigure.append(imgSrc);
    //     imgDiv.append(imgFigure);
    //     imgContainerOne.append(imgDiv);
    //     return apiObjects
    // });
})

//Test fav function here
$.ajax({
    url: requestUrl + 465991,
    method: "GET",
}).then(function (response) {
    favObjects = JSON.stringify(response.primaryImageSmall);
    localStorage.setItem("favPhoto", requestUrl + 465991);


    let imgDiv = $("<div>").addClass("class='column testHere'");
    let imgFigure = $("<figure>").addClass("class='image'");
    let imgSrc = $(`<img src='${JSON.parse(favObjects)}'>`);


    imgFigure.append(imgSrc);
    imgDiv.append(imgFigure);
    imgContainerTwo.append(imgDiv);
    console.log(favObjects);
});

///////////
$.ajax({
    url: requestUrl + objectIds[Math.floor(Math.random() * objectIds.length)],
    method: "GET",
}).then(function (response) {
    let imgDiv = $("<div>").addClass("class='column testHere'");
    let imgFigure = $("<figure>").addClass("class='image'");
    let imgSrc = $(`<img src='${response.primaryImageSmall}'>`);

    imgFigure.append(imgSrc);
    imgDiv.append(imgFigure);
    imgContainerOne.append(imgDiv);
});

$.ajax({
    url: requestUrl + objectIds[Math.floor(Math.random() * objectIds.length)],
    method: "GET",
}).then(function (response) {
    let imgDiv = $("<div>").addClass("class='column testHere'");
    let imgFigure = $("<figure>").addClass("class='image'");
    let imgSrc = $(`<img src='${response.primaryImageSmall}'>`);

    imgFigure.append(imgSrc);
    imgDiv.append(imgFigure);
    imgContainerOne.append(imgDiv);
});

$.ajax({
    url: requestUrl + objectIds[Math.floor(Math.random() * objectIds.length)],
    method: "GET",
}).then(function (response) {
    let imgDiv = $("<div>").addClass("class='column testHere'");
    let imgFigure = $("<figure>").addClass("class='image'");
    let imgSrc = $(`<img src='${response.primaryImageSmall}'>`);

    imgFigure.append(imgSrc);
    imgDiv.append(imgFigure);
    imgContainerOne.append(imgDiv);
});


$.ajax({
    url: requestUrl + objectIds[Math.floor(Math.random() * objectIds.length)],
    method: "GET",
}).then(function (response) {
    let imgDiv = $("<div>").addClass("class='column testHere'");
    let imgFigure = $("<figure>").addClass("class='image'");
    let imgSrc = $(`<img src='${response.primaryImageSmall}'>`);

    imgFigure.append(imgSrc);
    imgDiv.append(imgFigure);
    imgContainerTwo.append(imgDiv);
});

