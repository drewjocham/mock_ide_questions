import { ApiServiceClient } from "@/proto/api_grpc_pb";
import * as grpc from '@grpc/grpc-js';

const grpcClient = new ApiServiceClient(
    "localhost:8082",
    grpc.credentials.createInsecure()
);

export default grpcClient;



