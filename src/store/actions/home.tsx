import * as actionTypes from '@/store/action-types'
import { getTypeSessionsApi, getBannerApi } from '@/apis/home'

export default {
    getBanner() {
        return {
            type: actionTypes.GET_BANNER,
            payload: getBannerApi()
        }
    },
    getTypeSessions() {
        return {
            type: actionTypes.GET_TYPE_SESSION,
            payload: getTypeSessionsApi()
        }
    }
}