let dadosPessoais = document.querySelector('.dados-pessoais');

dadosPessoais.innerHTML = `
  <h3 class="col-12">Dados Pessoais</h3>
    <div class="row m-0">
      <div class="form-group col-6">
        <label for="nome-colab">Nome do Colaborador <span class="required-field">*</span></label>
        <input type="text" class="form-control" name="nome-colab" placeholder="Será preenchido automaticamente com o usuário logado" readonly>
      </div>
      <div class="form-group col-6">
        <label for="nome-gestor">Nome do Gestor <span class="required-field">*</span></label>
        <input type="text" class="form-control" name="nome-gestor" placeholder="Buscará o Gestor do cadastro de colaboradores" readonly>
      </div>

      <div class="form-group col-6">
        <label for="email-colab">E-mail do Colaborador <span class="required-field">*</span></label>
        <input type="text" class="form-control" name="email-colab" placeholder="Será preenchido automaticamente com o usuário logado" readonly>
      </div>
      <div class="form-group col-6">
        <label for="email-gestor">E-mail do Gestor <span class="required-field">*</span></label>
        <input type="text" class="form-control" name="email-gestor" placeholder="Buscará o Gestor do cadastro de colaboradores" readonly>
      </div>

      <div class="form-group col-6">
        <label for="matricula">Matrícula <span class="required-field">*</span></label>
        <input type="text" class="form-control" name="matricula" placeholder="Digite a matrícula" required>
      </div>
      <div class="form-group col-6">
        <label for="diretoria">Diretoria <span class="required-field">*</span></label>
        <select name="diretoria" id="diretoria" class="form-control"></select>
      </div>
      <div class="form-group col-2">
        <label for="data-criacao">Dt Criação <span class="required-field">*</span></label>
        <input type="date" class="form-control datas" name="data-criacao" placeholder="dd/mm/aaaa" required>
      </div>
      <div class="form-group col-2">
        <label for="data-feedback">Dt Feedback <span class="required-field">*</span></label>
        <input type="date" class="form-control datas" name="data-feedback" placeholder="dd/mm/aaaa" readonly>
      </div>
      <div class="form-group col-2">
        <label for="ano">Ano <span class="required-field">*</span></label>
        <input type="number" class="form-control datas" name="ano" placeholder="2019" readonly>
      </div>
      <div class="form-group col-2">
        <label for="data-autoavaliacao">Dt Auto Avaliação</label>
        <input type="date" class="form-control datas" name="data-autoavaliacao" placeholder="dd/mm/aaaa" readonly>
      </div>
      <div class="form-group col-2">
        <label for="data-avaliagest">Dt Avaliação Gestor</label>
        <input type="date" class="form-control datas" name="data-avaliagest" placeholder="dd/mm/aaaa" readonly>
      </div>
      <div class="form-group col-2">
        <label for="data-consistência">Dt Consistência</label>
        <input type="date" class="form-control datas" name="data-consistência" placeholder="dd/mm/aaaa" readonly>
      </div>
    </div>
  </div>
`