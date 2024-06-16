export interface IUser {
    username: string;
    password_hash: string;
    email: string;
    name_first: string;
    name_last: string;
}

export interface IDeck {
    title: string;
}

export interface ICard {
    side_front: string;
    side_back: string;
}
