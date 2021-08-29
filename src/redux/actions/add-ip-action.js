import { ADD_IP } from "../types";

const addIp = (ip) => {
    return {
        type: ADD_IP,
        payload: ip

    }
}

export default addIp;
