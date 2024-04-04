const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();
 const apiKey = process.env.API_KEY;
let fetch;
import('node-fetch').then(nodeFetch => {
  fetch = nodeFetch.default;
});

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${time} - ${req.method} request for ${req.url}`);
  next();
};

app.use(logRoutes);
const distPath = path.join(__dirname, "../giphy-search/dist");
console.log(distPath);
app.use(express.static(distPath));

app.get("/api/gifs", async (req, res) => {
   
    console.log("apikey:", apiKey)
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${3}`;
  const response = await fetch(url);
    const json = await response.json();
    console.log(json)
  res.json(json);
});

app.get("/api/gifs/search", async (req, res) => {

  const search = req.query.search;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}`;
  const response = await fetch(url);
  const json = await response.json();
  res.json(json);
});


app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

