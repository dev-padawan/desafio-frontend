var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
var method = 'GET';
var app_id = 'MmIZQP7c'; // App ID
var consumer_key = 'dj0yJmk9TTVqU0dzZTdVblozJmQ9WVdrOVRXMUpXbEZRTjJNbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTA3'; // Consumer key - Client ID
var consumer_secret = '01c1c4276ede8302cfd68049e6a489e30d416342'; // Consumer secret - Client secret
var concat = '&';
var search = document.getElementById('search');
var button = document.getElementById('searchSubmit');

button.onclick = function(e) {

  e.preventDefault();
  var query = {
    'location': search.value,
    // 'location': 'rio de janeiro, RJ',
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
  
  axios.get(url + '?' + URL, { 
    headers: { 
      'Authorization': auth_header,
      'X-Yahoo-App-Id': app_id,
      'Content-Type': 'application/x-www-form-urlencoded' 
    },
    
  }).then(response => {
    
    obtemDados(response.data);
    
    verifica();
  })
  .catch((error) => {
    console.log(error.message);
  });
  
}