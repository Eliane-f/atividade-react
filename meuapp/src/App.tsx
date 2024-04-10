import './App.css'
import InputFatec from './components/input-fatec'
import ButtonFatec from './components/botao-fatec'


function App() {
  return (
    <>
      <p>Entre em contato</p>
      <hr /> {} 
      <div>
        <InputFatec type='text' placeholder='Nome' defaultValue='' />
      </div>
      <div>
        <InputFatec type='text' placeholder='E-mail' defaultValue='' />
      </div>
      <div>
       <InputFatec type='text' placeholder='Telefone' defaultValue='' />
      </div>
      <hr /> {}
      <p>
        <ButtonFatec type='button' label='Fatec: Enviar mensagem'/>
      </p>
      
    </>
  )
}

export default App