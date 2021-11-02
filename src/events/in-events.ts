
/**
 *  New user data wrapper
 */
export interface NewUser{
    username : string;
    email: string;
    password: string;
    roles: string [];
}

export interface UserValidation{
    username: string;
    password: string;
}