import "./login.css"
import "./index.css"
import logo from "./img/sonara-logo.svg"

function Login() {
    return (
        <div>
            <header>
                <img src={logo} alt="" />
                 <p>SONARA</p>
            </header>
           
            <main>
                <div className="caixa">
                    <p>Bem vindo de volta!</p>
                    <div frupo1="">
                    <label htmlFor="label">Email</label>
                    <input type="text"/>
                    </div>
                    <div className="grupo2">
                  <label htmlFor="label">Senha</label>
                    <input type="text" />
                    </div>
                    <button>Entrar</button>

                    <div className="recuperacao">
                        <span>Não tem conta? <a href="" style={{textDecoration: "none", color: "white"}}>Cadastre-se</a></span> <br />
                        <div className="senha">
                        <span>Esqueceu a senha? <a href=""style={{textDecoration: "none", color: "white"}}>Clique aqui</a></span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login;