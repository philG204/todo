// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";

interface IUserGrpcService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    findUserByName: IUserGrpcService_IFindUserByName;
}

interface IUserGrpcService_IFindUserByName extends grpc.MethodDefinition<user_pb.UserByName, user_pb.User> {
    path: "/user.UserGrpc/FindUserByName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UserByName>;
    requestDeserialize: grpc.deserialize<user_pb.UserByName>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}

export const UserGrpcService: IUserGrpcService;

export interface IUserGrpcServer {
    findUserByName: grpc.handleUnaryCall<user_pb.UserByName, user_pb.User>;
}

export interface IUserGrpcClient {
    findUserByName(request: user_pb.UserByName, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    findUserByName(request: user_pb.UserByName, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    findUserByName(request: user_pb.UserByName, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
}

export class UserGrpcClient extends grpc.Client implements IUserGrpcClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public findUserByName(request: user_pb.UserByName, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public findUserByName(request: user_pb.UserByName, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public findUserByName(request: user_pb.UserByName, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
}
