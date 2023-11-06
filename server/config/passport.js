import passport from "passport";
import LocalStrategy from "passport-local";
import { BadRequestError } from "../errors/index.js";
import User from "../models/user.model.js";

passport.use(
  "local",
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email: email });
        if (!user) {
          throw new BadRequestError("Invalid email Id");
        }

        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
          throw new BadRequestError("Incorrect Password");
        }

        return done(null, user, { message: "Authentication successful" });
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  // Serialization logic
  done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
      } catch (err) {
        done(err);
      }
});

export default passport
