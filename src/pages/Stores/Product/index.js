import React, { useEffect, useState, useRef } from "react";
import api from "../../../services/api";
import Grid from "@material-ui/core/Grid";
import { Pagination } from "@material-ui/lab";
import { Container } from "./styles";
import Link from "../../../components/Link";
import Card from "../../../components/Card/CardCart";
import { useParams } from "react-router-dom";

const Products = () => {
  const formRef = useRef(null);
  const [products, setProducts] = useState({ data: [] });
  const [loading, setLoading] = useState();
  let  { id } = useParams();
  const loadingProducts = async (id) => {
    const { data } = await api.get(`/product/business/${id}`);
    setProducts(data);
  };

  useEffect(() => {
    loadingProducts(id);
  }, [id]);

  return (
    <Container>
      <Grid container spacing={3}>
        {products.data.map((product) => (
          <Grid key={product._id} item xs={12} md={4}>
            <Card data={product}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
