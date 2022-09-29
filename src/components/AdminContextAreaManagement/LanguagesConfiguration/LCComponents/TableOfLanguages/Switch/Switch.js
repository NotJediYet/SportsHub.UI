import React, { useState } from "react";
import "./Switch.scss";

export default function Switch({ checked, disabled, handleChange }) {
  const [isToggled, setIsToggled] = useState(checked);

  const onToggle = () => {
    setIsToggled(!isToggled);
    handleChange();
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} disabled={disabled}/>
      <span className="switch" />
    </label>
  );
}