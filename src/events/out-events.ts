/**
 * Service response wrapper object
 */
export interface ServiceResponse{
    success : boolean;
    // detailed error message
    errorMsg ? : string;
    // exception error code
    errorCode ? : string;
    data ? : any;
}