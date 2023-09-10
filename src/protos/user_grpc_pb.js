// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');

function serialize_user_User(arg) {
  if (!(arg instanceof user_pb.User)) {
    throw new Error('Expected argument of type user.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_User(buffer_arg) {
  return user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserByName(arg) {
  if (!(arg instanceof user_pb.UserByName)) {
    throw new Error('Expected argument of type user.UserByName');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserByName(buffer_arg) {
  return user_pb.UserByName.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserGrpcService = exports.UserGrpcService = {
  findUserByName: {
    path: '/user.UserGrpc/FindUserByName',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserByName,
    responseType: user_pb.User,
    requestSerialize: serialize_user_UserByName,
    requestDeserialize: deserialize_user_UserByName,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
};

exports.UserGrpcClient = grpc.makeGenericClientConstructor(UserGrpcService);
