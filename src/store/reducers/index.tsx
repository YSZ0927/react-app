import { combineReducers, ReducersMapObject, AnyAction, Reducer } from 'redux'    
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import home from './home'
import mine from './mine'
import shop from './shopCar'
import { RootState } from '@/typings/state'

let  history = createBrowserHistory()

let reducers: ReducersMapObject<RootState, AnyAction> = {
    home,
    mine,
    shop,
    router: connectRouter(history)
}
const rootReducer: Reducer<RootState, AnyAction> = combineReducers<RootState, AnyAction>(reducers)

// export type RootState = {
//     [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
// }
export default rootReducer