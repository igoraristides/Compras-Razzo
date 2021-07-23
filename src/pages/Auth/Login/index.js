import React, { useRef } from "react";

import { Grid } from "@material-ui/core";
import FadeIn from "react-fade-in";
import { useSelector, useDispatch } from "react-redux";

import LogoImg from "../../../assets/logo-1.svg";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Link from "../../../components/Link";
import LoadingModal from "../../../components/LoadingModal";
import { Creators as AuthActions } from "../../../store/ducks/auth";
import yupValidate from "../../../utils/yupValidate";
import { loginSchema } from "../../../validators/auth.schema";

import { Container, Content, Logo, Heading } from "./styles";

const Login = ({ history }) => {
  const formRef = useRef(null);
  const loadingRef = useRef(null);
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);

  const handleSubmit = async (formData) => {
    loadingRef.current.open();

    formRef.current.setErrors({});

    try {
      const { success, data, errors } = await yupValidate(
        loginSchema,
        formData
      );

      if (!success) {
        throw errors;
      }
      const { email, password } = data;

      dispatch(AuthActions.authSignInRequest(email, password));
    } catch (error) {
      formRef.current.setErrors(error);
    }

    loadingRef.current.close();
  };

  return (
    <Container>
      <FadeIn>
        <Content>
          <Logo src={LogoImg} />
        </Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Heading>Entrar</Heading>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                name="email"
                placeholder="E-mail"
                variant="border"
                fullWidth
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
          </Grid>
          <Link
            style={{ margin: "20px 0 20px 0" }}
            label="Esqueci minha senha"
            to="/forgot-password"
          />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                color="primary"
                type="submit"
                loading={loading}
                label="Login"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="primary"
                variant="outline"
                label="Criar conta"
                fullWidth
                onClick={() => history.push("/register")}
              />
            </Grid>
          </Grid>
        </Form>
      </FadeIn>
      <LoadingModal ref={loadingRef} />
    </Container>
  );
};

export default Login;
