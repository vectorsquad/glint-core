import { ICardNative, IDeckNative, IUserNative } from "./modelsNative";

type Id = {
    _id: string
}

type NewPasswordParams = {
    password_old: string,
    password_new: string,
}

// User
export type ISignUpRequest = IUserNative;
export type ISignUpResponse = Id;

export type ISignInRequest = Pick<IUserNative, "username" | "password_hash">;
export type ISignInResponse = undefined;

export type IUpdatePasswordRequest = NewPasswordParams;
export type IUpdatePasswordResponse = undefined;

export type IResetPasswordRequest = NewPasswordParams;
export type IResetPasswordResponse = undefined;

export type ISendPasswordRecoveryRequest = Partial<Pick<IUserNative, "email" | "username">>;
export type ISendPasswordRecoveryResponse = undefined;

export type ISendEmailVerificationRequest = Partial<Pick<IUserNative, "email" | "username">>;
export type ISendEmailVerificationResponse = undefined;

export type IVerifyEmailRequest = undefined;
export type IVerifyEmailResponse = undefined;

// Deck
export type ICreateDeckRequest = IDeckNative;
export type ICreateDeckResponse = Id;

export type IFindDeckRequest = Partial<IDeckNative & Id>;
export type IFindDeckResponse = (IDeckNative & Id)[];

export type IUpdateDeckRequest = Partial<IDeckNative> & Id;
export type IUpdateDeckResponse = undefined;

export type IDeleteDeckRequest = Id[];
export type IDeleteDeckResponse = undefined;

// Card
export type ICreateCardRequest = ICardNative;
export type ICreateCardResponse = Id;

export type IFindCardRequest = Partial<ICardNative & Id>;
export type IFindCardResponse = (ICardNative & Id)[];

export type IUpdateCardRequest = Partial<ICardNative> & Id;
export type IUpdateCardResponse = undefined;

export type IDeleteCardRequest = Id;
export type IDeleteCardResponse = undefined;
