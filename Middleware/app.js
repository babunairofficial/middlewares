const express = require("express");
const app = express();

app.use((req, res) => {
    let {query} = req.query;
    console.log(query);
    console.log("hi, I am middleware");
    res.send("middleware finished");
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