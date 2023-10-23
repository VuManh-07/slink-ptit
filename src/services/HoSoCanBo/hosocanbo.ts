import axios from '@/utils/axios';
import { ip3 } from '@/utils/ip';

const url = 'odoo-nhan-su';

export enum PathNhanSu {
  LICH_SU_DAO_TAO = 'lich-su-dao-tao',
  LICH_SU_CONG_TAC = 'lich-su-cong-tac',
  GIA_DINH_BAN_THAN = 'quan-he-gia-dinh-ve-ban-than',
  GIA_DINH_VO_CHONG = 'quan-he-gia-dinh-ve-vo-chong',
  DIEN_BIEN_LUONG = 'dien-bien-qua-trinh-luong',
}

export enum PathFileMinhChung {
  CONG_TAC = 'file-minh-chung-lich-su-cong-tac',
  DAO_TAO = 'file-minh-chung-lich-su-dao-tao',
}

export async function getNhanSuByMaDinhDanh(ma_dinh_danh: string) {
  return axios.get(`${ip3}/${url}/nhan-su-id/${ma_dinh_danh}`);
}

export async function getAllNhanSuDraft(idNhanSu: number) {
  return axios.get(`${ip3}/${url}/nhan-su-draft/all/nhan-su/${idNhanSu}`);
}

export async function getDetailNhanSuDraft(idNhanSuDraft: number) {
  return axios.get(`${ip3}/${url}/nhan-su-draft/${idNhanSuDraft}`);
}

export async function postNhanSuDraft(payload: NhanSu.IRecord) {
  return axios.post(`${ip3}/${url}/nhan-su-draft`, payload);
}

export async function cloneNhanSuDraft(idNhanSuDraft: number) {
  return axios.post(`${ip3}/${url}/clone-nhan-su-draft/${idNhanSuDraft}`);
}

export async function putNhanSuDraft(payload: Partial<NhanSu.IRecord>) {
  return axios.put(`${ip3}/${url}/nhan-su-draft/${payload.id}`, payload);
}

export async function lockNhanSuDraft(idNhanSuDraft: number) {
  return axios.put(`${ip3}/${url}/khoa-nhan-su-draft/${idNhanSuDraft}`);
}

export async function delNhanSuDraft(payload: { id: number }) {
  return axios.delete(`${ip3}/${url}/nhan-su-draft/${payload.id}`);
}

////////////////
// GET ITEMS
///////////////
export async function getItemDraft(path: PathNhanSu, idNhanSuDraft: number) {
  return axios.get(`${ip3}/${url}/${path}/nhan-su-draft/${idNhanSuDraft}`);
}

export async function postItem(path: PathNhanSu, payload: any) {
  return axios.post(`${ip3}/${url}/${path}`, payload);
}

export async function putItem(path: PathNhanSu, payload: any) {
  return axios.put(`${ip3}/${url}/${path}/${payload.id}`, payload);
}

export async function delItem(path: PathNhanSu, payload: { id: number }) {
  return axios.delete(`${ip3}/${url}/${path}/${payload.id}`);
}

export async function putFileMinhChung(path: PathFileMinhChung, id: number, base64: string) {
  return axios.put(`${ip3}/${url}/${path}/${id}`, {
    file_minh_chung: base64,
  });
}

export async function getFileMinhChung(path: PathFileMinhChung, id: number) {
  return axios.get(`${ip3}/${url}/${path}/${id}`);
}

export async function getFileHoSo(id: number) {
  return axios.get(`${ip3}/${url}/xuat-ho-so-nhan-su-draft/${id}`, {
    responseType: 'arraybuffer',
  });
}

export async function putAnhHoSo(id: number, base64: string) {
  return axios.put(`${ip3}/${url}/anh-dai-dien-nhan-su-draft/${id}`, {
    image_1920: base64,
  });
}

export async function getAnhHoSo(id: number) {
  return axios.get(`${ip3}/${url}/anh-dai-dien-nhan-su-draft/${id}`);
}

//////////////////////////////////////////////
// ĐƠN XIN NGHỈ PHÉP
///////////////////////////////////////////

export async function getDonXinNghiPhep(idNhanSu: number) {
  return axios.get(`${ip3}/${url}/all-don-xin-nghi-phep/${idNhanSu}`);
}

export async function postDonXinNghiPhep(payload: NhanSu.IDonXinNghiPhep) {
  return axios.post(`${ip3}/${url}/don-xin-nghi-phep/`, payload);
}

//////////////////////////////////////////////
// ĐƠN XIN NGHỈ PHÉP
///////////////////////////////////////////

export async function getAllHopDong(idNhanSu: number) {
  return axios.get(`${ip3}/${url}/hop-dong/all-nhan-su-id/${idNhanSu}`);
}

export async function getDetailHopDong(id: number) {
  return axios.get(`${ip3}/${url}/hop-dong/${id}`);
}
