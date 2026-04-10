import "./cadastro.css";

function Cadastro() {
  return (
    <div>
      <header>
        <h2>Cadastro</h2>
      </header>
      <main>
        <div className="preencher">
          <span>Por favor digite o nome</span>
          <input type="text" placeholder="  Digite aqui" />

          <span>Email</span>
          <input type="email" placeholder="  Digite aqui" />

          <span>Digite o email novamente</span>
          <input type="email" placeholder="  Digite aqui" />

          <span>Digite sua senha</span>
          <input type="password" placeholder="  Digite aqui" />

          <span>Digite sua senha novamente</span>
          <input type="password" placeholder="  Digite aqui" />

          <span>Digite seu CPF</span>
          <input type="text" placeholder="  Digite Aqui" />

          <span>Data de Nascimento</span>
          <input type="date" placeholder="Data" />

          <span>Digite Seu Teleofne</span>
          <input type="tel" placeholder="Digite Seu Numero de Celular" />

          <span>Diga sua nascionalidade</span>
          <label for="nacionalidade">Nacionalidade:</label>
          <select id="nacionalidade" name="nacionalidade" required>
            <option value="">Selecione...</option>
            <option value="brasileira">Brasileira</option>
            <option value="portuguesa">Portuguesa</option>
            <option value="angolana">Angolana</option>
          </select>

          <span>Coloque seu Endereço</span>

          <form>
            <div>
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                id="cep"
                name="cep"
                placeholder="00000-000"
                maxLength="9"
              />
            </div>

            <div>
              <label htmlFor="logradouro">Rua</label>
              <input
                type="text"
                id="logradouro"
                name="logradouro"
                placeholder="Rua, Avenida, etc."
              />
            </div>

            <div>
              <label htmlFor="numero">Número</label>
              <input type="text" id="numero" name="numero" />
            </div>

            <div>
              <label htmlFor="complemento">Complemento</label>
              <input
                type="text"
                id="complemento"
                name="complemento"
                placeholder="Apt, Bloco, etc."
              />
            </div>

            <div>
              <label htmlFor="bairro">Bairro</label>
              <input type="text" id="bairro" name="bairro" />
            </div>

            <div>
              <label htmlFor="localidade">Cidade</label>
              <input type="text" id="localidade" name="localidade" />
            </div>

            <div>
              <label htmlFor="uf">Estado (UF)</label>
              <input
                type="text"
                id="uf"
                name="uf"
                maxLength="2"
                style={{ width: "50px" }}
              />
            </div>
          </form>

          <button>Cadastre-se</button>
        </div>
      </main>
    </div>
  );
}

export default Cadastro;
