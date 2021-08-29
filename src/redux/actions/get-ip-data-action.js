import { GET_IP_DATA } from "../types";

const getIpDataAction = (data) => {
    return {
        type: GET_IP_DATA,
        payload: data
    }
}

export default getIpDataAction;
