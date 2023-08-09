// import React, { useState, useEffect } from "react";
// import { DigitsLarge, MediumText, DefaultText } from "../../fonts/Fonts";
// import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
// import cross from "../../images/cross.svg";

// import "./popup.css";

// const Popup = ({ onClose, onClickOverlay, children }) => {
//   const [isClosed, setClosed] = useState(false);

//   useEffect(() => {
//     if (isClosed) {
//       const timeout = setTimeout(() => {
//         onClose();
//       }, 300);

//       return () => clearTimeout(timeout);
//     }
//   }, [isClosed, onClose]);

//   const handleClosePopup = () => {
//     setClosed(true);
//   };

//   return (
//     <>
//       <div
//         className={`overlay ${isClosed ? "overlay--closed" : ""}`}
//         onClick={onClickOverlay}
//       ></div>
//       <div className={`popup ${isClosed ? "popup--closed" : ""}`}>
//         <button
//           className="popup__close"
//           type="button"
//           onClick={handleClosePopup}
//         >
//           <img src={cross} alt="Закрыть" />
//         </button>
//         <div className="popup__container">
//           <div className="popup__content">{children}</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Popup;

import React, { useState, useEffect } from "react";
import { DigitsLarge, MediumText, DefaultText } from "../../fonts/Fonts";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import cross from "../../images/cross.svg";

import "./popup.css";

const Popup = ({ onClose, onClickOverlay, children }) => {
  const [isClosed, setClosed] = useState(false);

  useEffect(() => {
    if (isClosed) {
      const timeout = setTimeout(() => {
        onClose();
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isClosed, onClose]);

  const handleClosePopup = () => {
    setClosed(true);
  };

  return (
    <>
      <div
        className={`overlay ${isClosed ? "overlay--closed" : ""}`}
        onClick={onClickOverlay}
      ></div>
      <div className={`popup ${isClosed ? "popup--closed" : ""}`}>
        <button
          className="popup__close"
          type="button"
          onClick={handleClosePopup}
        >
          <img src={cross} alt="Закрыть" />
        </button>
        <div className="popup__content-centered">{children}</div>
      </div>
    </>
  );
};

export default Popup;
