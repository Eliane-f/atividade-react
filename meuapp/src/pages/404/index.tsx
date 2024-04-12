import { Link } from "react-router-dom"

function NotFound(){
    return(
        <>
            <h1>404</h1>
            <p>Pagina não encontrada</p>
            <Link to='/'>Voltar para pagina inicial</Link>
        </>
    )
}

export default NotFound