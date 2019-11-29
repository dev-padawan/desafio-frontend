function obtemDados(dados) {
  const { 
    current_observation: climaAtual,
    forecasts: previsao,
    location: localizacao
  } = dados;
    
  let { atmosphere, condition, wind, pubDate} = climaAtual;
  let { humidity } = atmosphere;
  let { speed, chill } = wind;
  let { text, temperature } = condition;
  let { city, region, country } = localizacao;
  
  let today = new Date(pubDate * 1000);
  today = today.toLocaleDateString('pt-Br');

  const clima = {
    cidade: city,
    estado: region,
    pais: country,
    temperatura: temperature,
    temperaturaMinima: '',
    temperaturaMaxima: '',
    sensacaoTermica: chill,
    condicaoClima: translate(text),
    humidade: humidity,
    vento: speed,
    diaAtual: today,
  }

  previsao.forEach(element=> {
    var dia = new Date(element.date * 1000);
    dia = dia.toLocaleDateString('pt-BR');
    
    if( dia === today) {
      var {  low, high } = element;
      clima.temperaturaMinima = low;
      clima.temperaturaMaxima = high;
    }
  });
  
  exibeDados(clima); 
  
  return clima;
}