import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { GrSolaris } from 'react-icons/gr';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Suscribete para recibir las últimas noticias de las actualizaciones y cambios en BioSolar
        </p>
        <p className='footer-subscription-text'>
        Puede anular la suscripción en cualquier momento. 
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Tu correo electrónico'
            />
            <Button buttonStyle='btn--outline'>Suscribirse</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sobre nosotros</h2>
            <Link to='/sign-up'>Como funciona</Link>
            <Link to='/'>Testimonios</Link>
            <Link to='/'>Aliados </Link>
            <Link to='/'>Políticas de privacidad</Link>
            <Link to='/'>Términos de servicio </Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contáctenos</h2>
            <Link to='/'>Contacto</Link>
            <Link to='/'>Soporte </Link>
            <Link to='/'>Donar</Link>
            <Link to='/'>Patrocinar</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Aliados</h2>
            <Link to='/https://www.youtube.com/channel/UCkZECHTELpjTt7L4mTgBhYw?view_as=subscriber' >Iegamar</Link>
            <Link to='/'>Github</Link>
            <Link to='/'>P.C.J.I.C</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Redes Sociales</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <GrSolaris className='navbar-icon' />
              BioSolar
            </Link>
          </div>
          <small className='website-rights'>BioSolar © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={'https://www.youtube.com/channel/UCkZECHTELpjTt7L4mTgBhYw?view_as=subscriber'}
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
