require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
//Servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Sebastian Soria",
    titulo: "Proyecto Node.Js whit HBS",
  });
});
app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Sebastian Soria",
    titulo: "Proyecto Node.Js whit HBS",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Sebastian Soria",
    titulo: "Proyecto Node.Js whit HBS",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/public");
});

app.listen(port, () => {
  console.log(`El SERVIDOR esta corriendo en http://localhost:${port}`);
});
