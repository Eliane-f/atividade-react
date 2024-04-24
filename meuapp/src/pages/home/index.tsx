import { Link } from "react-router-dom"
import Layout from "../../components/layout"

function Home(){
    return (
           
        <Layout>
            <div style={{ marginTop: '20px' }}>
                <h1>Atividade React</h1>
                <p>Esse trabalho foi desenvolvido usando React e a extensão de sintaxe JSX e 
                    utilizando tamplates do Chakra para aplicar o conteúdo aprendido em sala.</p>
                <br/>
                <Link to='/sobre'>Ir para Sobre</Link>
                <br />
                <Link to='/contatos'>Ir para Contatos</Link>
                <br />
                <Link to='/tarefas'>Ir para Tarefas</Link>
            </div>
        </Layout>
    
    )
}

export default Home