import { useState } from "react";
import Alert from "./Alert";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conpass, setConpass] = useState("");
  const [error, setError] = useState(true);

  const validarInput = (e) => {
    e.preventDefault();
  
    if (nombre === "" || email === "" || pass === "" || conpass === "") {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <>
      <form onSubmit={validarInput}>
        {/* <h3>{nombre}</h3> */}
        <div className="form-group">
          <input
            placeholder="Nombre"
            className="form-control"
            name="Nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            placeholder="Email"
            className="form-control"
            name="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Contraseña"
            className="form-control"
            name="Contraseña"
            onChange={(e) => setPass(e.target.value)}
          />
          <input
            placeholder="Confirmar tu contraseña"
            className="form-control"
            name="Confirmar tu contraseña"
            onChange={(e) => setConpass(e.target.value)}
          />

          <button className="btn btn-success mt-3" type="submit">
            Registrarse
            
          </button>
          {error ? <p className="error">estasdjsajdsad</p> : <p className="error2">estamos ok</p>}
        </div>
      
      </form>
    </>
  );
};

export default Formulario;
