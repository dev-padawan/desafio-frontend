import obtemDados from './obtemDados.js';
let url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss'; // let url - 'http://www.yahooapis.com/v1/base.rng';
let method = 'GET';
let app_id = 'MmIZQP7c'; // App ID
let consumer_key = 'dj0yJmk9TTVqU0dzZTdVblozJmQ9WVdrOVRXMUpXbEZRTjJNbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTA3'; // Consumer key - Client ID
let consumer_secret = '01c1c4276ede8302cfd68049e6a489e30d416342'; // Consumer secret - Client secret
let concat = '&';

export default function requisicaoApi(local) {
  
  let query = {
    'location': local,
    // 'location': search.value,
    // 'location': 'rio de janeiro, RJ',
    'format': 'json',
    'u': 'uc'
  };
  
  
  let oauth = {
    'oauth_consumer_key': consumer_key,
    'oauth_nonce': Math.random().toString(36).substring(2),
    'oauth_signature_method': 'HMAC-SHA1',
    'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
    'oauth_version': '1.0'
  };
  
  let merged = {}; 
  let extend = function(out) {
    out = out || {};
    
    for (let i = 1; i < arguments.length; i++) {
      if (!arguments[i])
      continue;
      
      for (let key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key))
        out[key] = arguments[i][key];
      }
    }
    
    return out;
  };
  
  extend(merged, query, oauth);
  // Note the sorting here is required
  let merged_arr = Object.keys(merged).sort().map(function(k) {
    return [k + '=' + encodeURIComponent(merged[k])];
  });
  let signature_base_str = method
  + concat + encodeURIComponent(url)
  + concat + encodeURIComponent(merged_arr.join(concat));
  
  let composite_key = encodeURIComponent(consumer_secret) + concat;
  let hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
  let signature = hash.toString(CryptoJS.enc.Base64);
  
  oauth['oauth_signature'] = signature;
  let auth_header = 'OAuth ' + Object.keys(oauth).map(function(k) {
    return [k + '="' + oauth[k] + '"'];
  }).join(',');
  
  
  // Implementado por Douglas Matos da Silva
  URL = Object.keys(query).map(function(z) {
    return encodeURIComponent(z) + '=' + encodeURIComponent(query[z])
  }).join('&')
  
  axios.get(url + '?' + URL, { 
    headers: { 
      'Authorization': auth_header,
      'X-Yahoo-App-Id': app_id,
      'Content-Type': 'application/x-www-form-urlencoded' 
    },
    
  }).then(response => {
    let dados = response.data;
    obtemDados(dados);
    
  })
  .catch((error) => {
    console.log(error.message);
  });
  
}
