import React, { useState, useEffect, useRef } from "react";

import { Grid } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import CompletionCart from "../../components/Cart/CompletionCart";
import Button from "../../components/Button";
import Cart from "../../components/Cart";
import Details from "../../components/Card/FCard/Details";
import { Container, Header, Card, PageHeader, Info } from "./styles";

const Order = () => {
  const { id } = useParams();
  const history = useHistory();
  const modalEditOrder = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [order, setOrder] = useState();

  return (
    <Container>
      <PageHeader.TitlePage>Concluindo Compra...</PageHeader.TitlePage>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <CompletionCart cart />
        </Grid>
        <Grid item xs={4}>
          <Details />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Order;
