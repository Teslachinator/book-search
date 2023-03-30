import React from "react";
import "./popup.css";

const Popup = ({ active, setActive, children }) => {
  const element = document.getElementsByClassName(".popup_bgActive");
  window.addEventListener("scroll", function () {
    if (getComputedStyle(element).opacity === 1) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <div
      className={active ? "popup_bgActive" : "popup_bg"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "popupActive" : "popup"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Popup;
