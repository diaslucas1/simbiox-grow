// Avaliação de Competências - Legendas de acordo com os selects de Auto Avaliação e Avaliação Gestor

let selectsAutoAvaliacao = document.querySelectorAll(".select-autoavalia");
let selectsAvaliacaoGestor = document.querySelectorAll(".select-avaliagest");

function legendaNota(selects, legendaClass) {
  for(let i = 0; i < selects.length; i++){
    let guardaId = selects[i].id;
    let select = document.getElementById(guardaId);
    
    let legenda = document.querySelector(legendaClass + (i+1));

    if(select.value == 1) {
      legenda.innerHTML = "ABAIXO DAS EXPECTATIVAS";
    }
    else if(select.value == 2) {
      legenda.innerHTML = "NECESSIDADE DE MELHORIA";
    }
    else if(select.value == 3) {
      legenda.innerHTML = "DENTRO DAS EXPECTATIVAS";
    }
    else if(select.value == 4) {
      legenda.innerHTML = "EXCEDE ÀS EXPECTATIVAS";
    }
    else {
      legenda.innerHTML = "";
    }
  }
}

selectsAutoAvaliacao.forEach(select => {
  select.addEventListener('change', function() {
    legendaNota(selectsAutoAvaliacao, ".legenda-auto");
  });
});

selectsAvaliacaoGestor.forEach(select => {
  select.addEventListener('change', function() {
    legendaNota(selectsAvaliacaoGestor, ".legenda-gest");
  });
});