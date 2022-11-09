import * as grpc from "@grpc/grpc-js";

import {ApiServiceClient} from "./src/proto/api_grpc_pb";
import {TestRequest} from "./src/proto/api_pb";

const grpcClient = new ApiServiceClient(
    "localhost:8082",
    grpc.credentials.createInsecure()
);

const request = new TestRequest();
request.setName("Hello World");

grpcClient.test(request, (error, response) => {
    if(!error) {
        console.info("Greeting:", response.getMessage());
    } else {
        console.error("Error:", error.message);
    }
});

export default grpcClient;

