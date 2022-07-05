// Global variables
var userInputDisplay = $('#city-container');
var searchBtn = $('#search-btn');
var APIKey = 'f329568241f9989db1ccb96467bd08dd';
var weatherDisplay = $('#weather-display');

// var userInputBtn = $('<button>');
// var userInputText = $('input[name="search-bar"]')

var weatherDisplayTemp = document.createElement('ul');
var weatherDisplayWind = document.createElement('ul');
var weatherDisplayHumidity = document.createElement('ul');
var weatherDisplayIcon = document.createElement('div');

function cityList(event) {
    event.preventDefault();
    
    var city = $('input[name="search-bar"]').val();

    console.log(city);
    // create an element button to

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + city + "&appid=" + APIKey;

    fetch(queryURL).then(function(res) {
        console.log(res);
        return res.json();
    }).then(function(data) {
        console.log(data);

        var cityBtn = document.createElement('button');

        cityBtn.classList.add("btn");

        cityBtn.classList.add("btn-outline-success");

        cityBtn.setAttribute('style','width: 95%; margin: 2%;');

        cityBtn.textContent = city;

        userInputDisplay.append(cityBtn);
        // logs temperature into console
        console.log(data.main.temp);

        weatherDisplay.append(weatherDisplayTemp);
        weatherDisplayTemp.textContent = 'Temperature: ' + data.main.temp + '°F';

        weatherDisplay.append(weatherDisplayWind);
        weatherDisplayWind.textContent = 'Wind: ' + data.wind.speed + ' MPH';

        weatherDisplay.append(weatherDisplayHumidity);
        weatherDisplayHumidity.textContent = 'Humidity: ' + data.main.humidity + ' %';

        var iconCode = data.weather[0].icon;

        console.log(iconCode);

        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

        $('#weather-icon').attr('src', iconUrl);




    }) 
}

searchBtn.on('click', cityList);
// userInputDisplay.append(userInputBtn);

// userInputBtn.append(userInputText);

// console.log(userInputDisplay);





// Steps
// 1. Get an API that retrieves lat and long if given a city name 
// 2. Use location API to get latitude and longitude of user input city
// 3. Make a conditional that if latitude and longitude are numbers, then enter them in weather API, else prompt user to enter another city name