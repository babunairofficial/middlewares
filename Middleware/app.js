const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

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
    throw new ExpressError(401, "Access Denied!"); //following the parameter protocols of custom error class
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
});

app.use((err, req, res, next) => {
    console.log("--------ERROR--------");
    next(err); //if err not passed, next() would look for next non-error handling middleware
});

app.listen(8080, () => {
    console.log("server listening to port 8080");
});