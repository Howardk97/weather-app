// Global variables
var userInputDisplay = document.getElementById('city-container');
var searchBtn = document.getElementById('search-btn');
var APIKey = 'f329568241f9989db1ccb96467bd08dd';
var weatherDisplay = document.getElementById('weather-display');

weatherDisplay.style.display = "none";

// Variables for weather info
var weatherDisplayTemp = document.createElement('p');
var weatherDisplayWind = document.createElement('p');
var weatherDisplayHumidity = document.createElement('p');

// Variables for city header
var cityTitle = document.createElement('h1');
var cityDate = document.createElement('h1');
var todayDate = moment().format("MMM Do, YYYY");
var cityIcon = document.createElement('img');

// Function generated when search is clicked
function searchResponse(event) {
    event.preventDefault();
    weatherDisplay.style.display = "block";
    
    var city = document.getElementById('search-input').value;

    localStorage.setItem("city", city);

    // console.log(cityArray);

    // console.log(city);
    // create an element button to

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + city + "&appid=" + APIKey;

    fetch(queryURL)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        // buttons for previously searched cities
        var cityBtn = document.createElement('button');
        console.log(data.weather[0].icon);

        // Style previously searched city buttons
        cityBtn.classList.add("btn");
        cityBtn.classList.add("btn-outline-success");
        cityBtn.classList.add("col-12");
        cityBtn.classList.add("col-md-8");
        cityBtn.setAttribute('style','margin: 2%; border-color: grey; background-color: grey; color: white');

        // Display text onto previously searched city buttons
        cityBtn.textContent = city;

        // Append previously searched city buttons to page
        userInputDisplay.appendChild(cityBtn); 
        
        var cityHeader = document.createElement('div');

        // attach weather icon to city header
        cityIcon.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png');

        // add text to elements
        cityTitle.textContent = city;
        cityDate.textContent = '(' + todayDate + ')';
        

        // attach to webpage
        cityHeader.appendChild(cityTitle);
        cityHeader.appendChild(cityDate);
        weatherDisplay.appendChild(cityHeader);
        cityHeader.appendChild(cityIcon);

        // Add class to city header
        cityHeader.classList.add("row");

        // Append weather data to page
        weatherDisplay.appendChild(weatherDisplayTemp);
        weatherDisplayTemp.textContent = 'Temperature: ' + data.main.temp + '°F';
        weatherDisplay.appendChild(weatherDisplayWind);
        weatherDisplayWind.textContent = 'Wind: ' + data.wind.speed + ' MPH';
        weatherDisplay.appendChild(weatherDisplayHumidity);
        weatherDisplayHumidity.textContent = 'Humidity: ' + data.main.humidity + ' %';

        weatherDisplay.setAttribute('style', 'background: lightblue;')

        
    }) 
}

searchBtn.addEventListener('click', searchResponse);
