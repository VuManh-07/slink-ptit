declare module ThongBaoPCoffee {
  export interface Record {
    urlFile: string[];
    phamVi: string;
    hinhThucDaoTaoId: number;
    roles: string[];
    donViIds: number[];
    userIds: string[];
    _id: string;
    senderId: string;
    senderName: string;
    title: string;
    description: string;
    content: string;
    htmlContent: string;
    imageUrl: string;
    notifType: string;
    info: {
      idLopHanhChinh?: number;
      idLopTinChi?: number;
    };
    unread: boolean;
    createdAt: string;
    updatedAt: string;
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
  }

  export interface PostRecord {
    title: string;
    loaiDoiTuong: string;
    roles: string[];
    phamVi: string;
    description: string;
    htmlContent: any;
    urlFile: any[];
  }
}
