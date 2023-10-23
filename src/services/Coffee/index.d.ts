declare module ICoffee {
  export interface Record {
    _id: string;
    maSv: string;
    hoTen: string;
    diaChi: string;
    soDienThoai: string;
    liDoTuChoi: string;
    thoiGianHoanThanh: string;
    thoiGianGiaoHang: string;
    thoiGianXacNhanDon: string;
    thoiGianTuChoi: string;
    thongTinDatHang: {
      _id: string;
      DiscountAmountItem: number;
      DiscountPrice: number;
      InventoryItemName: string;
      InventoryItemCode: string;
      InventoryItemCategoryName: string;
      InventoryItemID: string;
      UnitID: string;
      UnitName: string;
      UnitPrice: number;
      UnitPriceAddtion: number;
      UnitPriceDelivery: number;
      InventoryItemType: number;
      BuyQuantity: number;
      CartItemID: string;
    }[];
    trangThaiDon: string;
    ghiChu: string;
    hinhThucThanhToan: string;
    hinhThucNhanHang: string;
    createdAt: string;
    updatedAt: string;
    __v: 0;
  }
}
