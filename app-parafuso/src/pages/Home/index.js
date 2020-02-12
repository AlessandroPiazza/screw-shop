import React, { useState, useEffect } from 'react';
import { MdRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { ProductList } from './styles';

export default function Home() {

  const [products, setProducts ] = useState([]);

  useEffect(() => {
    async function loadProducts(){
      const  response = await api.get('products');

      const data = response.data.map(product => ({
        ... product,
        priceFormated: formatPrice(product.price)
    }));

      setProducts(data);
    }
    loadProducts();
  }, []);

    return (

          <ProductList>
            <ul>
              { products.map(product => (
                <li key={product.id}>
                  <img src={product.image} alt={product.title}></img>
                  
                    <strong>{product.title}</strong>
                    <span>{product.priceFormated}</span>
                    <Link   to={`products/${product.id}`}>                    
                        <div>
                          <MdRemoveRedEye size={16} color="#fff" /> 
                        </div>
                        
                        <span>Conferir</span>
                    </Link>
              </li>
              ))}
            </ul>
          </ProductList>
    );
}
