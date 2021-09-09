import React, { useRef } from "react";

import { Grid } from "@material-ui/core";

import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import useToast from "../../../hooks/useToast";
import api from "../../../services/api";
import yupValidate from "../../../utils/yupValidate";
import { updatePasswordSchema } from "../../../validators/auth.schema";

import { Container } from "./styles";

const ChangePassword = ({ history }) => {
  const formRef = useRef(null);

  const toast = useToast();

  const handleSubmit = async (formData) => {
    try {
      formRef.current.setErrors({});

      const { success, data, errors } = await yupValidate(
        updatePasswordSchema,
        formData
      );

      if (!success) {
        throw errors;
      }

      await api.put("/user/me/password", data);

      return toast.successToast("Atualização feita com sucesso.");
    } catch (error) {
      if (error.response) {
        toast.errorToast("Erro ao atualizar sua senha, tente novamente.");
      }
      return formRef.current.setErrors(error);
    }
  };

  return (
    <Container>
      <Form title="Alterar Senha" ref={formRef} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input
              type="password"
              name="current"
              placeholder="Senha Atual"
              variant="border"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              type="password"
              name="password"
              placeholder="Nova Senha"
              variant="border"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Input
              type="password"
              name="password_confirmation"
              placeholder="Confirmar nova senha"
              variant="border"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" label="Salvar" fullWidth type="submit" />
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};

export default ChangePassword;
