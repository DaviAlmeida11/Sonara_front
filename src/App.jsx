
import { useState } from 'react'
import logo from './img/SONARA LOGO.svg';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      
    
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <div className="mensagem">
          <h1> BEM-VINDO A SONARA</h1>
          <p>UNIFICANDO IDEIAS, REALIZANDO SONHOS</p>
          <h2>OQUE VOCE BUSCA ?</h2>
        </div>
        <div className="botao">
        <button>
          <span>Contratar Artista</span>
        </button>
        <button>
         <span>Fazer Shows </span> 
        </button>
        <button>
         <span>Ver Eventos </span> 
        </button>
       </div>
      </main>
   </body>
  )
}

export default App
