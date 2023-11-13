import express from "express";
const app = express();
app.get("/", (req, res) => {
    console.log(req.url);
    return res.send("Hello world server is up and running");
});
app.listen(1337, () => console.log("Server is listening at port 1337"));
