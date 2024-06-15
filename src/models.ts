export interface IUser {
    username: string;
    password_hash: string;
    email: string;
    name_first: string;
    name_last: string;
    decks: IDeck[]
}

export interface IDeck {
    cards: ICard[]
}

export interface ICard {
    side_front: string;
    side_back: string;
}
