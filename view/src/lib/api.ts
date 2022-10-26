import axios, {AxiosInstance, AxiosResponse} from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const api = {

    //TODO: the queastions will be stored in a cache in the backend
    async getQuestion(id: string) {
        return apiClient.get(`/questions/${id}`);
    },

    async submitQuestion(id: string) {
        /**
         Promise<AxiosResponse<CodeResponse>> {

        }
         **/
        //TODO: here should be a model
        return apiClient.post(`/answer/${id}`)
    }

}
