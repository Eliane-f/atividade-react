import { Link } from "react-router-dom"
import Layout from "../../components/layout"

function Home(){
    return (
           
        <Layout>
            <div>
                <h1>Home</h1>
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