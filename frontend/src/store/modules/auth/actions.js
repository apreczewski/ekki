export function signInRequest(cpf) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { cpf },
  };
}

export function signUpRequest(name, cpf, phone) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, cpf, phone },
  };
}

export function getAccountRequest() {
  return {
    type: '@auth/GET_ACCOUNT_REQUEST',
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
