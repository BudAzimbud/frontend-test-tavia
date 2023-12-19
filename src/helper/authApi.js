import api from "./api";

export const login = (body) => api.post('auth/signin',body)

export const register = (body) => api.post('auth/signup',body)

