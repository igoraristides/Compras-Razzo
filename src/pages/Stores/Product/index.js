import React, { useEffect, useState, useRef } from "react";
import api from "../../../services/api";
import Grid from "@material-ui/core/Grid";
import { Pagination } from "@material-ui/lab";
import { Container, Store } from "./styles";
import Link from "../../../components/Link";
import CardCart from "../../../components/Card/CardCart";
import CardGrid from "../../../components/Card/CardGrid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
  const formRef = useRef(null);
  
  const [business, setBusiness] = useState({});
  const [products, setProducts] = useState({ data: [] });

  let { id } = useParams();

  const dispatch = useDispatch(); 

  const loadingProducts = async (id) => {
    const { data: business } = await api.get(`/business/${id}`);
    setBusiness(business);

    const { data: product } = await api.get(`/product/business/${id}`);
    setProducts(product);
  };

  useEffect(() => {
    loadingProducts(id);
  }, [id]);


  return (
    <Container>
      <Store>
      <CardGrid data={business} />
      </Store>
      <Grid container spacing={3}>
        {products.data.map((product) => (
          <Grid key={product._id} item xs={12} md={4}>
            <CardCart data={product}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
