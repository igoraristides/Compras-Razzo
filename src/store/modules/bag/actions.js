export const addProduct = (idProduct) => {
  return {
    type: 'ADD_PRODUCT',
    data: {
      idProduct
    },
  };
};

export const removeProduct = (idProduct) => {
  return {
    type: 'REMOVE_PRODUCT',
    data: {
      idProduct
    },
  };
};
