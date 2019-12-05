import translateDay from './translateDay.js';

export default function criaElementos(clima) {

  let headerTitle            = document.querySelector('.header-title');
  let widgetWeather         = document.createElement('div');
  let localizacao           = document.createElement('h2');
  let temperatura           = document.createElement('h1');
  let moreInfoWeather       = document.createElement('div');
  let moreInfoWeather_minMaxVento = document.createElement('ul');
  let moreInfoWeather_sensacaoHumidade = document.createElement('ul');
  let lowAndHigh            = document.createElement('li');
  let wildSpeed             = document.createElement('li');
  let sensationTermic       = document.createElement('li');
  let humidity              = document.createElement('li');
  let forecastForWeek       = document.createElement('ul');
  // let primeio               = document.createElement('ul');
  // let segundo               = document.createElement('ul');
  // let terceiro              = document.createElement('ul');
  // let quarto                = document.createElement('ul');
  // let quinto                = document.createElement('ul');
  // let darr                  = document.createElement('i');
  // let uarr                  = document.createElement('i');
  
  widgetWeather.className   = "widgetWeather";
  localizacao.className     = "location";
  temperatura.className     = "infoWeather";
  moreInfoWeather.className = "moreInfoweather";
  moreInfoWeather_minMaxVento.className = "moreInfoWeather_item minMaxVento";
  moreInfoWeather_sensacaoHumidade.className = "moreInfoWeather_item sensacaoHumidade"
  lowAndHigh.className      = "lowAndHigh";
  wildSpeed.className       = "wildSpeed";
  sensationTermic.className = "sensationTermic";
  humidity.className        = "humidity";
  forecastForWeek.className = "forecastForWeek";
  
  localizacao.innerHTML     = `${clima.cidade}, ${clima.estado} - ${clima.pais}`;
  temperatura.innerHTML     = `${clima.temperatura}C° ${clima.condicaoClima}`;
  lowAndHigh.innerHTML      = `<i class="iarrow fas fa-arrow-down"></i>${clima.temperaturaMinima}C° <i class="iarrow fas fa-arrow-up"></i>${clima.temperaturaMaxima}C°`;
  wildSpeed.innerHTML       = `Vento <i class="vento">${clima.vento}Km/h</i>`;
  sensationTermic.innerHTML = `Sensação <i class="sensacaoTermica">${clima.sensacaoTermica}C°</i>`;
  humidity.innerHTML        = `Humidade <i class="humidade">${clima.humidade}%</i>`;
  
  headerTitle.insertAdjacentElement('afterend', widgetWeather);
  widgetWeather.appendChild(localizacao);
  widgetWeather.appendChild(temperatura);
  widgetWeather.appendChild(moreInfoWeather);
  widgetWeather.appendChild(forecastForWeek);
  moreInfoWeather.appendChild(moreInfoWeather_minMaxVento);
  moreInfoWeather.appendChild(moreInfoWeather_sensacaoHumidade);
  moreInfoWeather_minMaxVento.appendChild(lowAndHigh);
  moreInfoWeather_minMaxVento.appendChild(wildSpeed);
  moreInfoWeather_sensacaoHumidade.appendChild(sensationTermic);
  moreInfoWeather_sensacaoHumidade.appendChild(humidity);


  var posicao = clima.indice;
  var previsao = clima.previsao;
  previsao.splice(posicao, 1); 
  
  previsao.forEach((e, i) =>{
    var li = document.createElement('li');
    var span = document.createElement('span');

    li.className = "forecastDay";
    span.className = "forecastDay_minMax";
    
    span.innerHTML = `${e.low}° ${e.high}º`;
    li.innerHTML = `${translateDay(e.day)}`;
    forecastForWeek.appendChild(li);
    li.appendChild(span);

    
  })
  


  
}
