import React from "react";
import "./components.css";

function Banner() {
  return (
    <div className="banner">
      <h1 className="banner_text">Stonners Coming Soon</h1>
      <div className="form__group field">
        <input type="email" className="form__field" placeholder="Notify"/>
      </div>
      <button>Notify us</button>
    </div>
  );
}

export default Banner;
