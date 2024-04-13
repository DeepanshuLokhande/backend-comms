class ApiError extends Error {  // this is a inherited  class of the Error class which is a built-in class in Node.js
    constructor(  // we created the constructor to pass the values to the class
        statuscode,
        message="somthing went wrong",
        errors = [],
        statck = ""
    ){
        super(message) // this is a built-in method of the Error class which is used to pass the message to the Error class
        this.statuscode = statuscode// this is a property of the class which is used to store the status code of the error
        this.message = message// this is a property of the class which is used to store the message of the error
        this.data = null // this is a property of the class which is used to store the data of the error
        this.succes = false// this is the success property of the class which is used to store the success of the error
        this.errors =errors// this is the errors property of the class which is used to store the errors of the error

        if(statck){ // this is a condition to check if the statck is passed to the class or not
            this.statck = statck // this is a property of the class which is used to store the statck of the error and shows the error or file in which the error is occured
        }else{
            Error.captureStackTrace(this , this.constructor)
        } // this is a built-in method of the Error class which is used to capture the statck of the error and show the error or file in which the error is occured
    }

}

    export {ApiError}