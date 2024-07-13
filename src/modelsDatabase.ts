import { IDeckNative } from "modelsNative";
import { ObjectId } from "mongodb";

export type ReplaceKeyType<T, Unwanted, Replacement> = {
    [Key in keyof T]: T[Key] extends Unwanted ? Replacement : T[Key]
}

export interface IUserDb {
    name_first: string,
    name_last: string,
    username: string,
    email: string,
    password_hash: string,
}

export interface IDeckDb {
    name: string,
    id_user: ObjectId,
}

export interface ICardDb {
    name_front: string,
    name_back: string,
    id_deck: ObjectId,
}

export type FromDatabase<T> = ReplaceKeyType<T, ObjectId, string>;