/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'userMarker/ADD_REQUEST',
  ADD_SUCCESS: 'userMarker/ADD_SUCCESS',
  REMOVE_USER: 'userMarker/REMOVE_USER',
  ADD_FAILURE: 'userMarker/ADD_FAILURE'
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
  data: [],
  error: null,
  sucess: null
};
export default function userMarker(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_SUCCESS:
      return {
        error: false,
        success: true,
        data: [...state.data, action.payload.data]
      };

    case Types.REMOVE_USER:
      return { data: action.payload };

    case Types.ADD_FAILURE:
      return {
        success: false,
        data: [...state.data],
        error: action.payload.error
      };

    default:
      return state;
  }
}

/**
 * ACTIONS
 */

export const Creators = {
  addInputRequest: userData => ({
    type: Types.ADD_REQUEST,
    payload: userData
  }),

  addAvatarToMapSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  removeAvatar: data => ({
    type: Types.REMOVE_USER,
    payload: data
  }),

  addAvatarFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  })
};
