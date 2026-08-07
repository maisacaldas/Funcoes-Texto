import './App.css'
import {saudacao} from'./utils/texto'
function App() {

  return (
    <>
      <p>{saudacao('Pedro','a')}</p>
      <p>{saudacao('Ana Laura','o')}</p>
      <p>{saudacao('Ariel','e')}</p>
      <p>{saudacao('Jonas e Luiz','os')}</p>
    </>
  )
}

export default App
