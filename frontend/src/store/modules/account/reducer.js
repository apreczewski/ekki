import produce from 'immer';

const INTIAL_STATE = {
  account: null,
};

export default function account(state = INTIAL_STATE, action) {
  switch (action.type) {
    case '@auth/GET_ACCOUNT_SUCCESS':
      return produce(state, draft => {
        draft.account = action.payload.account;
      });

    case '@auth/SIGN_OUT':
      return produce(state, draft => {
        draft.account = null;
      });

    default:
      return state;
  }
}
