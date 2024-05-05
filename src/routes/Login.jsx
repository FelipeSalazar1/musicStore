import { useRef } from 'react';
import Produtos from './Produtos';
import '../Scss/Login.scss'

export default function Contato() {
  /* Hook- useRef ele retorna uma referencia a um elemento ou componentsem tem que ter que ser
  renderizado novamente*/
  const usuario = useRef();
  const senha = useRef();

  /*pegando os dados de usuario e senha e gravando na sessão */
  const getUsuario = sessionStorage.getItem('usuario');
  const getSenha = sessionStorage.getItem('senha');

  const handleSubmit = () => {
    if (usuario.current.value == 'Admin' && senha.current.value == '12345') {
      //criando um token de autenticação
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);

      sessionStorage.setItem('usuario', 'Admin');
      sessionStorage.setItem('senha', token);
    } else {
      alert('Usuario e senha Inválidos !!!');
    }
  };

  return (
    <section className="login">
      {getUsuario && getSenha ? (
        <Produtos/>
      ) : (
        <form onSubmit={handleSubmit} >
        <h1 className='tittle'>Sign In</h1>
          <p>
            USUÁRIO <br/>
            <input type="text" placeholder="Digite seu Usuário" ref={usuario} />
          </p>
          <p>
            SENHA <br/>
            <input type="password" placeholder="Digite sua senha" ref={senha} />
          </p>
          
          <button className="btn_enter" type="button">
            <strong>ENTRAR</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
          
        </form>
      )}
    </section>
    );
  }