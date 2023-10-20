
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8152f4c2aamsh649d2b1dc3ad566p1a05f5jsn4460898033ba',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
  },
};

const getWeather = (city) => {
	cityName.innerHTML = city
  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

     //  document.getElementById('cloud_pct').textContent = response.cloud_pct;

	document.getElementById('maintemp').textContent = response.temp ;
	document.getElementById('mainspeed').textContent = response.wind_speed;
	document.getElementById('mainhumidity').textContent = response.humidity;

      document.getElementById('temp').textContent = response.temp;
      document.getElementById('feels_like').textContent = response.feels_like;
      document.getElementById('humidity').textContent = response.humidity;
      document.getElementById('min_temp').textContent = response.min_temp;
      document.getElementById('max_temp').textContent = response.max_temp;
      document.getElementById('wind_speed').textContent = response.wind_speed;
      document.getElementById('wind_degrees').textContent = response.wind_degrees;
      document.getElementById('sunrise').textContent = response.sunrise;
      document.getElementById('sunset').textContent = response.sunset;
    })
    .catch((err) => console.error(err));
};

const submitButton = document.querySelector("#submitx");
const cityInput = document.querySelector("#city");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(cityInput.value);
});

getWeather("Delhi");



  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New york`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      
      document.getElementById('temp1').textContent = response.temp;
      document.getElementById('feels_like1').textContent = response.feels_like;
      document.getElementById('humidity1').textContent = response.humidity;
      document.getElementById('min_temp1').textContent = response.min_temp;
      document.getElementById('max_temp1').textContent = response.max_temp;
      document.getElementById('wind_speed1').textContent = response.wind_speed;
      document.getElementById('wind_degrees1').textContent = response.wind_degrees;
      document.getElementById('sunrise1').textContent = response.sunrise;
      document.getElementById('sunset1').textContent = response.sunset;
    })
    .catch((err) => console.error(err));




    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New york`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);


      document.getElementById('temp1').textContent = response.temp;
      document.getElementById('feels_like1').textContent = response.feels_like;
      document.getElementById('humidity1').textContent = response.humidity;
      document.getElementById('min_temp1').textContent = response.min_temp;
      document.getElementById('max_temp1').textContent = response.max_temp;
      document.getElementById('wind_speed1').textContent = response.wind_speed;
      document.getElementById('wind_degrees1').textContent = response.wind_degrees;
      document.getElementById('sunrise1').textContent = response.sunrise;
      document.getElementById('sunset1').textContent = response.sunset;
    })
    .catch((err) => console.error(err));

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Uttarakhand`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      
      document.getElementById('temp2').textContent = response.temp;
      document.getElementById('feels_like2').textContent = response.feels_like;
      document.getElementById('humidity2').textContent = response.humidity;
      document.getElementById('min_temp2').textContent = response.min_temp;
      document.getElementById('max_temp2').textContent = response.max_temp;
      document.getElementById('wind_speed2').textContent = response.wind_speed;
      document.getElementById('wind_degrees2').textContent = response.wind_degrees;
      document.getElementById('sunrise2').textContent = response.sunrise;
      document.getElementById('sunset2').textContent = response.sunset;
    })
    .catch((err) => console.error(err));

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangalore`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      
      document.getElementById('temp3').textContent = response.temp;
      document.getElementById('feels_like3').textContent = response.feels_like;
      document.getElementById('humidity3').textContent = response.humidity;
      document.getElementById('min_temp3').textContent = response.min_temp;
      document.getElementById('max_temp3').textContent = response.max_temp;
      document.getElementById('wind_speed3').textContent = response.wind_speed;
      document.getElementById('wind_degrees3').textContent = response.wind_degrees;
      document.getElementById('sunrise3').textContent = response.sunrise;
      document.getElementById('sunset3').textContent = response.sunset;
    })
    .catch((err) => console.error(err));




    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      
      document.getElementById('temp4').textContent = response.temp;
      document.getElementById('feels_like4').textContent = response.feels_like;
      document.getElementById('humidity4').textContent = response.humidity;
      document.getElementById('min_temp4').textContent = response.min_temp;
      document.getElementById('max_temp4').textContent = response.max_temp;
      document.getElementById('wind_speed4').textContent = response.wind_speed;
      document.getElementById('wind_degrees4').textContent = response.wind_degrees;
      document.getElementById('sunrise4').textContent = response.sunrise;
      document.getElementById('sunset4').textContent = response.sunset;
    })
    .catch((err) => console.error(err));


