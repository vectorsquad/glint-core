import { ObjectId } from "mongodb";

/**
 * Document that's been freshly retrieved from a MongoDB database.
 */
interface DatabaseDocument {
    _id: ObjectId
}

export interface IUserDoc extends DatabaseDocument {
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
}

export interface IDeckDoc extends DatabaseDocument {
    /**
     * Card deck's name.
     */
    name: string,

    /**
     * ID of user that owns this deck.
     */
    id_user: ObjectId,
}

export interface ICardDoc extends DatabaseDocument {
    /**
     * Front side of card.
     */
    name_front: string,

    /**
     * Back side of card.
     */
    name_back: string,

    /**
     * ID of deck that owns this card.
     */
    id_deck: ObjectId,
}

type ReplaceKeyType<T, Unwanted, Replacement> = {
    [Key in keyof T]: T[Key] extends Unwanted ? Replacement : T[Key]
}

export type FromDatabase<T> = ReplaceKeyType<T, ObjectId, string>;
