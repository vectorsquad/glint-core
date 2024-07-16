import * as db from "./modelsDatabase";

export type IUserNative = db.FromDatabase<db.IUserDoc>;
export type IDeckNative = db.FromDatabase<db.IDeckDoc>;
export type ICardNative = db.FromDatabase<db.ICardDoc>;