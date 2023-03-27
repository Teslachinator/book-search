import React, { Children } from "react";
import "./popup.css";

const Popup = ({
  book,
  active,
  setActive,
  thumbnail,
  categories,
  title,
  description,
  authors,
  id,
  children,
}) => {
  return (
    <div
      className={active ? "popup_bg popActive" : "popup_bg"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "popup popActive" : "popup"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Popup;
