import { Router } from "express";

export const defaultRoute = Router();

defaultRoute.get("/", (_err, res) => {
    res.status(200);
    res.json({ working: true });
    res.end();
});

defaultRoute.post("/", (_err, res) => {
    res.status(200);
    res.send("Default POST Endpoint Working");
    res.end();
});

defaultRoute.put("/", (_err, res) => {
    res.status(200);
    res.send("Default PUT Endpoint Working");
    res.end();
});

defaultRoute.delete("/", (_err, res) => {
    res.status(200);
    res.send("Default DELETE Endpoint Working");
    res.end();
});

defaultRoute.patch("/", (_err, res) => {
    res.status(200);
    res.send("Default PATCH Endpoint Working");
    res.end();
});