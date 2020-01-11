const todasCapitais = [
  "Rio Branco",
  "Maceió",
  "Macapá",
  "Manaus",
  "Salvador",
  "Fortaleza",
  "Brasília",
  "Vitória",
  "Goiânia",
  "São Luís",
  "Cuiabá",
  "Campo Grandel",
  "Belo Horizonte",
  "Belém",
  "João Pessoa",
  "Curitiba",
  "Recife",
  "Teresina",
  "Rio de Janeiro",
  "Natal",
  "Porto Alegre",
  "Porto Velho",
  "Boa Vista",
  "Florianópolis",
  "São Paulo",
  "Aracaju",
  "Palmas"
];


function sorteiaCapitais() {

  let sorteia = [];

  for(let min = 0; min < 10; min++) {
  
    sorteia.push(Math.floor(Math.random() * todasCapitais.length));
  }

  return sorteia;
}

export default function escolheCapitais() {

  let dezena = sorteiaCapitais();
  
  let capitaisEscolhidas = dezena.map(function(i) {
    
    return todasCapitais[i];
  });

  return capitaisEscolhidas;
}
  
  
