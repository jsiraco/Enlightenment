let poemHome = $("#poem");
let requestUrl = `https://www.poemist.com/api/v1/randompoems`;


$.ajax({
    url: requestUrl,
    method: "GET",
}).then(function (response) {
    let text1 = response[0].title;
    let text2 = response[0].content;

    let author = response[0].poet.name;

    let author1 = JSON.stringify(author);

    let txt1 = $("<h1>").addClass("poemTitle").text(text1);
    let txt2 = $("<p>").addClass("poemContent").text(text2);
    let txt3 = $("<p>").addClass("poemPoet").text(author1);

    $(poemHome).append(txt1, txt2, txt3);
});


