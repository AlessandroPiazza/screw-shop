import React, { useState, useEffect } from 'react';
import { MdRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { ProductList } from './styles';
import spanner from '../../assets/images/spanner.svg'
export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormated: formatPrice(product.price)
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  return (

    <ProductList>
      <div class="title">
        <h1>Parafusos Sextravado</h1>
        <p>Utilizando em máquinas e equipamentos industriais</p>
      </div>
      <ul>

        <li>
          <button  >

            <Link to={'newScrew'}><h1>+</h1></Link>
          </button>
        </li>
        {products.map(product => (
          <Link to={`newScrew/${product.id}`}>
            <li key={product.id}>
              <img src={product.image} alt={product.title}></img>
              <strong>{product.title}</strong>
              <span>{product.priceFormated}</span>
              <div>
                <img src={spanner}></img>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </ProductList>
  );
}
