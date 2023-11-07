import { UnAuthenticatedError } from "../errors/index.js";

const authentication =async (req, res, next) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }
  throw new UnAuthenticatedError("invalid authentication");
};

export default authentication;
