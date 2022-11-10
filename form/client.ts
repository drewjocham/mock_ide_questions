import { ApiServiceClient } from "./src/proto/api_grpc_pb";
import * as grpc from '@grpc/grpc-js';

export default new ApiServiceClient(
    "localhost:8082",
    grpc.credentials.createInsecure()
);

