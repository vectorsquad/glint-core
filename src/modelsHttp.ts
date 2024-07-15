import { ICardNative, IDeckNative, IUserNative } from "./modelsNative";

type Id = {
    _id: string
}

type NewPasswordParams = {
    password_old: string,
    password_new: string,
}

// User

/**
 * Parameters for signing up.
 */
export type ISignUpRequest = IUserNative;

/**
 * Payload after signing up.
 */
export type ISignUpResponse = Id;

/**
 * Parameters for signing in.
 */
export type ISignInRequest = Pick<IUserNative, "username" | "password_hash">;

/**
 * Payload after signing in.
 */
export type ISignInResponse = undefined;

/**
 * Parameters for updating a known password.
 */
export type IUpdatePasswordRequest = NewPasswordParams;

/**
 * Payload after updating a known password.
 */
export type IUpdatePasswordResponse = undefined;

/**
 * Parameters for resetting an unknown password.
 */
export type IResetPasswordRequest = NewPasswordParams;

/**
 * Payload after resetting an unknown password.
 */
export type IResetPasswordResponse = undefined;

/**
 * Parameters for sending a password recovery email.
 */
export type ISendPasswordRecoveryRequest = Partial<Pick<IUserNative, "email" | "username">>;

/**
 * Payload after sending a password recovery email.
 */
export type ISendPasswordRecoveryResponse = undefined;

/**
 * Parameters for sending an email recovery email.
 */
export type ISendEmailVerificationRequest = Partial<Pick<IUserNative, "email" | "username">>;

/**
 * Payload after sending an email recvery email.
 */
export type ISendEmailVerificationResponse = undefined;

/**
 * Parameters for verifying an account's email.
 */
export type IVerifyEmailRequest = undefined;

/**
 * Payload after verifying an account's email.
 */
export type IVerifyEmailResponse = undefined;

// Deck

/**
 * Parameters for creating a new deck.
 */
export type ICreateDeckRequest = IDeckNative;

/**
 * Payload after creating a new deck.
 */
export type ICreateDeckResponse = Id;

/**
 * Parameters for finding a deck.
 */
export type IFindDeckRequest = Partial<IDeckNative & Id>;

/**
 * Payload after finding a deck.
 */
export type IFindDeckResponse = (IDeckNative & Id)[];

/**
 * Parameters for updating a deck.
 */
export type IUpdateDeckRequest = Partial<IDeckNative> & Id;

/**
 * Payload after updating a deck.
 */
export type IUpdateDeckResponse = undefined;

/**
 * Parameters for deleting a deck.
 */
export type IDeleteDeckRequest = Id[];

/**
 * Payload after deleting a deck.
 */
export type IDeleteDeckResponse = undefined;

// Card

/**
 * Parameters for creating a card.
 */
export type ICreateCardRequest = ICardNative;

/**
 * Payload after creating a card.
 */
export type ICreateCardResponse = Id;

/**
 * Parameters for finding a card.
 */
export type IFindCardRequest = Partial<ICardNative & Id>;

/**
 * Payload after finding a card.
 */
export type IFindCardResponse = (ICardNative & Id)[];

/**
 * Parameters for updating a card.
 */
export type IUpdateCardRequest = Partial<ICardNative> & Id;

/**
 * Payload after updating a card.
 */
export type IUpdateCardResponse = undefined;

/**
 * Parameters for deleting a card.
 */
export type IDeleteCardRequest = Id;

/**
 * Payload after deleting a card.
 */
export type IDeleteCardResponse = undefined;
