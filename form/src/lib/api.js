import axios from "axios";
import grpcClient from "../../client";
import { TestRequest } from "@/proto/api_pb";
//axios.defaults.baseURL = 'https://judge0-ce.p.rapidapi.com/submissions'
const judgeClient = axios.create({
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '08f852edfamsh149af67cd3c6cfap1388c3jsn22fb3e2dc084',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
    },
    params: { base64_encoded: 'true', fields: 'stdout' },
});
export const api = {
    // https://www.freecodecamp.org/news/how-to-build-react-based-code-editor/
    async submitCode(code) {
        code.language_id = 60;
        code.stdin = "SnVkZ2Uw";
        code.source_code = btoa(code.source_code);
        try {
            await judgeClient.post(`https://judge0-ce.p.rapidapi.com/submissions?language_id=${code.language_id}&source_code=${code.source_code}`).then(async (response) => {
                console.log("token", response.data.token);
                await judgeClient.get(`https://judge0-ce.p.rapidapi.com/submissions/${response.data.token}`)
                    .then(async (outputResponse) => {
                    console.log("output:", atob(outputResponse.data.stdout));
                });
            });
        }
        catch (err) {
            console.log("error" + err);
        }
    },
    async getTest() {
        const req = new TestRequest();
        req.setName("Drew");
        return new Promise((resolve, reject) => {
            grpcClient.test(req, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    },
    async testMethod() {
        const req = new TestRequest();
        req.setName("Drew");
        grpcClient.test(req, (err, res) => {
            if (!err) {
                console.info("Greeting:", res.getName());
            }
            else {
                console.error("Error:", err.message);
            }
        });
    }
};
//# sourceMappingURL=api.js.map