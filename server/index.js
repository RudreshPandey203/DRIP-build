import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
dotenv.config();
import session from "express-session";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import passport from "passport";
import fileUpload from "express-fileupload";
import cloudinary from "cloudinary";

//Routes
import userRoutes from "./routes/user.route.js";
import productRoutes from "./routes/product.route.js";
import reviewRoutes from "./routes/review.route.js";

//DB connection
import connectDB from "./config/database.js";

//Middlewares
import notFoundHandler from "./middlewares/notFound.js";
import customErrorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true }));

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use(
  session({
    store: MongoStore.create({ mongoUrl: process.env.MONGO_DB }),
    name: "session",
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);

app.use(notFoundHandler);
app.use(customErrorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_DB);
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
