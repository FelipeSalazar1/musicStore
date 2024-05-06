import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Scss/Produtos.scss'
import line from '../assets/Line.svg'
import available from '../assets/Chips.svg'
import amarelo from '../assets/gui-amarela.svg'
import vermelho from '../assets/gui-vermelha.svg'
import marrom from '../assets/gui-marrom.svg'
import caboAmarelo from '../assets/cabo-amarelo.svg'
import caboVerde from '../assets/cabo-verde.svg'
import pedaleira from '../assets/music.svg'

const ProductCard = ({ imgSrc, title, description, price, onEdit }) => (
  <div className="card-product">
    <img src={imgSrc} alt={title} className='img-product'/>
    <div className='desc-product'>
      <div className='cont-left-desc'>
        <div className='top-cont-desc'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <img src={available} alt="Available" />
      </div>
      <div className='cont-right-desc'>
        <h2>{price}</h2>
      </div>
    </div>
    <button onClick={onEdit}>Edit</button>
  </div>
);

export default function Produtos() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("senha");
    alert("saindo do sistema...")
    navigate("/");
  }

  const handleEdit = (product) => {
    console.log(`Editando produto: ${product}`);

  }

  return (
    <>
      <section className='produtos'>
        <button id='button-logout' onClick={handleLogout}>Logout</button>

        <div className="produtos-group1">
          <div id='tittle-produto'>
            <img src={line} alt="Line" />
            <h1>Lançamentos</h1>
          </div>
          <div id='produtos-new'>
            <ProductCard imgSrc={amarelo} title="Guitarra Amarela" description="Descrição" price="$2,995" />
            <ProductCard imgSrc={vermelho} title="Guitarra Vermelha" description="Descrição" price="$2,995" />
            <ProductCard imgSrc={marrom} title="Guitarra Marrom" description="Descrição" price="$2,995" />
          </div>
        </div>

        <div className="produtos-group1">
          <div id='tittle-produto'>
            <img src={line} alt="Line" />
            <h1>Popular Finds</h1>
          </div>
          <div id='produtos-new'>
            <ProductCard imgSrc={caboAmarelo} title="Cabo Amarelo" description="Descrição" price="$2,995" />
            <ProductCard imgSrc={caboVerde} title="Cabo Verde" description="Descrição" price="$2,995" />
            <ProductCard imgSrc={pedaleira} title="Pedaleira" description="Descrição" price="$2,995" />
          </div>
        </div>
      </section>
    </>
  );
}