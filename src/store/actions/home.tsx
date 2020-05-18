import { GET_TYPE_SESSION } from '@/store/action-types'
import { getTypeSessionsApi } from '@/apis/home'

export default {
    getTypeSessions() {
        return {
            type: GET_TYPE_SESSION,
            payload: getTypeSessionsApi()
        }
    }
}