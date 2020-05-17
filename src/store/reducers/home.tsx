import { AnyAction } from 'redux'
// import * as actionTypes from 

export interface HomeState {}

const initState: HomeState = {
    // goods: {
    //     loading: false,
    //     goodsList: []
    // }
}
export default function (state: HomeState = initState, action: AnyAction): HomeState {
    return state
}