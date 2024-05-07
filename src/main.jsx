import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Produtos from './routes/Produtos.jsx'
import Contato from './routes/Contato.jsx'
import Error from './routes/Error.jsx'

const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    errorElement:<Error />,

    children: [
      {path: '/musicStore', element: <Home />},
      {path: '/', element: <Home />},
      {path: '/Produtos',element:<Produtos/>},
      {path: '/Contato', element: <Contato />},
      {path: '/Login', element: <Login />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
