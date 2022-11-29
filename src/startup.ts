import helmet from "helmet";
import express, { Router } from "express";
import { json, urlencoded } from "body-parser";

// Routing
import { routes } from "./routes/routingConfig";

// Configuration
const port = 3000;
const app = express();
const router = Router();

app
    .use(helmet())
    .use(json())
    .use(urlencoded({ extended: true }))
    .use((_req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
        
        next();
    })
    .use("/", routes)
    .options("*", (_req, res) => {
        res.send(200);
    })
    .listen(port, (err?: string) => {
        if (err) {
            throw err;
        }

        console.log("Server running!");
    });

export { router };