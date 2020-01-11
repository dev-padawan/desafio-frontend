import trataDados from '../js/app.js';
import translate from './translate.js';

export default function obtemDados(dados) {

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
    diaDaSemana: [],
    previsao: []
  }
  
  let novaprevisao = previsao.splice(0, 6);
  // console.log(novaprevisao);
  novaprevisao.forEach((element, index)=> {
    clima.previsao.push(element)

    clima.diaDaSemana.push(element.day);
    
    let dia = new Date(element.date * 1000);
    dia = dia.toLocaleDateString('pt-BR');
    
    if( dia === today) {
      let {  low, high } = element;
      clima.temperaturaMinima = low;
      clima.temperaturaMaxima = high;
      
    }
  });
  trataDados(clima);

  return clima;
}