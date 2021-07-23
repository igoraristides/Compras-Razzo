import React, { useEffect, useState, useRef } from "react";
import api from "../../../services/api";
import Grid from "@material-ui/core/Grid";
import { Container, Store, Content } from "./styles";
import { Pagination } from "@material-ui/lab";
import Link from "../../../components/Link";
import CardCart from "../../../components/Card/CardCart";
import CardGrid from "../../../components/Card/CardGrid";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";

const Products = () => {
  const [business, setBusiness] = useState({});
  const [products, setProducts] = useState({ data: [] });
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

  let { id } = useParams();

  const loadingProducts = async (id) => {
    setLoading(true);

    const { data: business } = await api.get(`/business/${id}`);
    setBusiness(business);

    const { data: product } = await api.get(`/product/business/${id}`);
    setProducts(product);

    setLoading(false);
  };

  useEffect(() => {
    loadingProducts(id);
  }, [id]);

  return (
    <Container>
      {loading ? (
        <Loader type="Bars" color="#249CF2" height={50} width={50} />
      ) : (
        <>
          <Store>
            <CardGrid data={business} />
          </Store>
          <Grid container spacing={3}>
            {products.data.map((product) => (
              <Grid key={product._id} item xs={12} md={4}>
                <CardCart data={product} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
      <Content>
        <Pagination count={1} size="small" />
      </Content>
    </Container>
  );
};

export default Products;
