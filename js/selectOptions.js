let diretoriaOptions = ['Selecione', 'Compras e Logística', 'Finanças', 'Desenvolvimento', 'Operações Outback', 'TI & Digital', 'Presidência', 'Operações Abbraccio', 'Experiência do Cliente', 'Marketing', 'Gestão de Pessoas', 'Novos Negócios', 'Flemings'];
let pesoOptions = [0, 10, 20, 30, 40, 50, 60, 70, 80];
let prioridadeOptions = ['Selecione'];
let prazoOptions = ['Selecione'];

let avaliacaoMeta = ['Selecione', 1, 2, 3, 4];
let avaliacaoMetaGest = [...avaliacaoMeta];
let autoAvaliacao = [...avaliacaoMeta];
let avaliaGestor = [...avaliacaoMeta];


// adicionar options no select pelo id
function selectOptionsId(selectId, arrayOptions) {
  let select = document.getElementById(selectId);

  for (let i = 0; i < arrayOptions.length; i++) {
    let option = document.createElement("option");
    option.value = arrayOptions[i];
    option.text = arrayOptions[i];
    select.appendChild(option);    
  }
}

// ou pela classe
function selectOptionsClass(selectClass, arrayOptions) {
  let selects = document.querySelectorAll("." + selectClass);

  for (let i = 0; i < arrayOptions.length; i++) {
    
    selects.forEach(select => {
      let option = document.createElement("option");
      option.value = arrayOptions[i];
      option.text = arrayOptions[i];    
      select.appendChild(option);
    });   
  }
}

// dados pessoais
selectOptionsId('diretoria', diretoriaOptions);

// quadro metas
selectOptionsClass('select-peso', pesoOptions);
selectOptionsClass('select-priorestrat', prioridadeOptions);
selectOptionsClass('select-prazo', prazoOptions);

// avaliação de competências
selectOptionsClass('select-autoavalia', autoAvaliacao);
selectOptionsClass('select-avaliagest', avaliaGestor);


// adicionando options para os selects nas metas
// for(let i = 0; i < 5; i++) {
//   let pesoId = 'peso' + (i+1);
//   selectOptions(pesoId, pesoOptions);

//   let prioridadeId = 'prior-estrat' + (i+1);
//   selectOptions(prioridadeId, prioridadeOptions);

//   let prazoId = 'prazo' + (i+1);
//   selectOptions(prazoId, prazoOptions);

//   let avaliacaoMetaId = 'avalia-meta' + (i+1);
//   selectOptions(avaliacaoMetaId, avaliacaoMeta);

//   let avaliacaoMetaGestId = 'avalia-metagest' + (i+1);
//   selectOptions(avaliacaoMetaGestId, avaliacaoMetaGest);
// }

