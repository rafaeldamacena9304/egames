import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from './pages/Home';
import { Categorias } from './pages/Categorias'
import { ProdutoPage } from './pages/ProdutoPage';
import { GlobalStyle } from './globalStyle';
import { Carrinho } from './components/Carrinho';
import { Checkout } from './pages/Checkout';


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
  },
  {
    path:'/checkout',
    element: <Checkout /> 
  }

])

function App() {
  return (
    <>
      <GlobalStyle/>
      <RouterProvider router={rotas}/>
      <Carrinho/>
    </>
  );
}

export default App;
