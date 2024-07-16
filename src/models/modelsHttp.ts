import { ICardNative, IDeckNative, IUserNative } from "./modelsNative";

export type DocNative = {
    _id: string
}

type NewPasswordParams = {
    password: string,
}

type OwnershipVerification = {
    code: string
}

export type ErrorResponse = {
    message: {
        en: string
    }
}

// User

/**
 * Parameters for signing up.
 */
export type ISignUpRequest = Pick<IUserNative, "email" | "name_first" | "name_last" | "username" | "password_hash">;

/**
 * Payload after signing up.
 */
export type ISignUpResponse = DocNative;

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
export type IResetPasswordRequest = NewPasswordParams & OwnershipVerification;

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
export type ICreateDeckRequest = Pick<IDeckNative, "id_user" | "name">;

/**
 * Payload after creating a new deck.
 */
export type ICreateDeckResponse = DocNative;

/**
 * Parameters for finding a deck.
 */
export type IFindDeckRequest = Partial<Pick<IDeckNative, "_id" | "id_user" | "name">>;

/**
 * Payload after finding a deck.
 */
export type IFindDeckResponse = IDeckNative[];

/**
 * Parameters for updating a deck.
 */
export type IUpdateDeckRequest = Partial<IDeckNative> & DocNative;

/**
 * Payload after updating a deck.
 */
export type IUpdateDeckResponse = undefined;

/**
 * Parameters for deleting a deck.
 */
export type IDeleteDeckRequest = DocNative[];

/**
 * Payload after deleting a deck.
 */
export type IDeleteDeckResponse = undefined;

// Card

/**
 * Parameters for creating a card.
 */
export type ICreateCardRequest = Pick<ICardNative, "id_deck" | "name_back" | "name_front">;

/**
 * Payload after creating a card.
 */
export type ICreateCardResponse = DocNative;

/**
 * Parameters for finding a card.
 */
export type IFindCardRequest = Partial<ICardNative>;

/**
 * Payload after finding a card.
 */
export type IFindCardResponse = (ICardNative)[];

/**
 * Parameters for updating a card.
 */
export type IUpdateCardRequest = Partial<ICardNative> & DocNative;

/**
 * Payload after updating a card.
 */
export type IUpdateCardResponse = undefined;

/**
 * Parameters for deleting a card.
 */
export type IDeleteCardRequest = DocNative;

/**
 * Payload after deleting a card.
 */
export type IDeleteCardResponse = undefined;
