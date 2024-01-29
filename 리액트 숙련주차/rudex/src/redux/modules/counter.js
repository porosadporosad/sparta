const initialState = {
  number: 0,
};

const PLUS_ONE = "counter/PLUS_ONE";
const PLUS_N = "counter/PLUS_N";

export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload: payload,
  };
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1,
      };
    case PLUS_N:
      return {
        number: state.number + action.payload,
      };
    default:
      return state;
  }
};

export default counter;
