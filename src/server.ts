import express from "express";

import { router } from "./routes";

const app = express()

app.use(express.json())

app.use(router)

app
    .listen(3000, "0.0.0.0")
    .on("listening", () => console.log("Server running on address http://localhost:3000/"))