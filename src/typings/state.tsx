import { HomeState } from './home'
// import { MineState } from '@/store/reducers/mine'
// import { ShopCarState } from '@/store/reducers/shopCar'
import { RouterState } from 'connected-react-router'

export interface RootState {
    home: HomeState,
    // mine: MineState,
    // shopCar: ShopCarState
    router: RouterState
}