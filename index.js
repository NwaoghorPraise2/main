// const Client = require("@replit/database");
// const client = new Client();
// await Client.set("key", "value");
// let key = await Client.get("key", { raw: false });
// console.log(key)

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 4500;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use(express.static("./main-covid-main"));



app.listen(process.env.PORT || port, () => {
    // console.log(`server started on ${port}`);
});