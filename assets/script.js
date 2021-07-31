
//All public domain metmuseum images
//only public domain images can have image URL accessed
//https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=isPublicDomain


//let requestUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=isPublicDomain"
let imgContainer = $("#here");
let requestUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/`
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

$.ajax({
    url: requestUrl + objectIds[Math.floor(Math.random() * objectIds.length)],
    method: "GET",
}).then(function (response) {
    console.log(response);
    let testDiv = $("<div class='column testHere'>");
    let testFigure = $("<figure class='image is-128x128'>");
    let testSrc = $(`<img src='${response.primaryImageSmall}'>`);

    testFigure.append(testSrc);
    testDiv.append(testFigure);
    imgContainer.append(testDiv);
});

$.ajax({
    url: requestUrl + objectIds[Math.floor(Math.random() * objectIds.length)],
    method: "GET",
}).then(function (response) {


    console.log(response);
    let testDiv = $("<div class='column testHere'>");
    let testFigure = $("<figure class='image is-128x128'>");
    let testSrc = $(`<img src='${response.primaryImageSmall}'>`);

    testFigure.append(testSrc);
    testDiv.append(testFigure);
    imgContainer.append(testDiv);
});

$.ajax({
    url: requestUrl + objectIds[Math.floor(Math.random() * objectIds.length)],
    method: "GET",
}).then(function (response) {


    console.log(response);
    let testDiv = $("<div class='column testHere'>");
    let testFigure = $("<figure class='image is-128x128'>");
    let testSrc = $(`<img src='${response.primaryImageSmall}'>`);

    testFigure.append(testSrc);
    testDiv.append(testFigure);
    imgContainer.append(testDiv);
});

const testImage = [
    {
        "objectID": 544450,
        "isHighlight": true,
        "accessionNumber": "29.3.2",
        "accessionYear": "1929",
        "isPublicDomain": true,
        "primaryImage": "https://images.metmuseum.org/CRDImages/eg/original/21V_CAT096R3.jpg",
        "primaryImageSmall": "https://images.metmuseum.org/CRDImages/eg/web-large/21V_CAT096R3.jpg",
        "additionalImages": [
            "https://images.metmuseum.org/CRDImages/eg/original/DT339738.jpg",
            "https://images.metmuseum.org/CRDImages/eg/original/vs29.3.2zz1.jpg",
            "https://images.metmuseum.org/CRDImages/eg/original/29.3.2_02.jpg",
            "https://images.metmuseum.org/CRDImages/eg/original/21V_CAT096_1R3.jpg"
        ],
        "constituents": null,
        "department": "Egyptian Art",
        "objectName": "Statue, Hatshepsut, king, seated; Hatshepsut-sculpture",
        "title": "Seated Statue of Hatshepsut",
        "culture": "",
        "period": "New Kingdom",
        "dynasty": "Dynasty 18",
        "reign": "Joint reign of Hatshepsut and Thutmose III",
        "portfolio": "",
        "artistRole": "",
        "artistPrefix": "",
        "artistDisplayName": "",
        "artistDisplayBio": "",
        "artistSuffix": "",
        "artistAlphaSort": "",
        "artistNationality": "",
        "artistBeginDate": "",
        "artistEndDate": "",
        "artistGender": "",
        "artistWikidata_URL": "",
        "artistULAN_URL": "",
        "objectDate": "ca. 1479–1458 B.C.",
        "objectBeginDate": -1473,
        "objectEndDate": -1458,
        "medium": "Indurated limestone, paint",
        "dimensions": "H. 213 cm (83 7/8 in.); W. 50 cm (19 11/16); D. 119 cm (46 7/8 in.); 2750 lbs.",
        "measurements": [
            {
                "elementName": "Overall",
                "elementDescription": null,
                "elementMeasurements": {
                    "Depth": 119,
                    "Height": 213,
                    "Weight": 1247.3918,
                    "Width": 50
                }
            }
        ],
        "creditLine": "Rogers Fund, 1929",
        "geographyType": "From",
        "city": "",
        "state": "",
        "county": "",
        "country": "Egypt",
        "region": "Upper Egypt, Thebes",
        "subregion": "Deir el-Bahri & el- Asasif",
        "locale": "Senenmut Quarry",
        "locus": "",
        "excavation": "MMA excavations, 1926–28/Lepsius 1843–45",
        "river": "",
        "classification": "",
        "rightsAndReproduction": "",
        "linkResource": "",
        "metadataDate": "2021-04-04T04:57:29.037Z",
        "repository": "Metropolitan Museum of Art, New York, NY",
        "objectURL": "https://www.metmuseum.org/art/collection/search/544450",
        "tags": [
            {
                "term": "Kings",
                "AAT_URL": "http://vocab.getty.edu/page/aat/300025481",
                "Wikidata_URL": "https://www.wikidata.org/wiki/Q12097"
            },
            {
                "term": "Women",
                "AAT_URL": "http://vocab.getty.edu/page/aat/300025943",
                "Wikidata_URL": "https://www.wikidata.org/wiki/Q467"
            }
        ],
        "objectWikidata_URL": "https://www.wikidata.org/wiki/Q29385790",
        "isTimelineWork": true,
        "GalleryNumber": "115"
    },
    {
        "objectID": 455059,
        "isHighlight": true,
        "accessionNumber": "13.228.13.6",
        "accessionYear": "1913",
        "isPublicDomain": true,
        "primaryImage": "https://images.metmuseum.org/CRDImages/is/original/DP159382.jpg",
        "primaryImageSmall": "https://images.metmuseum.org/CRDImages/is/web-large/DP159382.jpg",
        "additionalImages": [
            "https://images.metmuseum.org/CRDImages/is/original/is13.228.13.6.R.jpg",
            "https://images.metmuseum.org/CRDImages/is/original/is13.228.13.R.jpg",
            "https://images.metmuseum.org/CRDImages/is/original/DT461.jpg",
            "https://images.metmuseum.org/CRDImages/is/original/sf13-228-13-f47rv.jpg",
            "https://images.metmuseum.org/CRDImages/is/original/sf13-228-13-f47v.jpg",
            "https://images.metmuseum.org/CRDImages/is/original/43006.jpg"
        ],
        "constituents": [
            {
                "constituentID": 130654,
                "role": "Calligrapher",
                "name": "Maulana Azhar",
                "constituentULAN_URL": "(not assigned)",
                "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q6792429",
                "gender": ""
            },
            {
                "constituentID": 130653,
                "role": "Poet",
                "name": "Nizami",
                "constituentULAN_URL": "(not assigned)",
                "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q234908",
                "gender": ""
            },
            {
                "constituentID": 169986,
                "role": "Artist",
                "name": "Painting by Unknown",
                "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500125274",
                "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q24238356",
                "gender": ""
            }
        ],
        "department": "Islamic Art",
        "objectName": "Folio from an illustrated manuscript",
        "title": "\"The Eavesdropper\", Folio 47r from a Haft Paikar (Seven Portraits) of the Khamsa (Quintet) of Nizami",
        "culture": "",
        "period": "",
        "dynasty": "",
        "reign": "",
        "portfolio": "",
        "artistRole": "Calligrapher",
        "artistPrefix": "",
        "artistDisplayName": "Maulana Azhar",
        "artistDisplayBio": "died 1475/76",
        "artistSuffix": "",
        "artistAlphaSort": "Maulana Azhar",
        "artistNationality": "",
        "artistBeginDate": "1450",
        "artistEndDate": "1501",
        "artistGender": "",
        "artistWikidata_URL": "https://www.wikidata.org/wiki/Q6792429",
        "artistULAN_URL": "(not assigned)",
        "objectDate": "ca. 1430",
        "objectBeginDate": 1405,
        "objectEndDate": 1455,
        "medium": "Ink, opaque watercolor, silver, and gold on paper",
        "dimensions": "Painting: H. 8 7/8 in. (22.5 cm)\r\n                W. 4 7/8 in. (12.4 cm)\r\nPage: H. 11 in. (27.9 cm)\r\n          W. 7 3/16 in. (18.3 cm)\r\nMat: H. 19 1/4 in. (48.9 cm)\r\n        W. 14 1/4 in. (36.2 cm)",
        "measurements": [
            {
                "elementName": "Overall",
                "elementDescription": "Painting",
                "elementMeasurements": {
                    "Height": 22.5425,
                    "Width": 12.3825
                }
            },
            {
                "elementName": "Overall",
                "elementDescription": "Page",
                "elementMeasurements": {
                    "Height": 27.9401,
                    "Width": 18.2563
                }
            },
            {
                "elementName": "Mat",
                "elementDescription": null,
                "elementMeasurements": {
                    "Height": 48.8951,
                    "Width": 36.1951
                }
            }
        ],
        "creditLine": "Gift of Alexander Smith Cochran, 1913",
        "geographyType": "Made in",
        "city": "Herat",
        "state": "",
        "county": "",
        "country": "present-day Afghanistan",
        "region": "",
        "subregion": "",
        "locale": "",
        "locus": "",
        "excavation": "",
        "river": "",
        "classification": "Codices",
        "rightsAndReproduction": "",
        "linkResource": "",
        "metadataDate": "2021-06-05T04:45:37.2Z",
        "repository": "Metropolitan Museum of Art, New York, NY",
        "objectURL": "https://www.metmuseum.org/art/collection/search/455059",
        "tags": [
            {
                "term": "Musical Instruments",
                "AAT_URL": "http://vocab.getty.edu/page/aat/300041620",
                "Wikidata_URL": "https://www.wikidata.org/wiki/Q34379"
            },
            {
                "term": "Men",
                "AAT_URL": "http://vocab.getty.edu/page/aat/300025928",
                "Wikidata_URL": "https://www.wikidata.org/wiki/Q8441"
            },
            {
                "term": "Women",
                "AAT_URL": "http://vocab.getty.edu/page/aat/300025943",
                "Wikidata_URL": "https://www.wikidata.org/wiki/Q467"
            },
            {
                "term": "Swimming",
                "AAT_URL": "http://vocab.getty.edu/page/aat/300239495",
                "Wikidata_URL": "https://www.wikidata.org/wiki/Q31920"
            },
            {
                "term": "Musicians",
                "AAT_URL": "http://vocab.getty.edu/page/aat/300025666",
                "Wikidata_URL": "https://www.wikidata.org/wiki/Q639669"
            }
        ],
        "objectWikidata_URL": "https://www.wikidata.org/wiki/Q29385264",
        "isTimelineWork": true,
        "GalleryNumber": "455"
    }
]


$(document).ready(function () {

    for (let i = 0; i < testImage.length; i++) {
        let testDiv = $("<div class='column testHere'>");
        let testFigure = $("<figure class='image is-128x128'>");
        let testSrc = $(`<img src='${testImage[i].primaryImageSmall}'>`);

        testFigure.append(testSrc);
        testDiv.append(testFigure);
        imgContainer.append(testDiv);
    }
})
