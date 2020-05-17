import { AnyAction } from 'redux'

export interface MineState{}

const initState: MineState = {
    // goods: {
    //     loading: false,
    //     goodsList: []
    // }
}
export default function (state: MineState = initState, action: AnyAction): MineState {
    return state
}