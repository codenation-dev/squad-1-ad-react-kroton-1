// Action Types

export const Types = {
  CREATE: 'user/CREATE',
  LOGIN: 'user/LOGIN',
  LOGOUT: 'user/LOGOUT',
  EDIT: 'user/EDIT',
};

// Reducer

const initialState = {
  isLogged: false,
  token: null,
  user: {},
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case Types.CREATE:
      return {
        ...state,
        // TODO - fazer a rotina de criação do usuário
      };

    case Types.EDIT:
      return {
        ...state,
        // TODO - fazer a rotina de edição do usuário
      };
    case Types.LOGIN:
      return {
        ...state,
        // TODO - fazer a rotina de login
      };
    case Types.LOGOUT:
      return {
        ...state,
        // TODO - fazer a rotina de logout
      };

    default:
      return state;
  }
}

// Action Creators

export const Creators = {
  createUser: ({ name, email, password }) => ({
    type: Types.CREATE,
    payload: { name, email, password },
  }),

  loginUser: ({ email, password }) => {
    return {
      type: Types.LOGIN,
      payload: { email, password },
    };
  },

  logoutUser: () => ({
    type: Types.LOGOUT,
  }),

  editUser: ({ id, name, email, password }) => ({
    type: Types.EDIT,
    payload: { id, name, email, password },
  }),
};
