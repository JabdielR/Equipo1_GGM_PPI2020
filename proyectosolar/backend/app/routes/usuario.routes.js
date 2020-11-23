module.exports = app => {
  const usuario = require("../controllers/usuario.controller.js");

  //Login Customer
  


app.post("/login", usuario.login)



};
