
let diretoriaOptions = ['Selecione', 'Compras e Logística', 'Finanças', 'Desenvolvimento', 'Operações Outback', 'TI & Digital', 'Presidência', 'Operações Abbraccio', 'Experiência do Cliente', 'Marketing', 'Gestão de Pessoas', 'Novos Negócios', 'Flemings'];

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