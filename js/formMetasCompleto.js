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
      <div class="form-group col-2">
        <label for="data-autoavalia">Data Auto Avaliação</label>
        <input type="date" class="form-control" name="data-autoavalia" placeholder="dd/mm/aaaa">
      </div>
      <div class="form-group col-2">
        <label for="avalia-meta${i+1}">Avaliação da Meta</label>
        <select class="form-control" name="avalia-meta${i+1}" id="avalia-meta${i+1}"></select>
      </div>

      <div class="form-group col-12">
        <label for="comentario-meta">Comentário Meta ${i+1} - Auto Avaliação</label>
        <textarea class="col-12" name="comentario-meta" id="comentario-meta" rows="6" required></textarea>
      </div>
    </div>
    `
  }
}

criarAutoAvaliacao(5);