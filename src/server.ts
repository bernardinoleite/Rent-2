import express from "express";

import { catergoriesRoutes } from "./routes/categories.routes";

const app = express()

app.use(express.json())

app.use("/categories", catergoriesRoutes)

app
    .listen(3000, "0.0.0.0")
    .on("listening", () => console.log("Server running on address http://localhost:3000/"))