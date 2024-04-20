import Layout from "../../components/layout"
import { Input ,Checkbox, CheckboxGroup } from '@chakra-ui/react'

function Atividades(){
    return(
        <Layout>
            <div>
            <h1>Atividades</h1>
            <Input htmlSize={50} width='auto' placeholder='Inserir tarefa' />
            <Checkbox colorScheme='green'>Checkbox</Checkbox>
            <p>Criar Projeto</p>
            <p>Criar Componentes</p>
            <p>Criar Páginas</p>
            <p>Criar Estilização</p>
            <hr /> {} 
            
            </div>
        </Layout>
    )
    
}

export default Atividades