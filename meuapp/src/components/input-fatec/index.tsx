import './InputFatec.css'

interface InputFatec {
    type: 'text' 
    placeholder: string
    defaultValue: string
  }


function InputFatec({type, placeholder,defaultValue}:InputFatec){
    return (
        
        <input 
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className="input-fatec">
        </input>
    
    )
}

export default InputFatec