import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import analyticsRoute from "./routes/analytics.route.js";
import settingsRoute from "./routes/settings.route.js"
import { connectDB } from "./lib/db.js";
import inventoryRoute from "./routes/inventory.route.js";
const app = express();
dotenv.config();


const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/analytics", analyticsRoute);
app.use("/api/settings", settingsRoute)
app.use("api/inventory", inventoryRoute);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
  connectDB();
});
