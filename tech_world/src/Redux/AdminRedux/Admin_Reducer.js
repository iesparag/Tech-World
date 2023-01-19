import {
  Admin_FAILURE,
  Admin_REQUEST,
  Admin_SUCCESS,
  AdminDelete_REQUEST,
  AdminDelete_FAILURE,
  AdminDelete_SUCCESS,
} from "./Admin_Types.js";

const initialState = {
  AdminData: [],
  totalPages: null,
  isLoading: false,
  isError: false,
  deletedID: null,
};

const Admin_reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Admin_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        AdminData: payload.products,
        totalPages: payload.totalPages,
      };
    }
    case Admin_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case Admin_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case AdminDelete_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case AdminDelete_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case AdminDelete_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    default: {
      return state;
    }
  }
};

export { Admin_reducer };
