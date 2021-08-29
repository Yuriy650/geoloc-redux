import { GET_IP_DATA} from "../types";

export const getIpDataReducer = (state=[{}], action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case GET_IP_DATA:
            return [action.payload]
    }
    return state
}
