import { ErrorType } from "./ErrorType";

/**
 * Custom exception
 */
export class ServiceException extends Error{
    readonly code: ErrorType;

    constructor(code: ErrorType, message:string = ""){
        super(code.toString + ':' + message);
        this.code = code;
    }

    getCode(){
        return this.code;
    }

}