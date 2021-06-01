import React, { useEffect, useState, useRef } from 'react';

//import FadeIn from 'react-fade-in';
//import { useLocation } from 'react-router-dom';

import api from '../../../services/api';
import { Pagination } from '@material-ui/lab';

import Card from '../../../components/Card/CardGrid'
import Grid from '@material-ui/core/Grid';
import { Container } from './styles';
import Input from '../../../components/Input';
import Form from '../../../components/Form';
import Link from '../../../components/Link';


const Stores = () => {
  const formRef = useRef(null);
  const [business, setBusiness] = useState({ data: [] });
  
  const loadingBusiness = async () => {
    const { data } = await api.get('/business');
    setBusiness(data);
  };
  console.log(business);
  useEffect(() => {
    loadingBusiness(setBusiness);
  }, []);
  return (
    <Container>
        <Form width={350} ref={formRef}>
        <Input
          name="search"
          placeholder="Busque por um produto"
          variant="border"
          icon = "search"
          fullWidth

        />
        </Form>
      <Grid container spacing={3}>
        {business.data.map((store) => 
          <Grid key={store._id} item xs={12} md = {4}>
            <Card data={store}/>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Stores;

//icon="search"

    //        <Link
          //      key= "/product/business/${id}"
            //    to= "/product/business/${id}"
            //    className="link"
          //  >
            //  <Card data={store}/>
          //  </Link>
            
            