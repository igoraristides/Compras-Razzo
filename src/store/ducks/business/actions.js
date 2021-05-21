export const businessRequest = () => {
  return {
    type: '@business/BUSINESS_REQUEST',
  };
};

export const businessSuccess = (business) => {
  return {
    type: '@business/BUSINESS_SUCCESS',
    payload: business,
  };
};

export const setCurrentBusiness = (business) => {
  return {
    type: '@business/SET_CURRENT_BUSINESS',
    payload: business,
  };
};
