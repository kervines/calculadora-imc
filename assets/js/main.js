function mainProject() {
  const form = document.querySelector('#form');
  const result = document.querySelector('.result');

  function calcularImc(event) {
    event.preventDefault();
    const peso = form.querySelector('#input-weigth');
    const altura = form.querySelector('#input-heigth');

    const imc =
      parseFloat(peso.value) / parseFloat(altura.value * altura.value);
    let resultado;

    if (peso.value === '' || altura.value === '') {
      result.innerHTML = `<p class="negado">Preencha todos os dados.</p >`;
    } else if (Number.isNaN(imc)) {
      result.innerHTML = `<p class="negado">Valores inválidos, tente novamente!</p >`;
    } else {
      if (imc < 18.5) {
        resultado = 'Abaixo do peso';
        result.innerHTML = `<p class="anormal">Seu IMC é ${imc.toFixed(
          2
        )}. Situação: ${resultado}</p>`;
      } else if (imc >= 18.5 && imc < 24.9) {
        resultado = 'Peso normal';
        result.innerHTML = `<p class="aceito">Seu IMC é ${imc.toFixed(
          2
        )}. Situação: ${resultado}</p>`;
      } else if (imc >= 25 && imc < 29.9) {
        resultado = 'Acima do peso';
        result.innerHTML = `<p class="anormal">Seu IMC é ${imc.toFixed(
          2
        )}. Situação: ${resultado}</p>`;
      } else if (imc >= 30 && imc < 34.9) {
        resultado = 'Obesidade 1';
        result.innerHTML = `<p class="anormal-1">Seu IMC é ${imc.toFixed(
          2
        )}. Situação: ${resultado}</p>`;
      } else if (imc >= 35 && imc < 39.9) {
        resultado = 'Obesidade 2';
        result.innerHTML = `<p class="anormal-1">Seu IMC é ${imc.toFixed(
          2
        )}. Situação: ${resultado}</p>`;
      } else {
        resultado = 'Obesidade 3';
        result.innerHTML = `<p class="anormal-2">Seu IMC é ${imc.toFixed(
          2
        )}. Situação: ${resultado}</p>`;
      }
    }
  }
  form.addEventListener('submit', calcularImc);
}
mainProject();
