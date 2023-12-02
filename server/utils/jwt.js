import jwt from "jsonwebtoken";

const createAccessJWT = ({ payload }) => {
  const token = jwt.sign(
    {
      userId: payload.user._id,
      userRole: payload.user.role,
    },
    process.env.JWT_SECRET
  );
};

const createRefreshJWT = ({ payload }) => {
  const token = jwt.sign({
    userId: payload.user._id,
    userRole: payload.user.role,
  },process.env.JWT_SECRET,);
};
