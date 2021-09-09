import yup from "../libs/yup";

export const updateUserSchema = yup.object().shape({
  name: yup.string().required().label("Nome"),
  phone: yup.string().notRequired().label("Telefone"),
  email: yup.string().notRequired().label("E-mail"),
  cpf: yup.string().notRequired().label("CPF"),
  description: yup.string().notRequired().label("Sobre"),
});

export const createUserSchema = yup.object().shape({
  name: yup.string().required().label("Nome"),
  email: yup.string().email().required().label("E-mail"),
  password: yup.string().required().min(6).label("Senha"),
  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Senhas devem ser iguais")
    .label("Confirmar Senha"),
});
