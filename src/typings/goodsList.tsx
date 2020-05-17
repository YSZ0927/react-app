export interface Goods {
    goodsName: String,
    goodsId: String,
    goodsImage: String,
    goodsPrice: Number,
}
export interface GoodsList {
    success: boolean,
    data: Goods[]
}