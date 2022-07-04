// Global variables
var userInputDisplay = $('#city-container');
var searchBtn = $('#search-btn');
var APIKey = 'f329568241f9989db1ccb96467bd08dd';
// var userInputBtn = $('<button>');
// var userInputText = $('input[name="search-bar"]')
function cityList(event) {
    event.preventDefault();
    
    var city = $('input[name="search-bar"]').val();

    console.log(city);
    // create an element button to

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    fetch(queryURL).then(function(res) {
        console.log(res);
        return res.json();
    }).then(function(data) {
        console.log(data);
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