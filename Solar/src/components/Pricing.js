import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Precios del servicio</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Básico</h3>
                <h4>$8.99</h4>
                <p>por año</p>
                <ul className='pricing__container-features'>
                  <li>Permite solo 1 instalacion</li>
                  <li>No incluye analisis estadistico</li>
                  <li>No incluye informe de actividad</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Elija plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Pupular</h3>
                <h4>$29.99</h4>
                <p>por año</p>
                <ul className='pricing__container-features'>
                  <li>Permite 3 instalaciones</li>
                  <li>No incluye informe de actividad</li>
                  <li>Recomendado</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Elija plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Completo</h3>
                <h4>$99.99</h4>
                <p>por año</p>
                <ul className='pricing__container-features'>
                  <li>Instalaciones ilimitadas</li>
                  <li>Ofrece todos los servicios</li>
                  <li>Premium</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Elija plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
