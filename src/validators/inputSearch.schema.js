import yup from "../libs/yup";

const schema = yup.object().shape({
  search: yup.string().label("Busca invalida"),
});

export default schema;
