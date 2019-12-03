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
function capitais(todasCapitais) {

  todasCapitais.forEach(element => {
    console.log(element);
    var local = element;

    
    return requisicaoApi(local);
  });
}
// capitais(todasCapitais);
