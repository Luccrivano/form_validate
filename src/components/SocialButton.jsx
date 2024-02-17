import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook }  from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Registro from './Registro'



const SocialButton = ({item}) => {
    /*console.log("esta aca:",item.icon);*/
  
  
  return (
    <div>
      <h1>Crea una cuenta</h1>  
      <FontAwesomeIcon icon={item.icon1} className="fb" /> 
      <FontAwesomeIcon icon={item.icon2} className="git" />
      <FontAwesomeIcon icon={item.icon3} className="in" />   
      
    </div>
  )
}

export default SocialButton
