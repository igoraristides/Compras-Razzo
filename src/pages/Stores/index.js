import React, { useEffect, useState, useRef } from 'react';

//import FadeIn from 'react-fade-in';
//import { useLocation } from 'react-router-dom';

import api from '../../services/api';
import { Pagination } from '@material-ui/lab';

import Card from '../../components/Card/CardGrid'
import Grid from '@material-ui/core/Grid';
import {
  SearchContainer,
  Container,
} from './styles';



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