import { ServiceResponse } from './../events/out-events';
import { NewUser, UserValidation } from "../events/in-events";


export interface LoginService{

      /**
       * Creates an new user and throws an exception is not exists
       * @param request
       */
      createUser(request: NewUser): ServiceResponse;

      /**
       * Validate user login
       * @param request
       */
      validateUser(request:UserValidation): ServiceResponse;

}