export function signInRequest(name, password) {

  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { name, password },
  }
}

export function signInSucess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user }
  }
}

export function signUpResquest(name, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, password }
  }
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE'
  }
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  }
}
