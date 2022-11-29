import express from "express";

// Controllers
import { testRoutes } from "./test";
import { defaultRoute } from "./default";

// Configuration
export const routes = express.Router();

routes
    .use(defaultRoute)
    .use(testRoutes);