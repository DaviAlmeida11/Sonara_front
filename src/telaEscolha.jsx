import logo from './img/sonara-logo.svg';
import './telaEscolha.css';
import { useNavigate } from 'react-router-dom';

export default function TelaEscolha() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="Logo Sonara" />
      </header>

      <main className="main">
        <div className="mensagem">
          <h1>BEM-VINDO A SONARA</h1>
          <p>UNIFICANDO IDEIAS, REALIZANDO SONHOS</p>
          <h2>O QUE VOCÊ BUSCA?</h2>
        </div>

        <div className="botao">
          <button onClick={() => navigate("/contratar")}>
            Contratar Artista
          </button>

          <button onClick={() => navigate("/shows")}>
            Fazer Shows
          </button>

          <button onClick={() => navigate("/eventos")}>
            Ver Eventos
          </button>
        </div>
      </main>
    </div>
  );
}