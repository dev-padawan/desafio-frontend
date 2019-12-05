export default function translate(currently) {

var traduzindo = currently;

switch(traduzindo) {
  case 'Tornado':
    traduzindo = 'Tornado';                       // tornado
    break;
  case 'Tropical Storm':
    traduzindo = 'Tempestade tropical';           // tropical storm
    break;
  case 'Hurricane':
    traduzindo = 'Furacão';                       // hurricane
    break;
  case 'Severe Thunderstorms':
    traduzindo = 'Tempestade severa';             // severe thunderstorms
    break;
  case 'Thunderstorms':
    traduzindo = 'Trovoadas';                     // thunderstorms
    break;
  case 'Mixed Rain And Snow':
    traduzindo = 'Chuva e neve';                  // mixed rain and snow
    break;
  case 'Mixed Rain And Sleet':
    traduzindo = 'Chuva e granizo fino';          // mixed rain and sleet
    break;
  case 'Mixed Snow And Sleet':
    traduzindo = 'Neve e granizo fino';           // mixed snow and sleet
    break;
  case 'Freezing Drizzle':
    traduzindo = 'Garoa gélida';                  // freezing drizzle
    break;
  case 'Drizzle':
    traduzindo = 'Garoa';                         // drizzle
    break;
  case 'Freezing Rain':
    traduzindo = 'Chuva gélida';                  // freezing rain
    break;
  case 'Showers':
    traduzindo = 'Chuvisco';                      // showers
    break;
  case 'Showers':
    traduzindo = 'Chuva';                         // showers
    break;
  case 'Snow Flurries':
    traduzindo = 'Neve em flocos finos';          // snow flurries
    break;
  case 'Light Snow Showers':
    traduzindo = 'Leve precipitação de neve';     // light snow showers
    break;
  case 'Blowing Snow':
    traduzindo = 'Ventos com neve';               // blowing snow
    break;
  case 'Snow':
    traduzindo = 'Neve';                          // snow
    break;
  case 'Hail':
    traduzindo = 'Chuva de granizo';              // hail
    break;
  case 'Sleet':
    traduzindo = 'Pouco granizo';                 // sleet
    break;
  case 'Dust':
    traduzindo = 'Pó em suspensão';               // dust
    break;
  case 'Foggy':
    traduzindo = 'Neblina';                       // foggy
    break;
  case 'Haze':
    traduzindo = 'Névoa seca';                    // haze
    break;
  case 'Smoky':
    traduzindo = 'Enfumaçado';                    // smoky
    break;
  case 'Blustery':
    traduzindo = 'Vendaval';                      // blustery
    break;
  case 'Windy':
    traduzindo = 'Ventando';                      // windy
    break;
  case 'Cold':
    traduzindo = 'Frio';                          // cold
    break;
  case 'Cloudy':
    traduzindo = 'Nublado';                       // cloudy
    break;
  case 'Mostly Cloudy':
    traduzindo = 'Muitas nuvens';         // mostly cloudy (night)
    break;
  case 'Mostly Cloudy':
    traduzindo = 'Muitas nuvens';           // mostly cloudy (day)
    break;
  case 'Partly Cloudy':
    traduzindo = 'Parcialmente nublado';  // partly cloudy (night)
    break;
  case 'Partly Cloudy':
    traduzindo = 'Parcialmente nublado';    // partly cloudy (day)
    break;
  case 'Clear':
    traduzindo = 'Céu limpo';             // clear (night)
    break;
  case 'Sunny':
    traduzindo = 'Ensolarado';                    // sunny
    break;
  case 'Fair':
    traduzindo = 'Tempo bom';             // fair (night)
    break;
  case 'Fair':
    traduzindo = 'Tempo bom';               // fair (day)
    break;
  case 'Mixed Rain And Rail':
    traduzindo = 'Chuva e granizo';               // mixed rain and hail
    break;
  case 'Hot':
    traduzindo = 'Quente';                        // hot
    break;
  case 'Isolated Thunderstorms':
    traduzindo = 'Tempestades isoladas';          // isolated thunderstorms
    break;
  case 'Scattered Thunderstorms':
    traduzindo = 'Tempestades esparsas';          // scattered thunderstorms
    break;
  case 'Scattered Thunderstorms':
    traduzindo = 'Tempestades esparsas';          // scattered thunderstorms
    break;
  case 'Scattered Showers':
    traduzindo = 'Chuvas esparsas';               // scattered showers
    break;
  case 'Heavy Snow':
    traduzindo = 'Nevasca';                       // heavy snow
    break;
  case 'Scattered Snow Showers':
    traduzindo = 'Tempestades de neve esparsas';  // scattered snow showers
    break;
  case 'Heavy Snow':
    traduzindo = 'Nevasca';                       // heavy snow
    break;
  case 'Partly Cloudy':
    traduzindo = 'Parcialmente nublado';          // partly cloudy
    break;
  case 'Thundershowers':
    traduzindo = 'Chuva com trovoadas';           // thundershowers
    break;
  case 'Snow Showers':
    traduzindo = 'Tempestade de neve';            // snow showers
    break;
  case 'Isolated Thundershowers':
    traduzindo = 'relâmpagos e chuvas isoladas';  // isolated thundershowers
    break;
  case 'Not Available': traduzindo = 'Não disponível'               // not available

  };
  // console.log(traduzindo);
  return traduzindo;
}
