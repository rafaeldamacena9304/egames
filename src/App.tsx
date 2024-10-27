import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from './pages/Home';
import { Categorias } from './pages/Categorias'
import { ProdutoPage } from './pages/ProdutoPage';


const rotas = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/categorias',
    element: <Categorias />
  },
  {
    path:'/produto/:id',
    element: <ProdutoPage />
  }

])

function App() {
  return (
    <>
      <RouterProvider router={rotas}/>
   </>
  );
}

export default App;
