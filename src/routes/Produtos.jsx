import {} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Produtos() {

    //UTILIZANDO O useNavigate para redirecionar componentes
    const navigate= useNavigate();

    //CRIANDO A FUNCAO HANDLELOGOUT
    const handleLogout =()=>{
      sessionStorage.removeItem("usuario");
      sessionStorage.removeItem("senha");
      alert("saindo do sistema...")
      navigate("/");
    }
    
    return (
      <>

      <button onClick={handleLogout}>Logout</button>
      
      <div className="container bg-image">
        <div className="produtos">
          <h1>Produtos</h1>

          <p>CONHEÇAS OS NOVOS PRODUTOS DA LOJA</p>
          <a href="" className="btn">
            Conheça mais
          </a>       
        </div>
      </div>
      </>
    );
  }