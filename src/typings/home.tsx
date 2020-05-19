import { Goods, GoodsList } from './goodsList'

export interface HomeGoodsList {
    loading: boolean,
    list: GoodsList,
    hasNextPage: boolean
}
export interface TypeSession {
    url: string,
    title: string
}

export interface HomeState {
    // goods: HomeGoodsList
    bannerList: String[],
    sessionList: TypeSession[]
}
