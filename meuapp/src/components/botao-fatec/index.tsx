import { Button } from '@chakra-ui/react'
// import './ButtonFatec.css'        //classname =  'bota-fatec'
//import styles from './ButtonFatec.module.css'   // styles.botaoFatec



interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonFatec({type, label}: Props){
    return (
    
        <Button type={type} colorScheme='red' size='lg'>
            {label}
        </Button>        
    )
}

export default ButtonFatec