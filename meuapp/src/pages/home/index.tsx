import { Link } from "react-router-dom"

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <Link to='/sobre'>Ir para Sobre</Link>
            <br />
            <Link to='/contatos'>Ir para Contatos</Link>
            <br />
            <Link to='/tarefas'>Ir para Tarefas</Link>
    
        </div>
    )
}

export default Home