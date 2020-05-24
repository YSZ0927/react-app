import { GoodsList } from './goodsList'

export interface TypeSession {
    url: string,
    title: string
}

export interface HomeState {
    // goods: HomeGoodsList
    bannerList: string[],
    goodsList: GoodsList
    sessionList: TypeSession[]
}
