import './App.css';
import Logo from './componentes/Logo'
import perfil from './imagens/perfil.svg'
import sacola from './imagens/sacola.svg'
import OpcoesHeader from './componentes/OpcoesHeader'

const icones = [perfil, sacola]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>        
        <ul className='icones'>
          {icones.map((icone) =>(
            <li className='icone'><img src = {icone}></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App
