// const asyncHandler =  (reqHandler)=>{
//    return  (req , res , next)=>{
//         Promise.resolve(reqHandler(req,res,next)).  // the promis.resolve is used to create a promise which is resolved with the value of the reqHandler
//         catch((err)=>next(err)) // and the .catch((err)=>next(err)) is used to catch the error of the promise which is created by the promise.resolve
//     }
// } // this is a function which is used to handle the asyncronous work in the middleware function


const asyncHandler = (fn)=>{ return async (req , res , next ) =>{ // this is a middleware function
    try { // this is a try catch block to handle the error
        await fn(req ,res , next) // this is a promise to handle the asyncronous work
    } catch (error) { // this is a catch block to handle the error
        res.status(error.code || 500).json({ // this is a response to the client
            success : false, // this is a property of the response which is used to show the success of the response
            message : error.message, // this is a property of the response which is used to show the message of the response
        }) 
    }
}}


export {asyncHandler};