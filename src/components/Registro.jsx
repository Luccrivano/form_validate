import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
/*import { useState } from 'react'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faWifi } from '@fortawesome/free-solid-svg-icons';*/

import Formulario from "./Formulario";

import SocialButton from "./SocialButton";

const miItem = {
  icon1: faFacebook,
  icon2: faGithub,
  icon3: faLinkedinIn,
};

const Registro = () => {
  return (
    <div>
      <SocialButton item={miItem} />
      <h5> usa tu email para registrarte</h5>
      <Formulario />
    </div>
  );
};

export default Registro;
