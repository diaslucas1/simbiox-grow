let avaliacaoFinal = document.querySelector(".avaliacao-final");

avaliacaoFinal.innerHTML = `
  <h3 class="titulo-quadro col-12 mb-3">Avaliação Final</h3>

  <div class="row">

    <div class="form-group col-6">
      <label for="result-autoavalia" class="col-12">Resultado Auto Avaliação</label>
      <div class="row m-0">
        <input type="text" class="form-control col-4 p-1" name="result-autoavalia" id="result-autoavalia" placeholder="Notas + pesos">
        <p class="legenda-nota col-6 pl-4 mt-2">Dentro das Expectativas</p>
      </div>

      <label for="result-autoavalia" class="col-12 mt-4">Resultado Auto Avaliação</label>
      <div class="row m-0">
        <input type="text" class="form-control col-4 p-1" name="result-autoavalia" id="result-autoavalia" placeholder="Notas + pesos">
        <p class="legenda-nota col-6 pl-4 mt-2">Dentro das Expectativas</p>
      </div>
    </div>

    <div class="form-group col-6 mt-5">
      <label for="conceito-nota" class="">Avaliação Final (conceito da nota - após consistência)</label>
      <div class="row">
        <input type="text" class="form-control col-4" name="conceito-nota" id="conceito-nota" placeholder="Input field">
        <p class="legenda-nota col-6 pl-4 mt-2">Dentro das Expectativas</p>
      </div>
    </div>

  </div>
`