import { Link } from "react-router-dom"
import Layout from "../../components/layout"
import { useEffect, useState } from "react"
import ItemTarefa from "../../components/tarefas/tarefa"
import FormTarefa from "../../components/tarefas/form"
import { Tarefa } from "../../interfaces/tarefa"

function Tarefas(){

    
    const [tarefas, setTarefas] = useState<Tarefa[]>([])

    function carregarLista(){
        return [
            {id: 1, nome: "Tarefa 1", concluida: false},
            {id: 2, nome: "Tarefa 2", concluida: false}
        ]
    }

    useEffect(() => {
        alert('Render')
        const tarefas = carregarLista()
        setTarefas(tarefas)
    },[])



    function apagarTarefa(id: number){
        const tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id !== id)
        setTarefas(tarefasAtualizadas)
    }
    
    return (
        <Layout>
            <h1 style={{ marginTop: '40px' }}>Tarefas</h1>
            <Link to='/'>Voltar para Home</Link>
            <hr />
            <FormTarefa 
            tarefas={tarefas} 
            setTarefas={setTarefas} />
            {
                tarefas.map((tarefa) => (
                    <ItemTarefa
                    key={tarefa.id}
                    apagarTarefa={apagarTarefa} 
                    titulo={tarefa.nome} 
                    idTarefa={tarefa.id} />
                ))
            }
        </Layout>
    )
}

export default Tarefas