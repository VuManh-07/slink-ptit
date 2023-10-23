import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { instanceCard, instancePtit } from '../utils/connect/axios';
import { getSocketServerCard, getSocketServerPTIT } from '../utils/connect/socketIO';
import { ExportToExcel } from './ExportToExcel';

const socketCard = getSocketServerCard();
// const socketPtit = getSocketServerPTIT();
const roomID = localStorage.getItem('roomID');

const columns = [
  {
    title: 'Môn 1',
    dataIndex: 'm1_k1',
    key: 'm1_k1',
  },
  {
    title: 'Môn 2',
    dataIndex: 'm2_k1',
    key: 'm2_k1',
  },
  {
    title: 'GPA',
    dataIndex: 'gpa_k1',
    key: 'gpa_k1',
  },
];

const HomePageComponent = () => {
  const [balance, setBalance] = useState('');
  const [user, setUser] = useState<any>();
  const [bangdiem, setBangDiem] = useState<any>();
  const fileName = 'myfile';

  const getBalance = async () => {
    await instanceCard
      .post('/api/payment/getBalance', { maSV: 'B19DCVT247' })
      .then((res: any) => {
        setBalance(res?.data.balance);
      })
      .catch((err: any) => console.log(err));
  };

  const updateBalance = async (amount: number) => {
    await instanceCard
      .post('/api/payment/updateBalance', { maSV: 'B19DCVT247', amount: amount })
      .then((res) => {
        console.log('asdasdasdasd', res);
        if (res.data.result) {
          getBalance();
        }
      });
  };

  const getUser = async () => {
    await instancePtit
      .get('http://139.162.47.179:3040/api/user/getUser', {
        headers: {
          'x-access-token': localStorage.getItem('access_token'),
        },
      })
      .then((res: any) => {
        setUser(res.data.user.maSV);
      })
      .catch((err) => console.log(err));
  };

  const getBangDiem = async () => {
    await instancePtit
      .get('http://139.162.47.179:3040/api/bangdiem/getBangDiem', {
        headers: {
          'x-access-token': localStorage.getItem('access_token'),
        },
      })
      .then((res: any) => {
        console.log(res);
        setBangDiem(res.data.bangdiem);
      })
      .catch((err) => console.log(err));
  };

  const naptien = async () => {
    socketCard.emit('client-wanna-payment', { roomID });
  };

  useEffect(() => {
    getBalance();
    getUser();
    getBangDiem();
  }, []);

  useEffect(() => {
    socketCard.on('return-handle-payment', (data) => {
      console.log(data);
      updateBalance(Number(data.amount));
    });
  }, []);

  return (
    <div>
      <h3>Home Page</h3>
      <h4>
        Client ID: <span>{socketCard.id}</span>
      </h4>
      <br />
      <h4>
        Balance: <span>{balance}đ</span>
      </h4>
      <button onClick={() => naptien()}>Nạp</button>
      <br />
      <br />
      <h3>Hồ sơ</h3>
      <h4>{user}</h4>
      <br />
      <h3>Bảng điểm</h3>
      <Table dataSource={bangdiem} columns={columns} />
      <ExportToExcel apiData={bangdiem} fileName={fileName} />
    </div>
  );
};

export default HomePageComponent;
