import { ip3 } from '@/utils/ip';
import axios from 'axios';

export async function uploadFile(payload: { file: string | Blob; filename: string; public: any }) {
  const form = new FormData();
  form.append('file', payload?.file);
  form.append('filename', payload?.filename);
  form.append('public', payload?.public);
  return axios.post(`${ip3}/file/data/single`, form);
}
export async function uploadFileAndExportPdf(payload: { file: string | Blob; filename: string; public: any }) {
  const form = new FormData();
  form.append('file', payload?.file);
  form.append('exportPdf', '1');
  form.append('filename', payload?.filename);
  form.append('public', payload?.public);
  return axios.post(`${ip3}/file/document/single/word-to-pdf`, form);
}
