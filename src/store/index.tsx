import { createStore, applyMiddleware} from 'redux'
import { routerMiddleware } from 'connected-react-router'
import {createBrowserHistory} from 'history'
import logger from 'redux-logger'
import promise from 'redux-promise' // 派发promise
import thunk from 'redux-thunk' // 派发函数
import rootReducer from './reducers'

const history = createBrowserHistory()

let store = applyMiddleware(routerMiddleware(history), promise, thunk, logger)(createStore)(rootReducer)
export default store