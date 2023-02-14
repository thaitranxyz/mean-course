const express = require("express");
const bp = require("body-parser");
const app = express();
const Post = require("./models/post");
const mongoose = require("mongoose");

require("dotenv").config();

DB_USER = process.env.DB_USER;
DB_PASSWORD = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.0arlv.mongodb.net/node-angular?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log("Failed to connect");
    console.error(error.message);
  });

app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", async (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  await post.save();
  res.status(201).json({ message: "Create succesfully " });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "ga123f8fd",
      title: "1st post from server",
      content: "Coming from server",
    },
    {
      id: "asdifojio112",
      title: "2nd frome server",
      content: "coming from servver tooo",
    },
  ];
  const postss = Post.find();
  console.log(postss);
  res.status(200).json({
    message: "post fetch successfully",
    posts: posts,
  });
});

app.use("/api/users", (req, res, next) => {
  const users = [
    {
      id: "ga123f8fd",
      name: "Jack",
      intro: "Coming from server",
    },
    {
      id: "asdifojio112",
      name: "Thai",
      intro: "coming from servver tooo",
    },
  ];
  res.status(200).json(users);
});

module.exports = app;
