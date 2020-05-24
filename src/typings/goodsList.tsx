export interface Goods {
    goodsName: string,
    goodsId: string,
    goodsImage: string,
    appPrice: number,
    imgUrl: string,
}
export interface GoodsList {
    isLastPage: boolean,
    list: Goods[]
}