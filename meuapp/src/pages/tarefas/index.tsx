import Layout from "../../components/layout";
import NovaTarefa from "../../components/nova-tarefa";
import Tarefa from "../../components/tarefa";


function Atividades(){
    return(
        <Layout>
            <div style={{ marginTop: '40px' }}>
                <h1>Lista de tarefas</h1>
            </div>
            <div style={{ marginTop: '20px' }}>
                <hr /> {}
                <h2 style={{fontWeight: 'bold'}}>Insirir nova tarefa</h2>
                <NovaTarefa></NovaTarefa>
                <hr /> {}
                
                <Tarefa tarefa='Tarefa 1' ></Tarefa>
                <Tarefa tarefa='Tarefa 2' ></Tarefa>
                <Tarefa tarefa='Tarefa 3' ></Tarefa>
                <Tarefa tarefa='Tarefa 4' ></Tarefa>
            </div>
        </Layout>
    )
    
}

export default Atividades