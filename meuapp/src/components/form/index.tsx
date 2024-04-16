import ButtonFatec from "../botao-fatec/index"
import InputFatec from "../input-fatec/index"


function Form() {
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
  
  export default Form