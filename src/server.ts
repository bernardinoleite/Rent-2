import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express()

app.use(express.json())

app.use("/categories", categoriesRoutes)

app
    .listen(3000, "0.0.0.0")
    .on("listening", () => console.log("Server running on address http://localhost:3000/"))