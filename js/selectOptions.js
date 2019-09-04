let diretoriaOptions = ['Selecione', 'Compras e Logística', 'Finanças', 'Desenvolvimento', 'Operações Outback', 'TI & Digital', 'Presidência', 'Operações Abbraccio', 'Experiência do Cliente', 'Marketing', 'Gestão de Pessoas', 'Novos Negócios', 'Flemings'];
let pesoOptions = [0, 10, 20, 30, 40, 50, 60, 70, 80];
let prioridadeOptions = ['Selecione'];
let prazoOptions = ['Selecione'];

let avaliacaoMeta = ['Selecione', 1, 2, 3, 4];
let avaliacaoMetaGest = [...avaliacaoMeta];


function selectOptions(selectId, arrayOptions) {
  let select = document.getElementById(selectId);

  for (let i = 0; i < arrayOptions.length; i++) {
    let option = document.createElement("option");
    option.value = arrayOptions[i];
    option.text = arrayOptions[i];
    select.appendChild(option);    
  }
}

selectOptions('diretoria', diretoriaOptions);

// adicionando options para os selects nas metas
for(let i = 0; i < 5; i++) {
  let pesoId = 'peso' + (i+1);
  selectOptions(pesoId, pesoOptions);

  let prioridadeId = 'prior-estrat' + (i+1);
  selectOptions(prioridadeId, prioridadeOptions);

  let prazoId = 'prazo' + (i+1);
  selectOptions(prazoId, prazoOptions);

  let avaliacaoMetaId = 'avalia-meta' + (i+1);
  selectOptions(avaliacaoMetaId, avaliacaoMeta);

  let avaliacaoMetaGestId = 'avalia-metagest' + (i+1);
  selectOptions(avaliacaoMetaGestId, avaliacaoMetaGest);
}

