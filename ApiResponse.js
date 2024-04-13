class ApiResponse { //this class is used to send response in a standard format
    constructor(statusCode , data , message){ //this is the constructor of the class which is used to pass the values to the class
      this.statusCode = statusCode // this is a property of the class which is used to store the status code of the response
      this.data = data // this is a property of the class which is used to store the data of the response
      this.message = message // this is a property of the class which is used to store the message of the response
      // this.success = statusCode<400
    }
}

export {ApiResponse}