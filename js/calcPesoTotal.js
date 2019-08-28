let pesoTotal = document.getElementById('peso-total')
let erroPeso = document.querySelector('.erro-peso');
let buttonEnviar = document.querySelector('.button-enviar');

function calculaPeso() {
  let pesos = [];
  let soma = 0;

  for(let i = 0; i < 5; i++) {
    let pesoSelect = document.getElementById('peso' + (i+1));
    pesos.push(pesoSelect);
  }
    
  pesos.forEach(peso => {
    soma += (+peso.value);
  });

  pesoTotal.value = `${soma}`;
  
  if(soma != 100) {
    erroPeso.innerHTML = `
    <p class="required-field mt-2">Os pesos devem somar 100%</p>
    `;
    return false;
  } else {
    buttonEnviar.submmit();
  }  
}

buttonEnviar.addEventListener('click', calculaPeso);
