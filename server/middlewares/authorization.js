import { UnAuthorizedError } from "../errors/index.js";

const authorization = async (req, res, next) => {
  const { role } = req.user;
  if (role === "admin") {
    return next();
  }
  throw new UnAuthorizedError("Not allowed to access this route");
};

export default authorization;
