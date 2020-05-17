import { Goods, GoodsList } from './goodsList'

export interface HomeGoodsList {
    loading: boolean,
    list: GoodsList,
    hasNextPage: boolean
}

export interface HomeState {
    // goods: HomeGoodsList
}
