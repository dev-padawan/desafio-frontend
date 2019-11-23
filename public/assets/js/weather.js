var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
var method = 'GET';
var app_id = 'MmIZQP7c'; // App ID
var consumer_key = 'dj0yJmk9TTVqU0dzZTdVblozJmQ9WVdrOVRXMUpXbEZRTjJNbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTA3'; // Consumer key - Client ID
var consumer_secret = '01c1c4276ede8302cfd68049e6a489e30d416342'; // Consumer secret - Client secret
var concat = '&';
var query = {
    'location': 'Rio de Janeiro, RJ',
    'format': 'json',
    'u': 'uc'
};

var oauth = {
    'oauth_consumer_key': consumer_key,
    'oauth_nonce': Math.random().toString(36).substring(2),
    'oauth_signature_method': 'HMAC-SHA1',
    'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
    'oauth_version': '1.0'
};

var merged = {}; 
var extend = function(out) {
    out = out || {};
  
    for (var i = 1; i < arguments.length; i++) {
      if (!arguments[i])
        continue;
  
      for (var key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key))
          out[key] = arguments[i][key];
      }
    }
  
    return out;
  };
  
extend(merged, query, oauth);
// Note the sorting here is required
var merged_arr = Object.keys(merged).sort().map(function(k) {
  return [k + '=' + encodeURIComponent(merged[k])];
});
var signature_base_str = method
  + concat + encodeURIComponent(url)
  + concat + encodeURIComponent(merged_arr.join(concat));

var composite_key = encodeURIComponent(consumer_secret) + concat;
var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
var signature = hash.toString(CryptoJS.enc.Base64);

oauth['oauth_signature'] = signature;
var auth_header = 'OAuth ' + Object.keys(oauth).map(function(k) {
  return [k + '="' + oauth[k] + '"'];
}).join(',');
 

// Implementado por Douglas Matos da Silva
URL = Object.keys(query).map(function(z) {
    return encodeURIComponent(z) + '=' + encodeURIComponent(query[z])
}).join('&')


function exibeDados(dados) {
    // var texto = JSON.stringify(dados);
    var cidade = dados.location.city;
    var regiao = dados.location.region;
    var pais = dados.location.country;
    var temperatura = dados.current_observation.condition.temperature ;
    var currently = dados.current_observation.condition.text;
    var condicaoDoClima = translate(currently);
    var low ;
    var heigh;
    
    document.querySelector('#location').innerHTML = `${cidade}, ${regiao} - ${pais}` ;
    document.querySelector('#temperatura').innerHTML = `${temperatura}°C ${condicaoDoClima}`;

}

axios.get(url + '?' + URL, { 
    headers: { 
        'Authorization': auth_header,
        'X-Yahoo-App-Id': app_id,
        'Content-Type': 'application/x-www-form-urlencoded' 
    },
    
}).then(response => {
  
  let meteorologia = response.data;
  console.log(meteorologia);

  let { current_observation: observacaoAtual, forecasts: previsao, location: localizacao } = meteorologia;
  let { city: cidade, region: regiao, country: pais } = localizacao;
  let { wind: condicaoDoVento, atmosphere: atmosfera, condition: condicaoDoClima, pubDate: dataAtual } = observacaoAtual;
  let { speed: velocidadeDoVento } = condicaoDoVento;

  dataAtual = new Date(dataAtual*1000);
  dataAtual = dataAtual.toLocaleDateString("pt-BR");

  
  previsao.forEach(e => {

    let {date: dia} = e;
    dia = new Date(dia*1000);
    dia = dia.toLocaleDateString("pt-BR");

    if(dia == dataAtual) {
      let { low: temperaturaMinima, high: temperaturaMaxima }  = e;
      
    }
  });
  
  

  exibeDados(response.data);
     
})
.catch((error) => {
console.log(error.message);
});