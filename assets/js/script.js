// Global variables
var userInputDisplay = document.getElementById('city-container');
var searchBtn = document.getElementById('search-btn');
var APIKey = 'f329568241f9989db1ccb96467bd08dd';
var weatherDisplay = document.getElementById('weather-display');
var forecastFiveDay = document.getElementById('forecast-five-day');
console.log(forecastFiveDay);

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
    // prevent form defalt setting
    event.preventDefault();

    // display element to hold weather data
    weatherDisplay.style.display = "block";
    
    // retrieve user input and store in variable
    var city = document.getElementById('search-input').value;

    // save previously searched city in local storage
    localStorage.setItem("city", city);

    // API URL for weather data
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + city + "&appid=" + APIKey;

    // sanitize the API URL to retrieve data
    fetch(queryURL)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        // buttons for previously searched cities
        var cityBtn = document.createElement('button');
        console.log(data);

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
        cityIcon.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png');

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

        // style weather data background
        weatherDisplay.setAttribute('style', 'background: lightblue;');

        // save city latitude and longitude in local storage
        localStorage.setItem("cityLat", data.coord.lat);
        localStorage.setItem("cityLon", data.coord.lon);
    
        function cityGen(event) {
            if(cityBtn) {
                // console.log("It worked!");
                 // display element to hold weather data
                weatherDisplay.style.display = "block";

                var cityHeader = document.createElement('div');

                // attach weather icon to city header
                cityIcon.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png');

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

                // style weather data background
                weatherDisplay.setAttribute('style', 'background: lightblue;');

            }
        }

        cityBtn.addEventListener('click', cityGen);
    }) 

    // Prev API request
    // var lat = localStorage.getItem('cityLat');
    // console.log(lat);

    // var lon = localStorage.getItem('cityLat');
    // console.log(lon);

    // API Key
    // forcastAPIKey = '407c6320fc52a521f24cb0b9b1b94dfe';
    // Second API
    // var forcastURL = "api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=" + forcastAPIKey;
    // console.log(data.coord.lat);
    // fetch(forcastURL)
    // .then(function(res) {
    //     return res.json();
    // })
    // .then(function(data) {
    // console.log(data);
    // })

    var forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + APIKey;

    fetch(forcastURL)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        var forecastDay1 = document.createElement('span');
        forecastFiveDay.appendChild(forecastDay1);
        forecastDay1.textContent = "It worked!"
    })
}

searchBtn.addEventListener('click', searchResponse);

