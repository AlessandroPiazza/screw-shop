import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import { Container } from './styles';

export default function NewScrew() {

  const [price, setPrice] = useState([0])

  const schema = Yup.object().shape({
    title: Yup.string().required('Titulo é obrigatório'),
    price: Yup.number().typeError('Preço é obrigatório').min(0.001),
    image: Yup.string().required('Imagem é obrigatório'),
  })
  
  function handleSubmit({ title, price, image }){
    try {
      api.post('products',{
        title,
        price,
        image
      })
      toast.success('Produto cadastrado com sucesso.');
    } catch (error) {
      toast.success({error});
    }
    
  }
  
  return (
    <>
    <Container>
      
      <Form schema={schema}  onSubmit={handleSubmit}>
      <h1>Adicionar Produto</h1>
      <div>
        <label>Descrição</label>
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
      </Form>
    </Container>
  </>
  );
}
