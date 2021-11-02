import { User } from '../model/user';
/**
 * User repository definition
 */
export interface UserRepository{

    /**
     * Saves new user
     * @param user
     */
    save(user:User): User;

    /**
     * Validate is user exists
     * @param username
     */
    exists(username: string): boolean;

    /**
     * Try access to user data
     * @param username
     * @param password
     */
    login(username: string, password: string): User ;

    /**
     * Delete an user
     * @param username
     */
    delete(username: string): boolean;

    /**
     *  Get all  users
     */
    all(): User[];

}