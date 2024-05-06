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
        <th>Imagem</th>
        <th>Titulo</th>
        <th>Description</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {products.map(product => (
        <tr key={product.title}>
          <td><img src={product.imgSrc} alt={product.title} className='img-product'/></td>
          <td>{product.title}</td>
          <td>{product.description}</td>
          <td>{product.price}</td>
          <td>
            <button onClick={() => onEdit(product)}>Edit</button>
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
  const [addPopupOpen, setAddPopupOpen] = useState(false);
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
    setEditPopupOpen(true);
  };

  const handleDelete = (product) => {
    setProducts(prevProducts => prevProducts.filter(p => p !== product));
  };

  const handleCloseEditPopup = () => {
    setEditPopupOpen(false);
  };

  const handleAdd = () => {
    setAddPopupOpen(true);
  };

  const handleCloseAddPopup = () => {
    setAddPopupOpen(false);
  };

  const handleSave = (newProduct) => {
    setProducts(prevProducts => [...prevProducts, newProduct]);
    setAddPopupOpen(false);
  };

  const handleUpdate = () => {
    // Encontra o índice do produto na lista
    const index = products.findIndex(p => p.title === selectedProduct.title);

    // Se o produto não for encontrado, retorna
    if (index === -1) {
      console.error('Produto não encontrado na lista.');
      return;
    }

    // Cria uma cópia do produto selecionado
    const updatedProduct = { ...selectedProduct };

    // Atualiza os campos do produto
    updatedProduct.title = document.getElementById('edit-title').value;
    updatedProduct.description = document.getElementById('edit-description').value;
    updatedProduct.price = document.getElementById('edit-price').value;

    // Cria uma cópia da lista de produtos
    const updatedProducts = [...products];

    // Substitui o produto antigo pelo produto atualizado
    updatedProducts[index] = updatedProduct;

    // Atualiza o estado com a nova lista de produtos
    setProducts(updatedProducts);

    // Fecha o popup de edição
    setEditPopupOpen(false);
  };

  return (
    <>
      <section className='produtos'>
        <button id='button-logout' onClick={handleLogout}>Logout</button>
        <button onClick={handleAdd} id='button-logout'>Adicionar Produto</button>
        <div className="produtos-group1">
          <div id='tittle-produto'>
            <img src={line} alt="Line" />
            <h1>Produtos</h1>
          </div>
          <div id='produtos-new'>
            <ProductTable products={products} onEdit={handleEdit} onDelete={handleDelete} />
          </div>
        </div>
      </section>
      {editPopupOpen && (
        <div className="edit-popup-overlay">
          <div className="edit-popup">
            <h2>Editar Produto</h2>
            <label>Titulo:</label>
            <input 
              type="text" 
              id="edit-title" 
              value={selectedProduct.title} 
              onChange={(e) => setSelectedProduct(prevProduct => ({ ...prevProduct, title: e.target.value }))} 
            />
            <label>Descrição</label>
            <input 
              type="text" 
              id="edit-description" 
              value={selectedProduct.description} 
              onChange={(e) => setSelectedProduct(prevProduct => ({ ...prevProduct, description: e.target.value }))} 
            />
            <label>Preço:</label>
            <input 
              type="text" 
              id="edit-price" 
              value={selectedProduct.price} 
              onChange={(e) => setSelectedProduct(prevProduct => ({ ...prevProduct, price: e.target.value }))} 
            />
            <button onClick={handleUpdate}>Atualizar</button>
            <button onClick={handleCloseEditPopup}>Cancelar</button>
          </div>
        </div>
      )}
      {addPopupOpen && (
        <div className="edit-popup-overlay">
          <div className="edit-popup">
            <h2>Add Product</h2>
            <label>Title:</label>
            <input type="text" id="title" />
            <label>Description:</label>
            <input type="text" id="description" />
            <label>Price:</label>
            <input type="text" id="price" />
            <button onClick={() => handleSave({
              imgSrc: "", // Coloque a URL da imagem aqui
              title: document.getElementById('title').value,
              description: document.getElementById('description').value,
              price: document.getElementById('price').value
            })}>Save</button>
            <button onClick={handleCloseAddPopup}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}
