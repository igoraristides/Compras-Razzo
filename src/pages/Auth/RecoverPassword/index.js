/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";

import { Grid } from "@material-ui/core";
import FadeIn from "react-fade-in";
import { useParams } from "react-router-dom";

import LogoImg from "../../../assets/logo-1.svg";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import useToast from "../../../hooks/useToast";
import api from "../../../services/api";
import yupValidate from "../../../utils/yupValidate";
import { recoverySchema } from "../../../validators/auth.schema";

import { Container, Content, Logo, Heading } from "./styles";

const RecoverPassword = ({ history }) => {
  const formRef = useRef(null);
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const { token } = useParams();

  const handleSubmit = async (formData) => {
    formRef.current.setErrors({});

    try {
      const { success, data, errors } = await yupValidate(
        recoverySchema,
        formData
      );

      if (!success) throw errors;

      const { password } = data;

      setLoading(true);
      await api.post("/user/recover", { password, token });

      toast.successToast("Sua senha foi atualizada com sucesso.");

      return history.push("/login");
    } catch (error) {
      if (error.response) {
        return toast.errorToast(
          "Erro ao tentar atualizar sua senha, tente novamente."
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
          <Heading>Alterar Senha</Heading>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                name="password"
                type="password"
                placeholder="Nova senha"
                variant="border"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                name="password_confirmation"
                type="password"
                placeholder="Confirme a nova senha"
                variant="border"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="primary"
                type="submit"
                loading={loading}
                label="Alterar senha"
                fullWidth
              />
            </Grid>
          </Grid>
        </Form>
      </FadeIn>
    </Container>
  );
};

export default RecoverPassword;
