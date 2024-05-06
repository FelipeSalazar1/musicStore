import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Scss/Produtos.scss';
import line from '../assets/Line.svg';
import available from '../assets/Chips.svg';
import amarelo from '../assets/gui-amarela.svg';
import vermelho from '../assets/gui-vermelha.svg';
import marrom from '../assets/gui-marrom.svg';
import caboAmarelo from '../assets/cabo-amarelo.svg';
import caboVerde from '../assets/cabo-verde.svg';
import pedaleira from '../assets/music.svg';

const ProductTable = ({ products, onEdit, onDelete }) => (
  <table className="product-table">
    <thead>
      <tr>
        <th>Image</th>
        <th>Title</th>
        <th>Description</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product, index) => (
        <tr key={index}>
          <td><img src={product.imgSrc} alt={product.title} className='img-product'/></td>
          <td>{product.title}</td>
          <td>{product.description}</td>
          <td>{product.price}</td>
          <td>
            <button onClick={() => onEdit({ ...product })}>Edit</button>
            <button onClick={() => onDelete(product)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default function Produtos() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editPopupOpen, setEditPopupOpen] = useState(false);
  const [products, setProducts] = useState([
    { imgSrc: amarelo, title: "Guitarra Amarela", description: "Descrição", price: "$2,995" },
    { imgSrc: vermelho, title: "Guitarra Vermelha", description: "Descrição", price: "$2,995" },
    { imgSrc: marrom, title: "Guitarra Marrom", description: "Descrição", price: "$2,995" },
    { imgSrc: caboAmarelo, title: "Cabo Amarelo", description: "Descrição", price: "$2,995" },
    { imgSrc: caboVerde, title: "Cabo Verde", description: "Descrição", price: "$2,995" },
    { imgSrc: pedaleira, title: "Pedaleira", description: "Descrição", price: "$2,995" }
  ]);

  const handleLogout = () => {
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("senha");
    alert("saindo do sistema...");
    navigate("/");
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    console.log("Selected product:", product);
    setEditPopupOpen(true);
  };
  

  const handleDelete = (product) => {
    setProducts(prevProducts => prevProducts.filter(p => p !== product));
  };

  const handleCloseEditPopup = () => {
    setEditPopupOpen(false);
  };

  const handleSave = () => {
    console.log("Save button clicked");
    if (selectedProduct) {
      setProducts(prevProducts =>
        prevProducts.map(p => (p === selectedProduct ? { ...selectedProduct } : p))
      );
      setEditPopupOpen(false);
    }
  };
  
  

  return (
    <>
      <section className='produtos'>
        <button id='button-logout' onClick={handleLogout}>Logout</button>

        <div className="produtos-group1">
          <div id='tittle-produto'>
            <img src={line} alt="Line" />
            <h1>Products</h1>
          </div>
          <div id='produtos-new'>
            <ProductTable products={products} onEdit={handleEdit} onDelete={handleDelete} />
          </div>
        </div>
      </section>
      {editPopupOpen && (
        <div className="edit-popup-overlay">
          <div className="edit-popup">
            <h2>Edit Product</h2>
            <label>Title:</label>
            <input 
              type="text" 
              name="title" 
              value={selectedProduct.title} 
              onChange={(e) => setSelectedProduct(prevProduct => ({ ...prevProduct, title: e.target.value }))} 
            />
            <label>Description:</label>
            <input 
              type="text" 
              name="description" 
              value={selectedProduct.description} 
              onChange={(e) => setSelectedProduct(prevProduct => ({ ...prevProduct, description: e.target.value }))} 
            />
            <label>Price:</label>
            <input 
              type="text" 
              name="price" 
              value={selectedProduct.price} 
              onChange={(e) => setSelectedProduct(prevProduct => ({ ...prevProduct, price: e.target.value }))} 
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCloseEditPopup}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}
