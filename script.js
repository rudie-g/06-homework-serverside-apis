
var searchBtns = $(JSON.parse("searchBtn"));

console.log(searchBtns);

searchBtns.foreach(
    (element) => {
    element.on("click", thePopulater);
});

var liEl = $("<li>");

var pEl = $("<p>");

var btnEl = $("<button>");

var currentCity = $("#currentCity");

var currentDay = $("#currentDay");

var currentTemp = $("#currentTemp");

var currentWind = $("#currentWind");

var currentHumid = $("#currentHumidity");

var currentUVIndex = $("#currentUVIndex");

var oneTemp = $("#oneTemp");

var oneWind = $("#oneWind");

var oneHumid = $("#oneHumidity");

var oneUVIndex = $("#oneUVIndex");

var twoTemp = $("#twoTemp");

var twoWind = $("#twoWind");

var twoHumid = $("#twoHumidity");

var twoUVIndex = $("#twoUVIndex");

var threeTemp = $("#threeTemp");

var threeWind = $("#threeWind");

var threeHumid = $("#threeHumidity");

var threeUVIndex = $("#threeUVIndex");

var fourTemp = $("#fourTemp");

var fourWind = $("#fourWind");

var fourHumid = $("#fourHumidity");

var fourUVIndex = $("#fourUVIndex");

var fiveTemp = $("#fiveTemp");

var fiveWind = $("#fiveWind");

var fiveHumid = $("#fiveHumidity");

var fiveUVIndex = $("#fiveUVIndex");

function thePopulater() {
    var cityName = $(this).prev().children(0).val();
    console.log($(this).prev());
    console.log($(this).parent().children(0));
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6071c23bf014278d29b48f559c2f9755`;
    $.ajax({
    url: requestUrl,
    method: 'GET',
    }).then(function (response) {
        var latVar = response.coord.lat;
        var lonVar = response.coord.lon;
        console.log(latVar);
        console.log(lonVar);
        requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latVar}&lon=${lonVar}&units=imperial&appid=6071c23bf014278d29b48f559c2f9755`
        $.ajax({
            url: requestUrl,
            method: 'GET',
        }).then(function (response) {
            console.log(response);
            currentCity.text(cityName);
            currentTemp.text(response.current.temp);
            currentWind.text(response.current.wind_speed + " MPH");
            currentHumid.text(response.current.humidity);
            currentUVIndex.text(response.current.uvi);
            oneTemp.text(response.daily[1].temp.day);
            oneWind.text(response.daily[1].wind_speed + " MPH");
            oneHumid.text(response.daily[1].humidity);
            oneUVIndex.text(response.daily[1].uvi);
            twoTemp.text(response.daily[2].temp.day);
            twoWind.text(response.daily[2].wind_speed + " MPH");
            twoHumid.text(response.daily[2].humidity);
            twoUVIndex.text(response.daily[2].uvi);
            threeTemp.text(response.daily[3].temp.day);
            threeWind.text(response.daily[3].wind_speed + " MPH");
            threeHumid.text(response.daily[3].humidity);
            threeUVIndex.text(response.daily[3].uvi);
            fourTemp.text(response.daily[4].temp.day);
            fourWind.text(response.daily[4].wind_speed + " MPH");
            fourHumid.text(response.daily[4].humidity);
            fourUVIndex.text(response.daily[4].uvi);
            fiveTemp.text(response.daily[5].temp.day);
            fiveWind.text(response.daily[5].wind_speed + " MPH");
            fiveHumid.text(response.daily[5].humidity);
            fiveUVIndex.text(response.daily[5].uvi);
        })
    });
// Set up localStorage and populate the search history div with it, allowing for functionality to return previously retrieved information

}

thePopulater();