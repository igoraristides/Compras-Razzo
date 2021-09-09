import React, { useEffect, useState, useRef } from "react";

import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import FileInput from "../../components/Input/File";
import Textarea from "../../components/Input/Textarea";
import ModalChangePassword from "../../components/Modals/ModalChangePassword";
import useToast from "../../hooks/useToast";
import api from "../../services/api";
import { Creators as UserActions } from "../../store/ducks/user";
import cpfValidate from "../../utils/cpfValidate";
import uploadPhoto from "../../utils/uploadPhoto";
import yupValidate from "../../utils/yupValidate";
import { updateUserSchema } from "../../validators/user.schema";
import ChangePassword from "../Auth/ChangePassword";

import {
  Container,
  Title,
  PhotoContent,
  Row,
  Card,
  Column,
  Buttons,
  DirButton,
} from "./styles";

const Profile = ({ history }) => {
  const formRef = useRef(null);
  const modalChangePassword = useRef(null);
  // const [initialData, setInitialData] = useState({});

  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);

  console.log(user);
  const toast = useToast();

  const handleProfilePhoto = async (image) => {
    const { success, error, data } = await uploadPhoto(image, "/user/me/photo");

    if (!success) {
      return toast.errorToast("Erro ao fazer upload de foto.");
    }
  };
  const dispatch = useDispatch();

  const handleSubmit = async (formData) => {
    try {
      formRef.current.setErrors({});
      setLoading(true);

      const { success, data, errors } = await yupValidate(
        updateUserSchema,
        formData
      );

      if (!success) {
        throw errors;
      }

      const { data: response } = await api.put("user/me", data);

      if (formData.photo) {
        await handleProfilePhoto(formData.photo);
      }

      dispatch(UserActions.setUser(response));
      return toast.successToast("Atualização feita com sucesso.");
    } catch (error) {
      if (error.response) {
        toast.errorToast(
          "Erro ao atualizar suas informações, tente novamente."
        );
      }
      return formRef.current.setErrors(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Editar meu perfil</Title>
      <Card>
        <Form
          ref={formRef}
          initialData={{
            ...user,
          }}
          onSubmit={handleSubmit}
        >
          <Row>
            <PhotoContent>
              <FileInput name="photo" widthImage={150} heightImage={150} />
            </PhotoContent>
            <Column>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Input name="name" placeholder="Nome" label="Nome" />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Input
                    noBorder
                    name="email"
                    placeholder="Email"
                    label="E-mail"
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Input
                    noBorder
                    name="phone"
                    mask="cell"
                    placeholder="(00) 00000-0000"
                    label="Telefone"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Input
                    noBorder
                    name="cpf"
                    placeholder=""
                    label="CPF"
                    mask="cpf"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Textarea name="description" label="Sobre" />
                </Grid>
              </Grid>
              <DirButton>
                <Buttons>
                  <Button
                    label="Alterar minha senha"
                    variant="button"
                    color="changeP"
                    height={36}
                    size="default"
                    onClick={() => modalChangePassword.current.open()}
                  />
                </Buttons>
                <ModalChangePassword modalRef={modalChangePassword}>
                  <ChangePassword modalRef={modalChangePassword} />
                </ModalChangePassword>
                <Buttons>
                  <Button
                    label="Salvar"
                    loading={loading}
                    color="primary"
                    size="default"
                    height={36}
                    fullWidth
                    type="submit"
                  />
                </Buttons>
              </DirButton>
            </Column>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Profile;
