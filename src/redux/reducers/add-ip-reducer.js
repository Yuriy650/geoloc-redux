import { ADD_IP } from "../types";

export const addIpReducer = (state = '', action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case ADD_IP:
            return action.payload
    }
    return state;
}


