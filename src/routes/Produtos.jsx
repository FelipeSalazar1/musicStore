import {} from 'react';
import { useNavigate } from 'react-router-dom';
import '../Scss/Produtos.scss'
import line from '../assets/Line.svg'
import available from '../assets/Chips.svg'
import amarelo from '../assets/gui-amarela.svg'
import vermelho from '../assets/gui-vermelha.svg'
import marrom from '../assets/gui-marrom.svg'

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
      <section className='produtos'>
        <button id='button-logout' onClick={handleLogout}>Logout</button>

          <div className="produtos-group1">

          
            <div id='tittle-produto'>
              <img src={line} alt="" />
              <h1>Lançamentos</h1>
              </div>
              <div id='produtos-new'>
                <div className="card-product">
                    <img src={amarelo} alt="" id='img1'/>
                    <div className='desc-product'>
                        <div className='cont-left-desc'>
                            <div className='top-cont-desc'>
                              <h2>Guitarra Amarela</h2>
                              <p>Descrição</p>
                            </div>
                            <img src={available} alt="" />
                        </div>
                        <div className='cont-right-desc'>
                            <h2>$2,995</h2>
                        </div>
                    </div>
                </div>

                <div className="card-product">
                    <img src={vermelho} alt="" id='img1'/>
                    <div className='desc-product'>
                        <div className='cont-left-desc'>
                            <div className='top-cont-desc'>
                              <h2>Guitarra Amarela</h2>
                              <p>Descrição</p>
                            </div>
                            <img src={available} alt="" />
                        </div>
                        <div className='cont-right-desc'>
                            <h2>$2,995</h2>
                        </div>
                    </div>
                </div>

                <div className="card-product">
                    <img src={marrom} alt="" id='img1'/>
                    <div className='desc-product'>
                        <div className='cont-left-desc'>
                            <div className='top-cont-desc'>
                              <h2>Guitarra Amarela</h2>
                              <p>Descrição</p>
                            </div>
                            <img src={available} alt="" />
                        </div>
                        <div className='cont-right-desc'>
                            <h2>$2,995</h2>
                        </div>
                    </div>
                </div>

            </div>
          </div>

            
          

        

      </section>
      
      
      
      </>
    );
  }