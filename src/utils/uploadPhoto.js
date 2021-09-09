import api from "../services/api";

const sendFile = async (image, route) => {
  const data = new FormData();

  data.append("photo", image);

  try {
    const response = await api.post(route, data);

    return {
      success: true,
      data: response.data,
      errors: {},
    };
  } catch (error) {
    return {
      success: false,
      data: {},
      errors: error.data,
    };
  }
};

export default sendFile;
