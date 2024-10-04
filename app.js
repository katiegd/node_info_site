const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// Dynamic way to serve any HTML file in public directory
app.get("/:page", (req, res) => {
  const page = req.params.page;
  const filePath = path.join(__dirname, "public", `${page}.html`);

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
    }
  });
});

// Less dynamic way to load each page in public folder
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

// app.get("/contact", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "contact-me.html"));
// });

// Catch-all for any undefined page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app - Listening on port ${PORT}!`));
