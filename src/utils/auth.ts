import { userCenterTokenName, userCenterLoginUrl } from "../config/index";
export function getToken() {
  return window.localStorage.getItem(userCenterTokenName);
}
export function setToken(token: string) {
  window.localStorage.setItem(userCenterTokenName, token);
  console.log("settokern:", token);
}

export function removeToken() {
  window.localStorage.removeItem(userCenterTokenName);
}
export function goLogin() {
  window.location.href = userCenterLoginUrl;
}
