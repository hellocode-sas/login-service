import { User } from './../../model/user';
import { ErrorType } from './../../exceptions/ErrorType';
import { ServiceException } from '../../exceptions/ServiceException';
import { NewUser, UserValidation } from '../../events/in-events';
import { ServiceResponse } from '../../events/out-events';
import { LoginService } from './../login-service';
import { UserRepository } from '../../repository/user-repository';

/**
 * Login service implementation
 */
export class LoginServiceImpl implements LoginService{
    private repository: UserRepository;

    constructor(repository:UserRepository){
        this.repository = repository;
    }

    /**
     * User creation method, looks for an inexistent username
     * @param request
     * @returns
     */
   createUser(request: NewUser): ServiceResponse {
       const exists=  this.repository.exists(request.username);
        if(exists){
            throw new ServiceException(ErrorType.DUPLICATED_USER, request.username);
        }

        const user = {
            name: request.username,
            password: this.encryptPassword(request.password),
            email: request.email,
            roles: request.roles,
            active: true
        };
        const created=this.repository.save(user);
        return created? { success: true}:{ success:false};
    }

    /**
     * Validate user
     * @param request
     */
    validateUser(request: UserValidation): ServiceResponse {
        const user=this.repository.login(request.username,
            this.encryptPassword(request.password));
        return { success: user?.active, data: user }
    }

    /**
     * Method to encrypt password
     * @param pass
     * @returns
     */
    private encryptPassword(pass: string): string{
        // TODO:create encryption SHA or MD5 logic.
        return pass;
    }

}