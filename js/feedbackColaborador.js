let feedbackColaborador = document.querySelector(".feedback-colaborador");

feedbackColaborador.innerHTML = `
  <h3 class="titulo-quadro col-12 mb-3">Feedback - Colaborador</h3>

  <div class="row">
    <div class="col-12">

      <p class="col-12 question mb-2">Você recebeu feedback final da avaliação de desempenho?</p>
      <div class="mb-1">
        <input type="radio" id="recebeu" name="recebeu-feedback">
        <label for="recebeu">Sim</label>

        <input type="radio" id="nao-recebeu" name="recebeu-feedback">
        <label for="nao-recebeu">Não</label>
      </div>

      <p class="col-12 question mb-2">O feedback ajudou a identificar suas oportunidades de desenvolvimento e pontos fortes?</p> 
      <div class="mb-1">
        <input type="radio" id="ajudou" name="feedback-ajudou">
        <label for="ajudou">Sim</label>

        <input type="radio" id="nao-ajudou" name="feedback-ajudou">
        <label for="nao-ajudou">Não</label>
      </div>

      <p class="col-12 question mb-2">Qual nota você dá sobre a qualidade do feedback que recebeu?</p> 
      <div class="mb-1">
        <input type="radio" id="otimo" name="nota-feedback">
        <label for="otimo">Ótimo</label>

        <input type="radio" id="bom" name="nota-feedback">
        <label for="bom">Bom</label>

        <input type="radio" id="regular" name="nota-feedback">
        <label for="regular">Regular</label>

        <input type="radio" id="ruim" name="nota-feedback">
        <label for="ruim">Ruim</label>
      </div>
    </div>
  </div>
`;