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
  callforecastAPI(city)
  
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

  function callforecastAPI(city) {
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
  
    fetch(queryURL)
  
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      (console.log(data.list[6].dt_txt, data.list[6].main.temp, data.list[6].main.humidity, data.list[6].wind.speed))
      
    var citydatef1 = document.createElement("p")
    citydatef1.textContent = data.list[6].dt_txt
    document.getElementById("citydatef1").textContent=data.list[6].dt_txt.slice(0, 10)
    
    var citytempf1 = document.createElement("p")
    citytempf1.textContent = textContent=data.list[6].main.temp
    document.getElementById("citytempf1").textContent="Temp: " + data.list[6].main.temp

    var citywindf1 = document.createElement("p")
    citywindf1.textContent = textContent=data.list[6].wind.speed
    document.getElementById("citywindf1").textContent="Wind: " + data.list[6].wind.speed

    var cityhumidityf1 = document.createElement("p")
    cityhumidityf1.textContent = textContent=data.list[6].main.humidity
    document.getElementById("cityhumidityf1").textContent="Humidity: " + data.list[6].main.humidity;
    
    var citydatef2 = document.createElement("p")
    citydatef2.textContent = data.list[16].dt_txt
    document.getElementById("citydatef2").textContent=data.list[14].dt_txt.slice(0, 10)
    
    var citytempf2 = document.createElement("p")
    citytempf2.textContent = textContent=data.list[14].main.temp
    document.getElementById("citytempf2").textContent="Temp: " + data.list[14].main.temp

    var citywindf2 = document.createElement("p")
    citywindf2.textContent = textContent=data.list[14].wind.speed
    document.getElementById("citywindf2").textContent="Wind: " + data.list[14].wind.speed

    var cityhumidityf2 = document.createElement("p")
    cityhumidityf2.textContent = textContent=data.list[14].main.humidity
    document.getElementById("cityhumidityf2").textContent="Humidity: " + data.list[14].main.humidity;

    var citydatef3 = document.createElement("p")
    citydatef3.textContent = data.list[24].dt_txt
    document.getElementById("citydatef3").textContent=data.list[22].dt_txt.slice(0, 10)
    
    var citytempf3 = document.createElement("p")
    citytempf3.textContent = textContent=data.list[22].main.temp
    document.getElementById("citytempf3").textContent="Temp: " + data.list[22].main.temp

    var citywindf3 = document.createElement("p")
    citywindf3.textContent = textContent=data.list[22].wind.speed
    document.getElementById("citywindf3").textContent="Wind: " + data.list[22].wind.speed

    var cityhumidityf3 = document.createElement("p")
    cityhumidityf3.textContent = textContent=data.list[22].main.humidity
    document.getElementById("cityhumidityf3").textContent="Humidity: " + data.list[22].main.humidity;

    var citydatef4 = document.createElement("p")
    citydatef4.textContent = data.list[8].dt_txt
    document.getElementById("citydatef4").textContent=data.list[30].dt_txt.slice(0, 10)
    
    var citytempf4 = document.createElement("p")
    citytempf4.textContent = textContent=data.list[30].main.temp
    document.getElementById("citytempf4").textContent="Temp: " + data.list[30].main.temp

    var citywindf4 = document.createElement("p")
    citywindf4.textContent = textContent=data.list[30].wind.speed
    document.getElementById("citywindf4").textContent="Wind: " + data.list[30].wind.speed

    var cityhumidityf4 = document.createElement("p")
    cityhumidityf4.textContent = textContent=data.list[30].main.humidity
    document.getElementById("cityhumidityf4").textContent="Humidity: " + data.list[30].main.humidity;

    var citydatef5 = document.createElement("p")
    citydatef5.textContent = data.list[39].dt_txt
    document.getElementById("citydatef5").textContent=data.list[38].dt_txt.slice(0, 10)
    
    var citytempf5 = document.createElement("p")
    citytempf5.textContent = textContent=data.list[38].main.temp
    document.getElementById("citytempf5").textContent="Temp: " + data.list[38].main.temp

    var citywindf5 = document.createElement("p")
    citywindf5.textContent = textContent=data.list[38].wind.speed
    document.getElementById("citywindf5").textContent="Wind: " + data.list[38].wind.speed

    var cityhumidityf5 = document.createElement("p")
    cityhumidityf5.textContent = textContent=data.list[38].main.humidity
    document.getElementById("cityhumidityf5").textContent="Humidity: " + data.list[38].main.humidity;
    });}
  
city.addEventListener('submit', handleSearchFormSubmit);

function save(){
  var citySearchSave = document.getElementById("search-input").value;
  localStorage.setItem("city", citySearchSave);
  console.log(citySearchSave);
}

