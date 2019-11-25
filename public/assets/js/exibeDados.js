function exibeDados(clima) {
  
  criaElementos(clima);
};

function criaElementos(clima) {

  let widgetWeather   = document.querySelector('.widgetWeather');
  
  let localizacao     = document.createElement('h2');
  let temperatura     = document.createElement('h1');
  let moreInfoWeather = document.createElement('div');
  let lowAndHigh      = document.createElement('span');
  let sensationTermic = document.createElement('span');
  let wildSpeed       = document.createElement('span');
  let humidity        = document.createElement('span');
  let forecastForWeek = document.createElement('ul');
  let primeio         = document.createElement('ul');
  let segundo         = document.createElement('ul');
  let terceiro        = document.createElement('ul');
  let quarto          = document.createElement('ul');
  let quinto          = document.createElement('ul');
  let darr = document.createElement('i');
  let uarr = document.createElement('i');
  
  localizacao.className     = "location";
  temperatura.className     = "infoWeather";
  moreInfoWeather.className = "moreInfoweather";
  lowAndHigh.className      = "moreInfoWeather_item lowAndHigh";
  sensationTermic.className = "moreInfoWeather_item sensationTermic";
  wildSpeed.className       = "moreInfoWeather_item wildSpeed";
  humidity.className        = "moreInfoWeather_item humidity";
  primeio.className         = "forecastForWeek_item primeiro";
  segundo.className         = "forecastForWeek_item segundo";
  terceiro.className        = "forecastForWeek_item terceiro";
  quarto.className          = "forecastForWeek_item quarto";
  quinto.className          = "forecastForWeek_item quinto";
  
  localizacao.innerHTML     = `${clima.cidade}, ${clima.estado} - ${clima.pais}`;
  temperatura.innerHTML     = `${clima.temperatura}C° ${clima.condicaoClima}`;
  lowAndHigh.innerHTML      = `<i class="iarr darr">&darr;</i>${clima.temperaturaMinima}C° <i class="iarr uarr">&uarr;</i>${clima.temperaturaMaxima}C°`;
  sensationTermic.innerHTML = `Sensação ${clima.sensacaoTermica}C°`;
  wildSpeed.innerHTML       = `Vento ${clima.vento}Km/h`;
  humidity.innerHTML        = `Humidade ${clima.humidade}%`;
  
  widgetWeather.appendChild(localizacao);
  widgetWeather.appendChild(temperatura);
  widgetWeather.appendChild(moreInfoWeather);
  widgetWeather.appendChild(forecastForWeek);
  moreInfoWeather.appendChild(lowAndHigh);
  moreInfoWeather.appendChild(sensationTermic);
  moreInfoWeather.appendChild(wildSpeed);
  moreInfoWeather.appendChild(humidity);
  forecastForWeek.appendChild(primeio);
  forecastForWeek.appendChild(segundo);
  forecastForWeek.appendChild(terceiro);
  forecastForWeek.appendChild(quarto);
  forecastForWeek.appendChild(quinto);

  console.log(widgetWeather);
}
