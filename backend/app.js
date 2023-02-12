const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
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
  res.status(200).json(posts);
});

module.exports = app;
