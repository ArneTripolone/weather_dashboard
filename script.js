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
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

  fetch(queryURL)

  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
}

city.addEventListener('submit', handleSearchFormSubmit);

