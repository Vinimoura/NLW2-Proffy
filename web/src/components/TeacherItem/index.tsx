import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      
      <header>
        <img src="https://avatars1.githubusercontent.com/u/61834475?s=460&u=70c1e1887730301017571eabf514e679135b9c08&v=4" alt="Adriana Lima" />
        <div>
          <strong>Adriana Lima</strong>
          <span>Webmaster</span>
        </div>
      </header>
      
      <p>
      Tenho alguns anos de experiência na área de web design e tenho apreciação pelo estudo de tecnologias, principalmente de sistemas para web e mobile.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>$ 50,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp Icon" />
          Contact
        </button>
      </footer>
    
    </article>
  );
}

export default TeacherItem;
