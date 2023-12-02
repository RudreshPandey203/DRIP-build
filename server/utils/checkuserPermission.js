import { UnAuthorizedError } from "../errors/index.js";

const checkUserPermissionforUpadateAndDelete = (requestUser, originalUser) => {
  if (
    requestUser._id === originalUser.toString() ||
    requestUser.role === "admin"
  ) {
    return;
  }
  throw UnAuthorizedError("Not allowed to perform the above action");
};

export default checkUserPermissionforUpadateAndDelete;
