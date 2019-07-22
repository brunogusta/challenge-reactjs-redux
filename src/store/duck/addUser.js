/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'addAvatar/ADD_REQUEST',
  ADD_SUCCESS: 'addAvatar/ADD_SUCCESS'
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
  data: []
};
export default function userMarker(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_SUCCESS:
      return { data: [...state.data, action.payload.data] };

    default:
      return state;
  }
}

/**
 * ACTIONS
 */

export const Creators = {
  addInputRequest: user => ({
    type: Types.ADD_REQUEST,
    payload: { user }
  }),

  addAvatarToMapSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  })
};
