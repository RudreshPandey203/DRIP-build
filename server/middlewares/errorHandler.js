import { StatusCodes } from "http-status-codes";
const customErrorHandler = (err, req, res, next) => {
  const defaultError = {
    errorCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    errorMessage: err.message || "Something went wrong ,Please try again later",
  };
  if (err.code && err.code===11000) {
    defaultError.errorCode=StatusCodes.CONFLICT
    defaultError.errorMessage=`${Object.keys(err.keyValue)} field has to be unique`
  }
  res.status(defaultError.errorCode).json({ msg: defaultError.errorMessage });
 
};
export default customErrorHandler;
