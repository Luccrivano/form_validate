import React from "react";
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Formulario from "./Formulario";


const Registro = () => {
  return (
    
    <div>
      <FontAwesomeIcon icon={faFacebook} className="fb" />  
      <FontAwesomeIcon icon={faGithub} className="git" /> 
      <FontAwesomeIcon icon={faLinkedinIn} className="in" />
      <h5> usa tu email para registrarte</h5>
      <Formulario />
 
    </div>
  );
};

export default Registro;
