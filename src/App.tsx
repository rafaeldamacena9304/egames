import { Provider } from 'react-redux';
import { store } from './redux/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from './pages/Home';
import { Categorias } from './pages/Categorias'
import { ProdutoPage } from './pages/ProdutoPage';
import { GlobalStyle } from './globalStyle';


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
    <Provider store={store}>
      <GlobalStyle/>
      <RouterProvider router={rotas}/>
   </Provider>
  );
}

export default App;
