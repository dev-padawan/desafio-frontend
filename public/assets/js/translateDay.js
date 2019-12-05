
export default function translateDay(diaDaSemana) {

  var traduzir = diaDaSemana.toLowerCase();
  switch(traduzir)  {
    case 'sun':
      traduzir = 'Domingo';
      break;
    case 'mon':
      traduzir = 'Segunda';
      break;
    case 'tue':
      traduzir = 'Terça';
      break;
    case 'wed':
      traduzir = 'Quarta';
      break;
    case 'thu':
      traduzir = 'Quinta';
      break;
    case 'fri':
      traduzir = 'Sexta';
      break;
    case 'sat':
      traduzir = 'Sábado';
      break;
    case 'Not Available': traduzindo = 'Não disponível'               // not available
  }
  // console.log(traduzir);
  
  return traduzir;
}