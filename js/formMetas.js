let metas = document.querySelector(".metas");

function criarFormMetas(numeroMetas) {
  for(let i = 0; i < numeroMetas; i++) {
    if(i < 3) {
      metas.innerHTML += `
        <div class="meta${i+1} mt-4">
          <h3 class="col-12">Meta ${i+1} <span class="required-field">*</span></h3>
          
          <ul class="nav nav-tabs mt-3">
            <li class="nav-item">
              <a class="nav-link active" id="meta${i+1}-tab" data-toggle="tab" href="#meta${i+1}" aria-controls="meta${i+1}" aria-selected="true">Meta</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" id="autoavalia${i+1}-tab" data-toggle="tab" href="#autoavalia${i+1}" aria-controls="autoavalia${i+1}" aria-selected="false">Auto Avaliação</a>
              </li>
            <li class="nav-item">
              <a class="nav-link disabled" id="avaliagest${i+1}-tab" data-toggle="tab" href="#avaliagest${i+1}" aria-controls="avaliagest${i+1}" aria-selected="false">Avaliação Gestor</a>
            </li>
          </ul>
          <div class="tab-content">

            <div class="tab-pane fade show active" id="meta${i+1}" aria-labelledby="meta${i+1}-tab">
              <div class="row m-0 pt-1">
                <div class="form-group col-12">
                  <label for="titulo-meta${i+1}">Título da Meta <span class="required-field">*</span></label>
                  <input type="text" class="form-control" name="titulo-meta${i+1}" placeholder="Digite o título da Meta" required>
                </div>

                <div class="form-group col-2">
                  <label for="peso${i+1}">Peso (%) <span class="required-field">*</span></label>
                  <select name="peso${i+1}" id="peso${i+1}" class="form-control select-peso" required></select>
                </div>
                <div class="form-group col-6">
                  <label for="prior-estrat${i+1}">Prioridade Estratégica <span class="required-field">*</span></label>
                  <select name="prior-estrat${i+1}" id="prior-estrat${i+1}" class="form-control select-priorestrat" required></select>
                </div>
                <div class="form-group col-2">
                  <label for="prazo${i+1}">Prazo <span class="required-field">*</span></label>
                  <select name="prazo${i+1}" id="prazo${i+1}" class="form-control select-prazo" required></select>
                </div>

                <div class="form-group col-12">
                  <label for="detalhe-meta">Detalhamento da Meta <span class="required-field">*</span></label>
                  <textarea class="col-12" name="detalhe-meta" id="detalhe-meta" rows="6" required></textarea>
                </div>

                <div class="form-group col-6 position-required">
                  <label for="indic-sucesso">Indicadores de Sucesso (KPIs)</label><br>
                  <span class="required-field">*</span>
                  <input type="text" class="form-control mb-3" name="indic-sucesso" placeholder="" required>
                  <input type="text" class="form-control mb-3" name="indic-sucesso" placeholder="">
                  <input type="text" class="form-control" name="indic-sucesso" placeholder="">
                </div>
                <div class="form-group col-6 position-required">
                  <label for="metrica">Métrica (número ou porcentagem)</label><br>
                  <span class="required-field">*</span>
                  <input type="text" class="form-control mb-3" name="metrica" placeholder="" required>
                  <input type="text" class="form-control mb-3" name="metrica" placeholder="">
                  <input type="text" class="form-control" name="metrica" placeholder="">
                </div>
              </div>
            </div>
              
            <div class="tab-pane fade" id="autoavalia${i+1}" aria-labelledby="autoavalia${i+1}-tab">......</div>

            <div class="tab-pane fade" id="avaliagest${i+1}" aria-labelledby="avaliagest${i+1}-tab">...</div>

          </div>
        </div>

      `;
    } else {
      metas.innerHTML += `
      <div class="meta${i+1} mt-4">
        <h3 class="col-12">Meta ${i+1}</h3>
        
        <ul class="nav nav-tabs mt-3">
          <li class="nav-item">
            <a class="nav-link active" id="meta${i+1}-tab" data-toggle="tab" href="#meta${i+1}" aria-controls="meta${i+1}" aria-selected="true">Meta</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" id="autoavalia${i+1}-tab" data-toggle="tab" href="#autoavalia${i+1}" aria-controls="autoavalia${i+1}" aria-selected="false">Auto Avaliação</a>
            </li>
          <li class="nav-item">
            <a class="nav-link disabled" id="avaliagest${i+1}-tab" data-toggle="tab" href="#avaliagest${i+1}" aria-controls="avaliagest${i+1}" aria-selected="false">Avaliação Gestor</a>
          </li>
        </ul>
        <div class="tab-content">

          <div class="tab-pane fade show active" id="meta${i+1}" aria-labelledby="meta${i+1}-tab">
              
            <div class="row m-0 pt-1">
              <div class="form-group col-12">
                <label for="titulo-meta${i+1}">Título da Meta</label>
                <input type="text" class="form-control" name="titulo-meta${i+1}" placeholder="Digite o título da Meta" >
              </div>

              <div class="form-group col-2">
                <label for="peso${i+1}">Peso (%)</label>
                <select name="peso${i+1}" id="peso${i+1}" class="form-control select-peso" ></select>
              </div>
              <div class="form-group col-6">
                <label for="prior-estrat${i+1}">Prioridade Estratégica</label>
                <select name="prior-estrat${i+1}" id="prior-estrat${i+1}" class="form-control select-priorestrat" ></select>
              </div>
              <div class="form-group col-2">
                <label for="prazo${i+1}">Prazo</label>
                <select name="prazo${i+1}" id="prazo${i+1}" class="form-control select-prazo" ></select>
              </div>

              <div class="form-group col-12">
                <label for="detalhe-meta">Detalhamento da Meta</label>
                <textarea class="col-12" name="detalhe-meta" id="detalhe-meta" rows="6" ></textarea>
              </div>

              <div class="form-group col-6">
                <label for="indic-sucesso">Indicadores de Sucesso (KPIs)</label>
                <input type="text" class="form-control mb-3" name="indic-sucesso" placeholder="" >
                <input type="text" class="form-control mb-3" name="indic-sucesso" placeholder="">
                <input type="text" class="form-control" name="indic-sucesso" placeholder="">
              </div>
              <div class="form-group col-6">
                <label for="metrica">Métrica (número ou porcentagem)</label>
                <input type="text" class="form-control mb-3" name="metrica" placeholder="" >
                <input type="text" class="form-control mb-3" name="metrica" placeholder="">
                <input type="text" class="form-control" name="metrica" placeholder="">
              </div>
            </div>     
          </div>

          <div class="tab-pane fade" id="autoavalia${i+1}" aria-labelledby="autoavalia${i+1}-tab"></div>
          
          <div class="tab-pane fade" id="avaliagest${i+1}" aria-labelledby="avaliagest${i+1}-tab">...</div>
        </div>
      </div>
    `;
    }
  }
}

criarFormMetas(5);
