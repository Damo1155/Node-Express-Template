import { Router } from "express";

export const testRoutes = Router();

testRoutes.get("/test", (_err, res) => {
    res.status(200);
    res.json({ working: true });
    res.end();
});

testRoutes.post("/test", (_err, res) => {
    res.status(200);
    res.send("Test POST Endpoint Working");
    res.end();
});

testRoutes.put("/test", (_err, res) => {
    res.status(200);
    res.send("Test PUT Endpoint Working");
    res.end();
});

testRoutes.delete("/test", (_err, res) => {
    res.status(200);
    res.send("Test DELETE Endpoint Working");
    res.end();
});

testRoutes.patch("/test", (_err, res) => {
    res.status(200);
    res.send("Test PATCH Endpoint Working");
    res.end();
});