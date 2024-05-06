import React, { useState } from 'react';
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

const EditPopup = ({ product, onClose }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Aqui você pode implementar a lógica para salvar as alterações do produto
    console.log("Salvando alterações:", editedProduct);
    onClose();
  };

  return (
    <div className="edit-popup">
      <h2>Edit Product</h2>
      <label>Title:</label>
      <input type="text" name="title" value={editedProduct.title} onChange={handleChange} />
      <label>Description:</label>
      <input type="text" name="description" value={editedProduct.description} onChange={handleChange} />
      <label>Price:</label>
      <input type="text" name="price" value={editedProduct.price} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default function Produtos() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editPopupOpen, setEditPopupOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("senha");
    alert("saindo do sistema...")
    navigate("/");
  }

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditPopupOpen(true);
  }

  const handleCloseEditPopup = () => {
    setEditPopupOpen(false);
  };

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
            <ProductCard imgSrc={amarelo} title="Guitarra Amarela" description="Descrição" price="$2,995" onEdit={() => handleEdit("Guitarra Amarela")} />
            <ProductCard imgSrc={vermelho} title="Guitarra Vermelha" description="Descrição" price="$2,995" onEdit={() => handleEdit("Guitarra Vermelha")} />
            <ProductCard imgSrc={marrom} title="Guitarra Marrom" description="Descrição" price="$2,995" onEdit={() => handleEdit("Guitarra Marrom")} />
          </div>
        </div>

        <div className="produtos-group1">
          <div id='tittle-produto'>
            <img src={line} alt="Line" />
            <h1>Popular Finds</h1>
          </div>
          <div id='produtos-new'>
            <ProductCard imgSrc={caboAmarelo} title="Cabo Amarelo" description="Descrição" price="$2,995" onEdit={() => handleEdit("Cabo Amarelo")} />
            <ProductCard imgSrc={caboVerde} title="Cabo Verde" description="Descrição" price="$2,995" onEdit={() => handleEdit("Cabo Verde")} />
            <ProductCard imgSrc={pedaleira} title="Pedaleira" description="Descrição" price="$2,995" onEdit={() => handleEdit("Pedaleira")} />
          </div>
        </div>
      </section>
      {editPopupOpen && (
        <div className="edit-popup-overlay">
          <EditPopup product={selectedProduct} onClose={handleCloseEditPopup} />
        </div>
      )}
    </>
  );
}
