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
        <label for="data-autoavalia">Dt Auto Avaliação</label>
        <input type="date" class="form-control datas" name="data-autoavalia" placeholder="dd/mm/aaaa">
      </div>
      <div class="form-group col-2">
        <label for="avalia-meta${i+1}">Avaliação da Meta</label>
        <select class="form-control" name="avalia-meta${i+1}" id="avalia-meta${i+1}"></select>
      </div>

      <div class="form-group col-12">
        <label for="comentario-meta">Comentário Meta ${i+1} - Auto Avaliação</label>
        <textarea class="col-12" name="comentario-meta" id="comentario-meta" rows="6" required></textarea>
      </div>

      <div class="col-12 text-right">
        <button type="button" class="btn col-12 pl-2 pr-2">Registrar Avaliação</button>
      </div>
    </div>
    `
  }
}

function criarAvaliacaoGestor(numeroMetas) {
  for(let i = 0; i < numeroMetas; i++) {
    let avaliaGest = document.getElementById("avaliagest" + (i+1));
    avaliaGest.innerHTML = `
    <div class="row m-0 pt-1">
      <div class="form-group col-2">
        <label for="data-avaliagest">Dt Avaliação Gestor</label>
        <input type="date" class="form-control datas" name="data-avaliagest" placeholder="dd/mm/aaaa">
      </div>
      <div class="form-group col-2">
        <label for="avalia-metagest${i+1}">Avaliação da Meta</label>
        <select class="form-control" name="avalia-metagest${i+1}" id="avalia-metagest${i+1}"></select>
      </div>

      <div class="form-group col-12">
        <label for="comentario-meta">Comentário Meta ${i+1} - Avaliação Gestor</label>
        <textarea class="col-12" name="comentario-meta" id="comentario-meta" rows="6" required></textarea>
      </div>

      <div class="col-12 text-right">
        <button type="button" class="btn col-12 pl-2 pr-2">Registrar Avaliação</button>
      </div>
    </div>
    `
  }
}

criarAutoAvaliacao(5);
criarAvaliacaoGestor(5);