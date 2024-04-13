// const asyncHandler =  (reqHandler)=>{
//    return  (req , res , next)=>{
//         Promise.resolve(reqHandler(req,res,next)).
//         catch((err)=>next(err))
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