// selecionando as tag's <a> para retirar as classes 'disabled' posteriormente
let navTab = document.querySelectorAll(".nav-tabs a");



navTab.forEach(item => {
  item.classList.remove("disabled");
});

function criarAutoAvaliacao(numeroMetas) {
  for(let i = 0; i < numeroMetas; i++) {
    let autoAvalia = document.getElementById("autoavalia" + (i+1));
    autoAvalia.innerHTML = `
    <div class="row m-0 pt-1">
      <div class="form-group col-12">
        <label for="titulo-meta${i+1}">Título da Meta</label>
        <input type="text" class="form-control" name="titulo-meta${i+1}" placeholder="Digite o título da Meta" >
      </div>

      <div class="form-group col-6">
        <p>Teste</p>
      </div>
    </div>
    `
  }
}

criarAutoAvaliacao(5);