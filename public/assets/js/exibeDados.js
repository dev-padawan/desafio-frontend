import criaElementos from './criarElementos.js';
import removeElement from './removeElements.js';
export default function exibeDados(clima) {
  
  var headerTitle   = document.querySelector('.header-title');
  var elementoClima = document.querySelector('.widgetWeather');
  
  if(elementoClima !== null) {

    removeElement(headerTitle);
    
    criaElementos(clima);

  } else {

    criaElementos(clima);

  }
};