var APIKey = "42c433d4450fe2209bd6a8a993c251fc";
var city;

var city = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var city = document.querySelector('#search-input').value;

  if (!city) {
    console.error('You need a search input value!');
    return;
  }
  callweatherAPI(city)
  
}
function callweatherAPI(city) {
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

  fetch(queryURL)

  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.name, data.weather, data.main.temp, data.wind.speed, data.main.humidity); 
    var cityname = document.createElement("h2")
    cityname.textContent = data.name
    document.getElementById("cityname").append(cityname)
    document.getElementById("cityname1").textContent="City: " + data.name
   
    var citytemp = document.createElement("h2")
    citytemp.textContent = data.main.temp
    document.getElementById("citytemp").textContent="Temp: " + data.main.temp

    var citywind = document.createElement("h2")
    citywind.textContent = data.wind.speed
    document.getElementById("citywind").textContent="Wind: " + data.wind.speed

    var cityhumidity = document.createElement("h3")
    cityhumidity.textContent = data.main.humidity
    document.getElementById("cityhumidity").textContent="Humidity: " + data.main.humidity
  });}
city.addEventListener('submit', handleSearchFormSubmit);

