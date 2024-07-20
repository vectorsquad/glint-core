import { ObjectId } from "mongodb";

/**
 * Document that's been freshly retrieved from a MongoDB database.
 */
export interface Doc {
    _id: ObjectId
}


type DocNew<T> = Omit<T, "_id">

export interface IUserDoc extends Doc {
    /**
     * User's first name.
     */
    name_first: string,

    /**
     * User's last name.
     */
    name_last: string,

    /**
     * User's username.
     */
    username: string,

    /**
     * User's primary email.
     */
    email: string,

    /**
     * User's hashed password.
     */
    password_hash: string,

    /**
     * User's email has been verified.
     */
    email_verified: false

    verification_code: string
}

export type IUserDocNew = DocNew<IUserDoc>

export interface IDeckDoc extends Doc {
    /**
     * Card deck's name.
     */
    name: string,

    /**
     * ID of user that owns this deck.
     */
    id_user: ObjectId,
}

export type IDeckDocNew = DocNew<IDeckDoc>

export interface ICardDoc extends Doc {
    /**
     * Front side of card.
     */
    side_front: string,

    /**
     * Back side of card.
     */
    side_back: string,

    /**
     * ID of deck that owns this card.
     */
    id_deck: ObjectId,
}

export type ICardDocNew = DocNew<ICardDoc>

type ReplaceKeyType<T, Unwanted, Replacement> = {
    [Key in keyof T]: T[Key] extends Unwanted ? Replacement : T[Key]
}

export type FromDatabase<T> = ReplaceKeyType<T, ObjectId, string>;
