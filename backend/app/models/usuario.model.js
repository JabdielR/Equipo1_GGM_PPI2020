const sql = require("../config/db.js");

// constructor
const Usuario = function (usuario) {
  this.id_usuario = usuario.id_usuario,
  this.correo_electronico = usuario.correo_electronico,
  this.numero_registro = usuario.numero_registro,
  this.contrasena = usuario.contrasena,
  this.Numero_de_Serie = usuario.Numero_de_Serie
};

Usuario.create = (newUsuario, result) => {
  sql.query("INSERT INTO usuarios SET ?", newUsuario, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    //console.log("Usuario creado: ", { id: res.insertId, ...newUsuario });
    result(null, { id: res.insertId, ...newUsuario });
  });
};

Usuario.findById = (usuarioId, result) => {
  sql.query(`SELECT * FROM usuarios WHERE identificacion_usu = ${usuarioId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      //console.log("Usuario encontrado: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "Usuario no encontrado" }, "no encontrado");
  });
};

Usuario.findByEmail = (usuarioEmail, result) => {
  sql.query(`SELECT * FROM login WHERE correo_electronico = "${usuarioEmail}"`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      //console.log("Usuario encontrado: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "Usuario no encontrado" }, "no encontrado");
  });
};



module.exports = Usuario;
