import axios, {AxiosInstance} from "axios";
import {Code} from "@/model/code";

axios.defaults.baseURL = 'https://judge0-ce.p.rapidapi.com/submissions'

const apiClient: AxiosInstance = axios.create({
    headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '08f852edfamsh149af67cd3c6cfap1388c3jsn22fb3e2dc084',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
    },
    params: {base64_encoded: 'false', fields: '*'},
});



export const api = {

    // https://www.freecodecamp.org/news/how-to-build-react-based-code-editor/
    async submitCode(code: Code) {
        code.language_id = 22
        code.stdin = "SnVkZ2Uw"
        apiClient.post<Res>(
            JSON.stringify(code),
        )
        .then(function (response) {
            console.log("res.data", response.data);
            //const token = response.data.token;
            //console.log(token);
        })
        .catch((err) => {
            const error = err.response ? err.response.data : err;
            console.log("error" + error);
            console.log("JSON" + JSON.stringify(code))
        })
    }

}
