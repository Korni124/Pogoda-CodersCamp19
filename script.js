const mainApi = "http://api.openweathermap.org/data/2.5/weather?q="
const city = "London"
const apiKey = "bc227de161f60f621b068a69ce91488e"

const fullUrl = `${mainApi}${city}&units=metric&appid=${apiKey}`



const temperatura = document.getElementsByClassName('stopnie') ;
const weatherImage = document.getElementById('weather-image')
const description = document.getElementById('description')





fetch(fullUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    temperatura[0].innerHTML=myJson.main.temp;
    weatherImage.setAttribute('src',`http://openweathermap.org/img/wn/${myJson.weather[0].icon}@2x.png`)
    description.innerHTML=myJson.weather[0].description;
    console.log(JSON.stringify(myJson));
  });