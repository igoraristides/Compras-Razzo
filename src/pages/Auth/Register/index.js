import React, { useRef, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import FadeIn from "react-fade-in";
import Link from "../../../components/Link";

import LogoImg from "../../../assets/logo-1.svg";

import { Grid } from "@material-ui/core";
import LogoImage from "../../../assets/logo-1.svg";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import { Scope } from "@unform/core";
import Input from "../../../components/Input";
import yupValidate from "../../../utils/yupValidate";
import createAccountSchema from "../../../validators/newAccount.schema";
import isCpfValid from "../../../utils/cpfValidate";

import { Heading, Text, Container, Content, Logo, FieldName } from "./styles";

import api from "../../../services/api";
import { toast } from "react-toastify";

const Register = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showCep, setShowCep] = useState({});
  const [enableSubmit, setEnableSubmit] = useState(false);

  let history = useHistory();

  const handleSubmit = async (formData) => {
    try {
      formRef.current.setErrors({});
      const { errors } = await yupValidate(createAccountSchema, formData);

      if (Object.keys(errors).length !== 0) {
        throw errors;
      }

      if (!isCpfValid(formData.cpf)) {
        const err = {
          cpf: "CPF inválido",
        };
        throw err;
      }

      setLoading(true);
      await api.post("/user", formData);

      toast.success("Conta criada com sucesso");

      history.push("/login");
    } catch (error) {
      formRef.current.setErrors(error);
      error.response
        ? toast.error(error.response.data.error[0])
        : toast.error("Verifique os campos do formulário");
    } finally {
      setLoading(false);
    }
  };

  const handleOnChange = () => {
    const {
      first_name,
      last_name,
      cpf,
      phone,
      email,
      password,
      confirmPassword,
      address,
    } = formRef.current.getData();

    setEnableSubmit(
      first_name.length !== 0 &&
        last_name.length !== 0 &&
        cpf.length !== 0 &&
        phone.length !== 0 &&
        email.length !== 0 &&
        password.length !== 0 &&
        confirmPassword.length !== 0 &&
        address.zipcode.length !== 0 &&
        address.street_name.length !== 0 &&
        address.street_number.length !== 0 &&
        address.neighborhood.length !== 0 &&
        address.city.length !== 0 &&
        address.state.length !== 0
    );
  };

  //eslint-disable-next-line react-hooks/exhaustive-deps
  const getCep = useCallback(async (event) => {
    let inputCepValue = event.target.value;
    let inputCepLength = inputCepValue.length;

    try {
      if (inputCepLength === 9) {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${inputCepValue}/json/`
        );
        setShowCep(data);
        setShowCep();
      }
    } catch (error) {
      console.error("Cep nao encontrado", error);
    }
  });

  return (
    <Container>
      <FadeIn>
        <Content>
          <Logo src={LogoImg} />
        </Content>
        <Form ref={formRef} onSubmit={handleSubmit} onChange={handleOnChange}>
          <Heading>Criar nova conta</Heading>
          <Text>Crie sua conta para começar a comprar.</Text>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                name="first_name"
                placeholder="Nome"
                variant="border"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                name="last_name"
                placeholder="Sobrenome"
                variant="border"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                name="cpf"
                placeholder="CPF"
                variant="border"
                mask="cpf"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                name="phone"
                mask="phone"
                placeholder="Telefone"
                variant="border"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                placeholder="E-mail"
                name="email"
                variant="border"
                fullWidth
                icon="email"
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="password"
                name="password"
                placeholder="Senha"
                variant="border"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar senha"
                variant="border"
                fullWidth
              />
            </Grid>
            <Scope path="address">
              <FieldName>
                <h5>Endereço</h5>
              </FieldName>
              <Grid item xs={12}>
                <Input
                  name="zipcode"
                  placeholder="CEP"
                  variant="border"
                  fullWidth
                  mask="zipcode"
                  onChange={getCep}
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  name="street_name"
                  placeholder="Rua"
                  variant="border"
                  fullWidth
                  value={showCep?.logradouro}
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  name="street_number"
                  placeholder="Número"
                  variant="border"
                  fullWidth
                  mask="zipcode"
                  className="input-number"
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  name="neighborhood"
                  placeholder="Bairro"
                  variant="border"
                  fullWidth
                  value={showCep?.bairro}
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  name="city"
                  placeholder="Cidade"
                  variant="border"
                  value={showCep?.localidade}
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  name="state"
                  placeholder="Estado"
                  variant="border"
                  value={showCep?.uf}
                />
              </Grid>
            </Scope>
            <Grid item xs={12}>
              <Button
                color="primary"
                loading={loading}
                type="submit"
                label="Cadastrar"
                disabled={!enableSubmit}
                fullWidth
              />
            </Grid>
          </Grid>
          <Link
            style={{ margin: "20px 0 20px 0" }}
            label="Voltar para o login"
            to="/login"
          />
        </Form>
      </FadeIn>
    </Container>
  );
};

export default Register;
