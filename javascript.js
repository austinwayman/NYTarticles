var beginDate = "";  // in the form of year/month/day (YYYYMMDD)
var endDate = "";


// get the search term from the input;
var searchTerm = "";


var apiKey = "7d6ab15f9c184075ad8b8a4a7e6581cf"
var anotherUrl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&facet_field=day_of_week&begin_date=" + beginDate + "&end_date=" + endDate + "&api-key=" + apiKey;


// &fl=web_url

// var obj = {
//     url: anotherUrl,
//     method: "GET"
// };



// buttons ---

$(document).ready(function () {
    $("#searchBtn").on("click", function () {
        $("#searchBtn").preventDefault();
        console.log("click click");
        // var searchTerm = getElementById("search").val;
        searchTerm = $("#search").val().trim();
        beginDate = $("#startYear").val().trim();
        endDate = $("#endYear").val().trim();

        anotherUrl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&facet_field=day_of_week&begin_date=" + beginDate + "&end_date=" + endDate + "&api-key=" + apiKey;

        $.ajax({
            url: anotherUrl,
            method: "GET"
        }).then(function (response) {

            console.log(response);

        });

    });

    $("#clearResults").on("click", function () {
        console.log("clicking me clears results")
    });
});