const INITIAL_STATE = {
  business: null,
  selectedBusiness: null,
  loading: false,
  errors: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@business/BUSINESS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case '@auth/SIGNOUT_REQUEST':
      return {
        ...state,
        business: null,
        selectedBusiness: null,
        loading: false,
        error: null,
      };

    case '@business/BUSINESS_SUCCESS': {
      return {
        ...state,
        business: action.payload,
        selectedBusiness: action.payload[0],
        loading: false,
        error: null,
      };
    }

    case '@business/SET_CURRENT_BUSINESS':
      return {
        ...state,
        selectedBusiness: action.payload,
        loading: false,
        error: null,
      };

    default:
      return { ...state };
  }
}
