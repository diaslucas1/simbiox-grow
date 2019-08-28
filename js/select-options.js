let diretoriaOptions = ['Selecione', 'Compras e Logística', 'Finanças', 'Desenvolvimento', 'Operações Outback', 'TI & Digital', 'Presidência', 'Operações Abbraccio', 'Experiência do Cliente', 'Marketing', 'Gestão de Pessoas', 'Novos Negócios', 'Flemings'];
let pesoOptions = [10, 20, 30, 40, 50, 60, 70, 80];
let prioridadeOptions = ['Selecione'];
let prazoOptions = ['Selecione'];

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
selectOptions('peso', pesoOptions);
selectOptions('prior-estrat', prioridadeOptions);
selectOptions('prazo', prazoOptions);