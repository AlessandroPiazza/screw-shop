import  React, { useState,useEffect }  from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import api from '../../services/api';
import { Container } from './styles';

export default function CarouselComponent() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);
  return (
    <div class="carousel-wrapper">
    <Carousel>
    {products.map(product => (
      <div>

        <img  src={product.image} alt={product.title}></img>
      </div>
        ))}
    </Carousel>
    </ div>
  );
}
