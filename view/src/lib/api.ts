import axios, {AxiosInstance} from "axios";
import {Code} from "@/model/code";

//axios.defaults.baseURL = 'https://judge0-ce.p.rapidapi.com/submissions'

const apiClient: AxiosInstance = axios.create({
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '08f852edfamsh149af67cd3c6cfap1388c3jsn22fb3e2dc084',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
    },
    params: {base64_encoded: 'true', fields: '*'},
});

export const api = {

    // https://www.freecodecamp.org/news/how-to-build-react-based-code-editor/
    async submitCode(code: Code) {
        code.language_id = 60
        code.stdin = "SnVkZ2Uw"
        code.source_code = btoa(code.source_code)
        apiClient.post<Token>(`https://judge0-ce.p.rapidapi.com/submissions?language_id=${code.language_id}&source_code=${code.source_code}&stdin=SnVkZ2Uw`)
        .then(function (response) {
            console.log("res.data", response.data.token);
        }).then(function (token) {
            console.log("token", token); // <---- empty
            `https://judge0-ce.p.rapidapi.com/submissions/${token}`  // <---- get request
        }).then(function (response) {
            console.log("res.data", response);
        }).then(function (response  ) {
            // here I will need a model
        })
        .catch((err) => {
            const error = err.response ? err.response.data : err;
            console.log("error" + error);
        })
    }

}
