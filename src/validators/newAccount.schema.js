import { ref } from "yup";
import yup from "../libs/yup";

const schema = yup.object().shape({
  name: yup.string().required().label("Nome"),
  cpf: yup.string().required().label("CPF"),
  phone: yup.string().required().label("Telefone"),
  email: yup.string().email().required().label("E-mail"),
  password: yup.string().min(6).required().label("Senha"),
  confirmPassword: yup
    .string()
    .oneOf([ref("password"), null], "As senhas precisam combinar")
    .min(6)
    .required()
    .label("Confirmar senha"),
  address: yup.object().shape({
    zipcode: yup.string().required().label("CEP"),
    street_name: yup.string().required().label("Rua"),
    street_number: yup.number().required().label("Numero"),
    neighborhood: yup.string().required().label("Cidade"),
    city: yup.string().required().label("Cidade"),
    state: yup
      .string()
      .required()
      .label("Estado")
      .max(2, "Digite apenas a sigla do seu estado"),
  }),
});

export default schema;
