import { AnyAction } from 'redux'
import * as actionTypes from '@/store/action-types'

export interface HomeState {}

const initState: HomeState = {
    typrSessionList: []
    // goods: {
    //     loading: false,
    //     goodsList: []
    // }
}
export default function (state: HomeState = initState, action: AnyAction): HomeState {
    switch(action.type) {
        case actionTypes.GET_TYPE_SESSION:
            return {...state, typrSessionList: action.payload}
    }
    return state
}