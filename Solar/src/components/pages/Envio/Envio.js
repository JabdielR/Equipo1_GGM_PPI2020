import React, { Component } from "react";
import "./Form.css";
import { Link } from 'react-router-dom';
import { GrSolaris } from 'react-icons/gr';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Envio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "Mínimo 3 caracteres requeridos" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "Mínimo 3 caracteres requeridos" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Dirección de correo electrónico no válida";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Mínimo 6 caracteres requeridos" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Dirección de envio</h1>
          <h1> <GrSolaris /></h1><br />
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="firstName">Nombre/Quien recibe</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Nombre/Quien recibe"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="firstName">Ciudad</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Ciudad"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="firstName">Dodigo postal</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Codigo postal"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="firstName">Direccion</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Ejemplo"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Siguiente</button>
              <small>¿Necesitas ayuda?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Envio;