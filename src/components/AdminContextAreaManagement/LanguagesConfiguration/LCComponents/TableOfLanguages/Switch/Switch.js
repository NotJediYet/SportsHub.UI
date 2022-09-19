import React, { useState } from "react";
import "./Switch.scss";

export default function Switch({ checked, handleChange }) {
  const [isToggled, setIsToggled] = useState(checked);

  const onToggle = () => {
    setIsToggled(!isToggled);
    handleChange();
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}