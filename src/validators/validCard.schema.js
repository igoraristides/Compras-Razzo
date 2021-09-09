import yup from "../libs/yup";

const schema = yup.object().shape({
  CardNumber: yup.string().required().label("Numero do cartão"),
  Holder: yup.string().required().label("Nome"),
  ExpirationDate: yup
    .string()
    .min(7)
    .max(7)
    .required()
    .label("Data de validade"),
  SecurityCode: yup.string().max(3).max(3).required().label("cvv"),
  main: yup.boolean(),
});

export default schema;
