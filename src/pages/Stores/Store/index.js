import React, { useEffect, useState, useRef } from "react";

import api from "../../../services/api";
import { Pagination } from "@material-ui/lab";
import Loader from "react-loader-spinner";
import Cart from "../../../components/Cart";
import Links from "../../../components/Links";
import Card from "../../../components/Card/CardGrid";
import Grid from "@material-ui/core/Grid";
import { Container, Content, Section } from "./styles";
import InputSearch from "../../../components/InputSearch";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Stores = () => {
  const [business, setBusiness] = useState({ data: [] });
  const user = useSelector((state) => state.user);
  console.log(user);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const loadingBusiness = async () => {
    setLoading(true);
    const { data } = await api.get("/business");
    setBusiness(data);

    setLoading(false);
  };

  useEffect(() => {
    loadingBusiness(setBusiness);
  }, []);

  return (
    <>
      <Links />
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Container>
            <InputSearch
              name="search"
              placeholder="Busque por um estabelecimento"
              maxWidth={300}
            />
            <Section>
              {loading ? (
                <Loader type="Bars" color="#249CF2" height={50} width={50} />
              ) : (
                <Grid container spacing={3}>
                  {business.data.map((store) => (
                    <Grid key={store._id} item xs={12} md={4}>
                      <Link to={`/product/business/${store._id}`}>
                        <Card data={store} />
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Section>
            <Content>
              <Pagination count={1} size="small" />
            </Content>
          </Container>
        </Grid>
        <Grid item xs={12} md={4}>
          <Cart cart />
        </Grid>
      </Grid>
    </>
  );
};

export default Stores;
