import { StatusCodes } from "http-status-codes";
class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.CONFLICT;
  }
}

export default ConflictError;