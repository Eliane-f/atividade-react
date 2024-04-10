import './ButtonFatec.css'        //classname =  'bota-fatec'
//import styles from './ButtonFatec.module.css'   // styles.botaoFatec



interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonFatec({type, label}: Props){
    return (
        <button className='botao-fate' type={type}>
            {label}
        </button>
    )
}

export default ButtonFatec