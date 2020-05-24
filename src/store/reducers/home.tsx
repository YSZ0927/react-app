import { AnyAction } from 'redux'
import * as actionTypes from '@/store/action-types'
import { HomeState } from '@/typings'

const initState: HomeState = {
    sessionList: [],
    bannerList: [],
    goodsList: {
        list: [],
        isLastPage: true
    },
}
export default function (state: HomeState = initState, action: AnyAction): HomeState {
    switch(action.type) {
        case actionTypes.GET_TYPE_SESSION:
            return {...state, sessionList: action.payload}
        case actionTypes.GET_BANNER:
            return {...state, bannerList: action.payload}
        case actionTypes.GET_GOODS_LIST:
            return {...state, goodsList: action.payload}
    }
    return state
}