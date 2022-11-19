import axios, {AxiosInstance, AxiosResponse} from "axios";
import {TestRequest, TestResponse} from "@/proto/api_pb";

const grpcClient: AxiosInstance = axios.create({
    headers: {
        'content-type': 'application/json',
    },
    //params: {base64_encoded: 'true', fields: 'stdout'},
});

export const api = {

    async getTest() {
        const req = new TestRequest();
        req.setName("Mike");
        const response = new TestResponse()
        try{
            console.log("trying 2")
            grpcClient.get<TestRequest>("http://localhost:8082/v1/test")
                .then(async (res: AxiosResponse<TestResponse>) => {
                    console.log("output:", res.data.getName())
                    response.setName(res.data.getName())
                })
        }catch (err) {
            console.log("error" + err);
        }
        return response.getName()
    }

    /*
    async getTest(): Promise<TestRequest> {
        const req = new TestRequest();
        req.setName("Mike");

        return new Promise<TestRequest>((resolve, reject) => {
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
            if(!err) {
                console.info("Greeting:", res.getName());
            } else {
                console.error("Error:", err.message);
            }
        })
    }
    */


}


