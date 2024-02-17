import React from 'react'
import Formulario from './Formulario'


const Alert = ({error,errorPass}) => {
  // console.log("aca:",error) 
  // console.log("aca:",errorPass) 
  return (
    <>
       {/* {console.log(mensaje)} */}
       {error ? <p  className="error">Completa todos los campos</p> : <p className="error2">El Regidtro fue exitoso</p>}
       {errorPass ? <p className="error">Las contraseñas no coinciden</p> : <p className="error2">ok</p>}  

    
    </>
  )
}

export default Alert
