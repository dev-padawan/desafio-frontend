import climaCapitais from './climaCapitais.js';
import exibeDados from './exibeDados.js';
import requisicaoApi from './api-weather.js';

let tbody = document.querySelector('tbody');


let search = document.getElementById('search');
let button = document.getElementById('searchSubmit');
let capitais = climaCapitais();

capitais.forEach(capital =>  requisicaoApi(capital));

export default function trataDados(dados) {

  let { cidade, temperaturaMinima, temperaturaMaxima } = dados;
  criarCapitais(cidade, temperaturaMinima, temperaturaMaxima);
  
  button.onclick = function(e) {
    e.preventDefault();

    let local = search.value;
    requisicaoApi(local);
    exibeDados(dados);
  }

  return dados;
}



function criarCapitais(cidade, temperaturaMinima, temperaturaMaxima) {

  let tr = document.createElement('tr');
  tbody.appendChild(tr);
  let td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = `${temperaturaMinima}° ${temperaturaMaxima}° ${cidade} `;
  
}


