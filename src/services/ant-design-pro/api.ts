// @ts-ignore
/* eslint-disable */
import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';
import { request } from 'umi';

export async function getDataTinTuc(options?: { [key: string]: any }) {
  return request<IRecordTinTuc.RootObject>(`${ip3}/tin-tuc/me/pageable`, {
    method: 'GET',
    params: { page: 1, limit: 20, ...(options || {}) },
  });
}

export async function getDetailTinTuc(id: any) {
  return axios.get(`${ip3}/tin-tuc/${id}`);
}

export async function getInfo() {
  return axios.get(`${ip3}/odoo-user/me/profile`);
}

export async function getInfoSinhVien() {
  return axios.get(`${ip3}/odoo-user/sinh-vien/me`);
}

export async function putInfo(payload: Login.Profile) {
  return axios.put(`${ip3}/odoo-user/me/profile`, payload);
}

export async function getInfoAdmin() {
  return axios.get(`${ip3}/user/me`);
}

export async function login(payload: {
  login: string;
  password: string;
  deviceId: string;
  oneSignalId: string;
}) {
  return axios.post(`${ip3}/odoo-auth/login/web`, payload);
}

export async function loginMobile(payload: {
  login: string;
  password: string;
  deviceId: string;
  oneSignalId: string;
}) {
  return axios.post(`${ip3}/odoo-auth/login/mobile`, payload);
}

export async function adminlogin(payload: { username?: string; password?: string }) {
  return axios.post(`${ip3}/auth/login/web`, payload);
}

export async function changePassword(payload: { oldPassword: string; newPassword: string }) {
  return axios.post(`${ip3}/odoo-user/me/change/password`, payload);
}

export async function getPrivateToken() {
  return axios.get(`${ip3}/auth/user/private-token`);
}

export async function forgotPassword(payload: { email: string }) {
  return axios.post(`${ip3}/odoo-user/public/forget-password`, payload);
}

export async function adminLogout() {
  return axios.post(`${ip3}/auth/logout`);
}

export async function userLogout() {
  return axios.post(`${ip3}/odoo-auth/logout`);
}

export async function loginWithKeyCloak(payload: { accessToken: string; oneSignalId: string }) {
  return axios.post(`${ip3}/auth/login/keycloak`, {
    ...payload,
    deviceId: 'deviceId',
    clientPlatform: 'Web',
  });
}
