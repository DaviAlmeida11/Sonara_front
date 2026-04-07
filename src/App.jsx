import imagem from "./img/SONARA LOGO.svg"; // importa a imagem
import "./App.css";

function App() {
  return (
    <body>
      <header>
        <img src={imagem} alt="Banana" />
      </header>
      <main>
        <div className="mensagem">
          <h1>BEM-VINDO A SONARA</h1>
          <span>UNIFICANDO</span>
          <h2> OQUE VOCE BUSCA ?</h2>
        </div>
        <button>
          <p>Contratar Arttista</p>
        </button>
        <button>
          <p>Fazer Shows</p>
        </button>
        <button>
          <p>Ver Eventos</p>
        </button>
      </main>
    </body>
  );
}

export default App;
