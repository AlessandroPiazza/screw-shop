import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import { Container } from './styles';

export default function NewScrew() {
  const [product, setProduct] = useState([]);
  const [dimension, setDimension] = useState([]);
  const { id } = useParams();
  const [price, setPrice] = useState([0])

  useEffect(() => {
    async function loadDimension() {
      const response = await api.get(`/dimension/?id=${id}`);

      const data = response.data.map(dimension => ({
        ...dimension
      }));

      setDimension(data);
    }
    loadDimension();
  }, []);

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get(`/products/?id=${id}`);

      const data = response.data.map(product => ({
        ...product
      }));

      setProduct(data);
    }
    loadProduct();
  }, []);

  const schema = Yup.object().shape({
    title: Yup.string().required('Titulo é obrigatório'),
    price: Yup.number().typeError('Preço é obrigatório').min(0.001),
    image: Yup.string().required('Imagem é obrigatório'),
  })

  function handleSubmit({ title, price, image }) {
    try {
      api.post('products', {
        title,
        price,
        image
      })
      toast.success('Produto cadastrado com sucesso.');
    } catch (error) {
      toast.success({ error });
    }

  }

  return (
    <>
      <Container>

        {product.map(product => (
          <>
          <div className="hexagono">
            <img src={product.image} alt={product.title}></img>
          </div>


            <Form>
            <div>
              <label><strong>Descrição</strong></label>
              <input value={product.title} />
            </div>
            <div>
              <label><strong>Material</strong></label>
              <input value={product.material} />
            </div>
            <div>
              <label><strong>Tipo de Rosca</strong></label>
              <input value={product.threadType} />
            </div>
            <div>
              <label><strong>Rosca</strong></label>
              <input value={product.screwThread} />
            </div>
            <div>
              <label><strong>Classe</strong></label>
              <input value={product.class} />
            </div>
            <div>
              <label><strong>Acabamento</strong></label>
              <input value={product.workmanship} />
            </div>
            <button className="add">
              ADD DIMENSÕES
            </button>
            <button className="save">
              Salvar
            </button>

            </Form>
          </>
        ))}
        {dimension.map(dimension => (
          <Form>
            <div>
              <label><strong>SKU</strong></label>
              <input value={dimension.sku} />
            </div>
            <div>
              <label><strong>Diâmetro</strong></label>
              <input value={dimension.diameter} />
            </div>
            <div>
              <label><strong>Comprimento</strong></label>
              <input value={dimension.length} />
            </div>
            <div>
              <label><strong>Quantidade</strong></label>
              <input value={dimension.quantity} />
            </div>
            <div>
              <label><strong>Preço</strong></label>
              <input value={dimension.price} />
            </div>
            <button className="remove">
              Remover
            </button>
            <button className="save">
              Salvar
            </button>

          </Form>
        ))}
        {/*
      <Form schema={schema}  onSubmit={handleSubmit}>
      <h1>Adicionar Produto</h1>
      <div>
        <label><strong></strong>Descrição</label>
        <Input name="title" type="text" placeholder="Titulo do parafuso" />
      </div>
      <div>
        <label>Preço</label>
        <Input name="price" type="number" step="0.01" placeholder="Preço do parafuso" />
      </div>
      <div>
        <label>Imagem</label>
        <Input name="image" type="text" placeholder="imagem do parafuso" />
      </div>
        <button type="submit">Adicionar</button>
      </Form> */}
      </Container>
    </>
  );
}
