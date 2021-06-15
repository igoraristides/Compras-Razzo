const INITIAL_STATE = {
  bag: [],
};
export const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      let { productId, addon } = action.data;

      const stateCopy = [...state];

      const productIndex = stateCopy.findIndex(({ _id }) => _id === productId);

      stateCopy[productIndex].addons.push({ ...addon, quantity: 1 });

      return stateCopy;
    }

    case 'REMOVE_PRODUCT': {

      let { productId, addonId } = action.data;

      const stateCopy = [...state];

      const productIndex = stateCopy.findIndex(({ _id }) => _id === productId);

      const updatedAddons = stateCopy[productIndex].addons.filter(
        (addon) => addon._id !== addonId
      );

      stateCopy[productIndex].addons = updatedAddons;

      return stateCopy;
    }

    case "UPDATE_PRODUCT_QUANTITY": {
      let { addons, quantity, indexProduct } = action.data;

      const stateCopy = [...state.bag];

      stateCopy[indexProduct].addons = addons;
      stateCopy[indexProduct].quantity = quantity;

      return {
        ...state,
        bag: stateCopy,
      };
    }
  }
  return state;
};
