import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = ({ item }) => {
  /*console.log("esta aca:",item.icon);*/

  return (
    <div>
      <h1>Crea una cuenta</h1>
      <FontAwesomeIcon icon={item.icon1} className="fb" />
      <FontAwesomeIcon icon={item.icon2} className="git" />
      <FontAwesomeIcon icon={item.icon3} className="in" />
    </div>
  );
};

export default SocialButton;
