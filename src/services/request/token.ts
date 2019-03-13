import Cookies from 'js-cookie';

const TOKEN_NAME = 'Admin-Token'

export function getToken() {
  return Cookies.get(TOKEN_NAME)
}

export function setToken(token:string) {
  return Cookies.set(TOKEN_NAME, token)
}

export function removeToken() {
  return Cookies.remove(TOKEN_NAME)
}
