import './cadastro.css'

function Cadastro() {
  return (
    <div>
        
      <header>
        <h2>Cadastro</h2>
      </header>
      <main>
        <div className="preencher">
        <span>Por favor digite o nome</span>
        <input type="text" placeholder= "  Digite aqui" />

        <span>Email</span>
        <input type="email" placeholder="  Digite aqui" />

        <span>Digite o email novamente</span>
        <input type="email" placeholder="  Digite aqui" />

        <span>Digite sua senha</span>
        <input type="password" placeholder="  Digite aqui" />

        <span>Digite sua senha novamente</span>
        <input type="password" placeholder="  Digite aqui" />

          <button>Cadastre-se</button>
</div>
      
      </main>
   </div>
  )
}

export default Cadastro;