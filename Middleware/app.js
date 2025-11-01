const express = require("express");
const app = express();

app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
});

app.use("/random", (req, res, next) => {
    console.log("I am only for random");
    next();
});

//multiple middlewares
const checkToken = (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    }
    res.send("ACCESS DENIED!");
};

//understanding default error handlers of express
app.get("/wrong", (req, res) => {
    abcd=abcd;
})

app.get("/api", checkToken, (req, res) => { //multiple middlewares used here
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("Hi, I am root.")
});

app.get("/random", (req, res) => {
    res.send("this is a random page")
})
app.listen(8080, () => {
    console.log("server listening to port 8080");
});