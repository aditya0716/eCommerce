import express from "express";

import dotenv from "dotenv";

import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

import { errorHandler, notFound } from "./middleware/middleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json()); //allow to fetch json data in body

app.get("/", (req, res) => {
  res.send("API ISsssS Running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(`SERVER Running in ${process.env.NODE_ENV} mode on port:${PORT}`)
);
