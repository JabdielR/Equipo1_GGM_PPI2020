import React, { Component } from "react";
import "./Form.css";
import { GrSolaris } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

class Acceder extends Component {
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

  signIn = e => {
    e.preventDefault();

    
    axios.post("http://localhost:3001/login", {
      correo_electronico: this.state.email,
      contrasena: this.state.password
    })
      .then(res => {
        console.log(res);
        if (res.data.auth !== false) {
          if (res.data.token) {
            localStorage.setItem("jwt-secret_token_biosolar", res.data.token);
            this.props.history.push("/services");
          } 
         
        } else {
          alert("Correo o contraseña incorrectos");
        }
      }).catch(err => {
        throw (err)
      })
   
  }

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
          <h1>Acceder</h1>
           <h1> <GrSolaris /></h1><br />
          <form onSubmit={this.signIn} noValidate>
            <div className="email">
              <label htmlFor="email">Correo o nombre de usuario</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Correo o nombre de usuario"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Contraseña</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Contraseña"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit" onClick={this.signIn}>Acceder</button>
              <Link to='/registrate'>
                <small>Crear cuenta</small>
              </Link>
              
              
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Acceder;
