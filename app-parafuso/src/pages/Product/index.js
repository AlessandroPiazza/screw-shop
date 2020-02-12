import React, { useState, useEffect } from 'react';
import {useParams}  from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { Container } from './styles';

export default function Product() {
    const [product, setProduct] = useState([]);
    const { id }    = useParams();

    useEffect(() => {
        async function loadProduct(){
          const  response = await api.get(`/products/?id=${id}`);
    
          const data = response.data.map(product => ({
            ... product,
            priceFormated: formatPrice(product.price)
        }));
    
          setProduct(data);
        }
        loadProduct();
      }, []);
    
  return (
      
   <Container>

       { product.map(product =>(
           <div  key={product.id}>
            <img src={product.image} alt={product.title}></img>
                <section>
                    <strong>{product.title}</strong>
           
                    <span>{product.priceFormated}</span>
                   
                    <div>
                        <div>
                        <p>CEP</p>
                        <Form>
                            <Input name="cep" type="number" placeholder="00000-000" />
                            <button>
                                <span>Consultar Frete</span>
                            </button>
                            <button><span>Comprar</span></button>
                        </Form>   
                        </div>
                    </div>
                </section>
           </div>
  ))}
  
   </Container>
  );
}
