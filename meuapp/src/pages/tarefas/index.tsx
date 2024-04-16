import {Link} from "react-router-dom"

function Atividades(){
    return(
        <div>
        <h1>Atividades</h1>
        <p>Criar Projeto</p>
        <p>Criar Componentes</p>
        <p>Criar Páginas</p>
        <p>Criar Estilização</p>
        <hr /> {} 
        <Link to='/'>Voltar para Home</Link>
        </div>
        
    )
    
}

export default Atividades