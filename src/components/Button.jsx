import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="button" style={{ textAlign: "center" }}>
      {children}
    </div>
  );
};

export default Button;
