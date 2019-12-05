import requisicaoApi from './api-weather.js';
var search = document.getElementById('search');
var button = document.getElementById('searchSubmit');
var elementoClima = document.querySelector('.widgetWeather');

button.onclick = function(e) {
  e.preventDefault();
  var local = search.value;
  requisicaoApi(local);
}
