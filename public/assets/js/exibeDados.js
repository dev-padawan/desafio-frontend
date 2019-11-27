var control = false;
function exibeDados(clima) {
  
  
  criaElementos(clima);
};

function criaElementos(clima) {

  let mainHeader            = document.querySelector('.mainHeader');
  let widgetWeather         = document.createElement('div');
  let localizacao           = document.createElement('h2');
  let temperatura           = document.createElement('h1');
  let moreInfoWeather       = document.createElement('div');
  let lowAndHigh            = document.createElement('span');
  let sensationTermic       = document.createElement('span');
  let wildSpeed             = document.createElement('span');
  let humidity              = document.createElement('span');
  let forecastForWeek       = document.createElement('ul');
  let primeio               = document.createElement('ul');
  let segundo               = document.createElement('ul');
  let terceiro              = document.createElement('ul');
  let quarto                = document.createElement('ul');
  let quinto                = document.createElement('ul');
  let darr                  = document.createElement('i');
  let uarr                  = document.createElement('i');
  
  widgetWeather.className   = "widgetWeather";
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
  sensationTermic.innerHTML = `Sensação <i class="sensacaoTermica">${clima.sensacaoTermica}C°</i>`;
  wildSpeed.innerHTML       = `Vento <i class="vento">${clima.vento}Km/h</i>`;
  humidity.innerHTML        = `Humidade <i class="humidade">${clima.humidade}%</i>`;
  
  mainHeader.insertAdjacentElement('beforebegin', widgetWeather);
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
  control = true;
}


function verifica() {
  let mainHeader            = document.querySelector('.mainHeader');
  let widgetWeather = document.querySelector('.widgetWeather');
  if(document.querySelector('.widgetWeather')){
    if(control == true) {
      console.log("criei o elemento");
      
      // mainHeader.parentNode.removeChild(widgetWeather);
    }
    
  }else {
    console.log("não achei");
  }
}