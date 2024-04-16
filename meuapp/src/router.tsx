import {createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/sobre'
import NotFound from './pages/404'
import Contatos from './pages/contatos/index'
import Tarefas from './pages/tarefas/index'


const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound />},
  {path: '/sobre', element: <Sobre />},
  {path: '/contatos', element:<Contatos />},
  {path: '/tarefas', element:<Tarefas />}
  
  
])

export default router