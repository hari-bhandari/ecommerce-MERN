const multer=require('multer')
const DataURI=require('datauri/parser.js')
const path=require('path')
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).array('image',10);
const dUri = new DataURI();
/**
 * @description This function converts the buffer to data url
 * @param {Object} req containing the field object
 * @returns {String} The data url from the string buffer
 */
const dURIFormatter =  (originalName, buffer) => {
    return dUri.format(path.extname(originalName).toString(), buffer)
};
module.exports= { multerUploads, dURIFormatter };
