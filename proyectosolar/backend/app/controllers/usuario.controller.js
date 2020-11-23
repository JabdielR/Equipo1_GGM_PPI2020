const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
require("dotenv").config();

const Usuario = require("../models/usuario.model.js");


// Login de usuario
exports.login = (req, res) => {
  const { body: usuario } = req;
  Usuario.findByEmail(usuario.correo_electronico, (err, data) => {
    if (!err) {
      if (usuario.contrasena == data.contrasena) {

        const payload = {
          id_usuario: data.id_usuario,
          correo_electronico: data.correo_electronico,
          numero_registro: data.numero_registro,
          contrasena: data.contrasena,
          Numero_de_Serie: data.Numero_de_Serie,
          
        }

        let token = jwt.sign(payload, "jwt-secret_token_egresados", {
          expiresIn: 60 * 60
        });

        res.json({ message: "Contraseña Correcta", token})
      } else {
        res.send({
          message: "Contraseña incorrecta",
          auth: false
        })
      }
    } else {
      res.send({ message: "El usuario no existe", auth: false })
    }
  })
}




