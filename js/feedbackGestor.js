let feedbackGestor = document.querySelector('.feedback-gestor');

feedbackGestor.innerHTML = `
  <h3 class="titulo-quadro col-12 mb-3">Feedback - Gestor</h3>

  <div class="row">
      <div class="form-group col-12">
        <label for="data-feedback" class="col-12">Data feedback</label>
        <div class="row m-0">
          <input type="date" class="form-control col-2 p-1" name="data-feedback" id="data-feedback" placeholder="dd/mm/aaaa">
          <p class="col-7 text-center">A construção do PDI é obrigatória para notas finais “Abaixo das Expectativas” (1) ou “Necessidade de Melhora (2)</p>
          <button type="button" class="btn btn-collapse" data-toggle="collapse" data-target="#notasCollapse"><img style="width:30px; height:30px;" src="
          https://d1icd6shlvmxi6.cloudfront.net/gsc/PFA9HZ/8f/8c/8e/8f8c8e5f001345468db8c04cf70184d0/images/feedback-gestor-colab/u274.png?token=5df702de0131a9cca1a70803191934c517e9bec4d6cdfa829b731982b09230c1" alt="ícone nota" class="mr-2">Formulário de PDI</button>
        </div>
      </div>
      <div class="form-group col-12 mb-2">
        <label for="comentario-colaborador" class="col-12 mb-0">Justifique brevemente as razões para construção do Plano de Desenvolvimento Individual (PDI), se aplicável</label>
        <textarea class="col-11 p-1" name="comentario-colaborador" id="comentario-colaborador" rows="6"></textarea>
      </div>
  </div>
`;

