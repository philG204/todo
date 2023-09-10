// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class UserByName extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): UserByName;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserByName.AsObject;
    static toObject(includeInstance: boolean, msg: UserByName): UserByName.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserByName, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserByName;
    static deserializeBinaryFromReader(message: UserByName, reader: jspb.BinaryReader): UserByName;
}

export namespace UserByName {
    export type AsObject = {
        username: string,
    }
}

export class User extends jspb.Message { 
    getId(): number;
    setId(value: number): User;
    getUsername(): string;
    setUsername(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: number,
        username: string,
    }
}
