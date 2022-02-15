import React from "react";
import "./footer_style.css";
import facebook from "./../../../assets/img/facebook_icon.png";
import instagram from "./../../../assets/img/instagram_icon.png";
import twitter from "./../../../assets/img/twitter_icon.png";
import whatsapp from "./../../../assets/img/whatsapp_icon.png";

export const Footer = () => {
  return (
    <footer>
      <a
        href="https://www.facebook.com/TinyBlueGM"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer__img" src={facebook} alt="facebook_icon" />
      </a>
      <a
        href="https://www.instagram.com/karengrismuz/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer__img" src={instagram} alt="instagram_icon" />
      </a>
      <a
        href="https://twitter.com/karengrismuz"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer__img" src={twitter} alt="twitter_icon" />
      </a>
      <a href="https://wa.me/+573128438059" target="_blank" rel="noreferrer">
        <img className="footer__img" src={whatsapp} alt="whatsapp_icon" />
      </a>
    </footer>
  );
};
