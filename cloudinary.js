import { v2 as Cloudinary } from "cloudinary"; // cloudinary module
import fs from "fs"; // file system module to work with the file system in the node.js environment 

Cloudinary.config({ // this is a configuration object of the cloudinary module
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryupload = async (file) => { // this is a function to upload the file to the cloudinary
  try { 
    if (!file) return null; //
    // console.log(file);
    const response = await Cloudinary.uploader.upload(file, {
      resource_type: "auto", // this is a property of the cloudinary module which is used to store the type of the resource
    });
    console.log("file uploaded successfully", response.url); // this is a log to show the success of the file uploaded and the url of the file from the cloudinary
    return response; // this is a response of the function which is used to return the response of the function
  } catch (error) {
    fs.unlinkSync(file); // remove the local saved file  uploaded temporarily
    // console.log(file);
    return null;
  }
};
export { cloudinaryupload };
