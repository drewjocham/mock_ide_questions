import axios, {AxiosInstance} from "axios";


axios.defaults.baseURL = 'http://localhost:8080/api'

const apiClient: AxiosInstance = axios.create({
    headers: {
        'content-type': 'application/json',
    },
    params: {base64_encoded: 'true', fields: 'stdout'},
});


export const api = {

}
