let avaliacaoCompetencias = document.querySelector(".avalia-compet");

avaliacaoCompetencias.innerHTML = `
  <h3 class="titulo-quadro col-12 mb-3">Avaliação de Competências</h3>

  <div class="row m-0">
      <div class="form-group col-6">
        <h4>Encantar o cliente</h4>
        <p class="mt-3">Surpreende o cliente proporcionando uma memorável experiência, cuidando dos detalhes, em um ambiente acolhedor e divertido. Mostra iniciativa e capacidade de superar obstáculos na busca pela excelência e constante melhoria dos serviços aos clientes externos e internos.</p>
      </div>
      <div class="form-group col-6">
        <div class="row col-12">
          <label class="col-12 p-0" for="auto-avaliacao">Auto Avaliação <span class="required-field">*</span></label>
          <select name="auto-avaliacao" id="auto-avaliacao" class="form-control col-3 select-autoavalia"></select>
          <p class="legenda-nota col-9 pl-4 mt-2">EXCEDE ÀS EXPECTATIVAS</p>
        </div>
        <div class="row col-12 mt-3">
          <label class="col-12 p-0" for="avaliacao-gestor">Avaliação Gestor <span class="required-field">*</span></label>
          <select name="avaliacao-gestor" id="avaliacao-gestor" class="form-control col-3 select-avaliagest"></select>
          <p class="legenda-nota col-9 pl-4 mt-2">EXCEDE ÀS EXPECTATIVAS</p>
        </div>
      </div>
      <div class="form-group col-12"><div class="border-compet"></div></div>
  </div>

  <div class="row m-0">
      <div class="form-group col-6">
        <h4>Nosso Jeito de Ser</h4>
        <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum metus eu vestibulum cursus. Curabitur sollicitudin, eros sit amet fringilla iaculis, odio ante aliquet ligula, et semper lorem lacus ac lacus. Proin vulputate porttitor sodales. Aliquam velit nunc, ornare non nisl vitae, commodo maximus libero. In pharetra pharetra fermentum. Aenean laoreet semper tempus.</p>
      </div>
      <div class="form-group col-6">
        <div class="row col-12">
          <label class="col-12 p-0" for="auto-avaliacao">Auto Avaliação <span class="required-field">*</span></label>
          <select name="auto-avaliacao" id="auto-avaliacao" class="form-control col-3 select-autoavalia"></select>
          <p class="legenda-nota col-9 pl-4 mt-2">EXCEDE ÀS EXPECTATIVAS</p>
        </div>
        <div class="row col-12 mt-3">
          <label class="col-12 p-0" for="avaliacao-gestor">Avaliação Gestor <span class="required-field">*</span></label>
          <select name="avaliacao-gestor" id="avaliacao-gestor" class="form-control col-3 select-avaliagest"></select>
          <p class="legenda-nota col-9 pl-4 mt-2">EXCEDE ÀS EXPECTATIVAS</p>
        </div>
      </div>
      <div class="form-group col-12"><div class="border-compet"></div></div>
  </div>
  <div class="row m-0">
      <div class="form-group col-6">
        <h4>Sinergia e Trabalho em equipe</h4>
        <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum metus eu vestibulum cursus. Curabitur sollicitudin, eros sit amet fringilla iaculis, odio ante aliquet ligula, et semper lorem lacus ac lacus. Proin vulputate porttitor sodales. Aliquam velit nunc, ornare non nisl vitae, commodo maximus libero. In pharetra pharetra fermentum. Aenean laoreet semper tempus.</p>
      </div>
      <div class="form-group col-6">
        <div class="row col-12">
          <label class="col-12 p-0" for="auto-avaliacao">Auto Avaliação <span class="required-field">*</span></label>
          <select name="auto-avaliacao" id="auto-avaliacao" class="form-control col-3 select-autoavalia"></select>
          <p class="legenda-nota col-9 pl-4 mt-2">EXCEDE ÀS EXPECTATIVAS</p>
        </div>
        <div class="row col-12 mt-3">
          <label class="col-12 p-0" for="avaliacao-gestor">Avaliação Gestor <span class="required-field">*</span></label>
          <select name="avaliacao-gestor" id="avaliacao-gestor" class="form-control col-3 select-avaliagest"></select>
          <p class="legenda-nota col-9 pl-4 mt-2">EXCEDE ÀS EXPECTATIVAS</p>
        </div>
      </div>
      <div class="form-group col-12"><div class="border-compet"></div></div>
  </div>
  <div class="row m-0">
      <div class="form-group col-6">
        <h4>Inspirar e Nutrir Nossas Pessoas</h4>
        <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum metus eu vestibulum cursus. Curabitur sollicitudin, eros sit amet fringilla iaculis, odio ante aliquet ligula, et semper lorem lacus ac lacus. Proin vulputate porttitor sodales. Aliquam velit nunc, ornare non nisl vitae, commodo maximus libero. In pharetra pharetra fermentum. Aenean laoreet semper tempus.</p>
      </div>
      <div class="form-group col-6">
        <div class="row col-12">
          <label class="col-12 p-0" for="auto-avaliacao">Auto Avaliação <span class="required-field">*</span></label>
          <select name="auto-avaliacao" id="auto-avaliacao" class="form-control col-3 select-autoavalia"></select>
          <p class="legenda-nota col-9 pl-4 mt-2">EXCEDE ÀS EXPECTATIVAS</p>
        </div>
        <div class="row col-12 mt-3">
          <label class="col-12 p-0" for="avaliacao-gestor">Avaliação Gestor <span class="required-field">*</span></label>
          <select name="avaliacao-gestor" id="avaliacao-gestor" class="form-control col-3 select-avaliagest"></select>
          <p class="legenda-nota col-9 pl-4 mt-2">EXCEDE ÀS EXPECTATIVAS</p>
        </div>
      </div>
      <div class="form-group col-12"><div class="border-compet"></div></div>
  </div>
  <div class="row m-0">
      <div class="form-group col-6">
        <h4>Cratividade e Inovação</h4>
        <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum metus eu vestibulum cursus. Curabitur sollicitudin, eros sit amet fringilla iaculis, odio ante aliquet ligula, et semper lorem lacus ac lacus. Proin vulputate porttitor sodales. Aliquam velit nunc, ornare non nisl vitae, commodo maximus libero. In pharetra pharetra fermentum. Aenean laoreet semper tempus.</p>
      </div>
      <div class="form-group col-6">
        <div class="row col-12">
          <label class="col-12 p-0" for="auto-avaliacao">Auto Avaliação <span class="required-field">*</span></label>
          <select name="auto-avaliacao" id="auto-avaliacao" class="form-control col-3 select-autoavalia"></select>
          <p class="legenda-nota col-9 pl-4 mt-2">EXCEDE ÀS EXPECTATIVAS</p>
        </div>
        <div class="row col-12 mt-3">
          <label class="col-12 p-0" for="avaliacao-gestor">Avaliação Gestor <span class="required-field">*</span></label>
          <select name="avaliacao-gestor" id="avaliacao-gestor" class="form-control col-3 select-avaliagest"></select>
          <p class="legenda-nota col-9 pl-4 mt-2">EXCEDE ÀS EXPECTATIVAS</p>
        </div>
      </div>
  </div>
  <div class="row">
    <div class="form-group col-12 mb-2">
      <label for="comentario-colaborador" class="m-0">Comentário da Avaliação de Competências - Colaborador</label>
      <textarea class="col-12 p-1" name="comentario-colaborador" id="comentario-colaborador" rows="6" ></textarea>
    </div>
    <div class="form-group col-12">
      <label for="comentario-gestor" class="m-0">Comentário da Avaliação de Competências - Gestor</label>
      <textarea class="col-12 p-1" name="comentario-gestor" id="comentario-gestor" rows="6" ></textarea>
    </div>
  </div>
`