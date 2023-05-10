const form = document.querySelector('#form');
const result = document.querySelector('.result');
//função principal que hospeda todas as variaveis do DOM
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputPeso = form.querySelector('#input-weigth');
  const inputAltura = form.querySelector('#input-heigth');

  const peso = Number(inputPeso.value.replace(',', '.'));
  const altura = Number(inputAltura.value.replace(',', '.'));

  const msgNegadoPeso = `<p class="negado">Peso inválido! Preencha os dados corretamente.</p >`;
  const msgNegadoAltura = `<p class="negado">Altura inválida! Preencha os dados corretamente.</p >`;

  if (!peso) return (result.innerHTML = msgNegadoPeso);
  if (!altura) return (result.innerHTML = msgNegadoAltura);

  const imc = getImc(peso, altura);
  setResult(imc);
});
// função responsavel por calcular o imc = (peso) x (altura)²
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}
//função responsável por imprimir os resultados. é utilizado o imc para fazer uma condicional que determinar o imc com base no intervalo de peso.
function setResult(imc) {
  const range = ['Abaixo do peso','Peso normal','Acima do peso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];
  
  if (imc > 39.9) return (result.innerHTML = `<p class="anormal-2">Seu IMC é ${imc.toFixed(2).replace('.', ',')}. <br>Status: ${range[5]}!</p>`);
  if (imc >= 34.9) return (result.innerHTML = `<p class="anormal-1">Seu IMC é ${imc.toFixed(2).replace('.', ',')}. <br>Status: ${range[4]}!</p>`);
  if (imc >= 29.9) return (result.innerHTML = `<p class="anormal-1">Seu IMC é ${imc.toFixed(2).replace('.', ',')}. <br>Status: ${range[3]}!</p>`);
  if (imc >= 24.9) return (result.innerHTML = `<p class="anormal">Seu IMC é ${imc.toFixed(2).replace('.', ',')}. <br>Status: ${range[2]}!</p>`);
  if (imc >= 18.5) return (result.innerHTML = `<p class="aceito">Seu IMC é ${imc.toFixed(2).replace('.', ',')}. <br>Status: ${range[1]}!</p>`);
  if (imc < 18.5) return (result.innerHTML = `<p class="anormal">Seu IMC é ${imc.toFixed(2).replace('.', ',')}. <br>Status: ${range[0]}!</p>`);
}
