import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';
import {dataReqUpdate} from "@/models/khoikienthuc";

export async function getListKhoiKienThucByMon(idMonHoc:string) {
  return axios.get(`${ip3}/khoi-kien-thuc/${idMonHoc}`);
}
export async function getAllListKhoiKienThuc() {
  return axios.get(`${ip3}/khoi-kien-thuc/all`);
}
export async function editKhoiKienThuc(id:string,data:dataReqUpdate) {
  return axios.put(`${ip3}/khoi-kien-thuc/${id}`,data);
}
export async function createKhoiKienThuc(data:dataReqUpdate) {
  return axios.post(`${ip3}/khoi-kien-thuc`,data);
}
export async function deleteKhoiKienThuc(id:string) {
  return axios.delete(`${ip3}/khoi-kien-thuc/${id}`);
}
