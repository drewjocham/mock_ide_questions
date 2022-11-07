// @ts-ignore
import * as grpc from "@grpc/grpc-js";
import {TestRequest} from "./proto/api_pb";

const client = new grpc.Client(
    "localhost:8082",
    grpc.credentials.createInsecure()
)

const request = new TestRequest();
request.setName("Hello World");




