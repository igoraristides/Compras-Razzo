/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";

import { Grid } from "@material-ui/core";
import FadeIn from "react-fade-in";

import LogoImg from "../../../assets/logo-1.svg";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import useToast from "../../../hooks/useToast";
import api from "../../../services/api";
import yupValidate from "../../../utils/yupValidate";
import { forgotPassword } from "../../../validators/auth.schema";

import { Container, Content, Logo, Heading } from "./styles";

const ForgotPassword = ({ history }) => {
  const formRef = useRef(null);
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    formRef.current.setErrors({});

    try {
      const { success, data, errors } = await yupValidate(
        forgotPassword,
        formData
      );

      if (!success) {
        throw errors;
      }
      setLoading(true);

      await api.post("/user/forgot", { ...data, device: "web" });

      toast.successToast(
        "Solicitação feita com sucesso, enviamos um email para recuperação da senha"
      );

      return history.push("/login");
    } catch (error) {
      if (error.response) {
        return toast.errorToast(
          "Erro ao tentar recuperar sua senha, tente novamente."
        );
      }
      return formRef.current.setErrors(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <FadeIn>
        <Content>
          <Logo src={LogoImg} />
        </Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Heading>Esqueci minha senha</Heading>
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
              <Button
                color="primary"
                type="submit"
                loading={loading}
                label="Recuperar senha"
                fullWidth
              />
            </Grid>
          </Grid>

          <Button
            color="primary"
            variant="link"
            label="Voltar para Login"
            fullWidth
            onClick={() => history.push("/login")}
          />
        </Form>
      </FadeIn>
    </Container>
  );
};

export default ForgotPassword;
