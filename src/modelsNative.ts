import * as db from "./modelsDatabase";

export type IUserNative = db.FromDatabase<db.IUserDb>;
export type IDeckNative = db.FromDatabase<db.IDeckDb>;
export type ICardNative = db.FromDatabase<db.ICardDb>;