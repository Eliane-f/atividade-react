import Layout from "../../components/layout";
import { Input ,Checkbox, CheckboxGroup } from '@chakra-ui/react';
import NovaTarefa from "../../components/nova-tarefa";

function Atividades(){
    return(
        <Layout>
            <div>
                <h1>Lista de tarefas</h1>
                <hr /> {}
            </div>
            <div>
            <h2>Insirir nova tarefa</h2>
            <NovaTarefa></NovaTarefa>
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