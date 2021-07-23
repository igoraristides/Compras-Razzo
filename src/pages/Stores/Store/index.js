import React, { useEffect, useState, useRef } from "react";

import api from "../../../services/api";
import { Pagination } from "@material-ui/lab";
import Loader from "react-loader-spinner";

import Card from "../../../components/Card/CardGrid";
import Grid from "@material-ui/core/Grid";
import { Container, Content, Section } from "./styles";
import Input from "../../../components/Input";
import Form from "../../../components/Form";
import { Link } from "react-router-dom";

const Stores = () => {
  const [business, setBusiness] = useState({ data: [] });
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
    <Container>
      <Form width={350} ref={formRef}>
        <Input
          name="search"
          placeholder="Busque por um estabelecimento"
          variant="border"
          icon="search"
          fullWidth
        />
      </Form>
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
  );
};

export default Stores;
