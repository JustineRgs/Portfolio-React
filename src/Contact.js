import "./Contact.css";
import { useState } from "react";

export default function Contact({}) {
  return (
    <div class="Card">
      <h1 class="Card-Title">Contactez-moi!</h1>
      <div class="Card-Content">
        <div class="Card-Description">
          <div class="Card-Element">
            <a
              href="https://www.google.fr/maps/place/Montpellier/@43.610073,3.83915,13z/data=!3m1!4b1!4m5!3m4!1s0x12b6af0725dd9db1:0xad8756742894e802!8m2!3d43.610769!4d3.876716"
              class="Card-Lien"
            >
              <ion-icon class="Card-Icon" name="pin-outline"></ion-icon>
              <br />
              Montpellier, France
            </a>
          </div>

          <div class="Card-Element">
            <a href="https://github.com/JustineRgs" class="Card-Lien">
              <ion-icon class="Card-Icon" name="logo-github"></ion-icon>
              <br />
              JustineRgs
            </a>
          </div>
        </div>

        <div class="Card-Description--Secondary">
          <a href="tel:+33604797675" class="Card-Lien">
            <ion-icon class="Card-Icon" name="call-outline"></ion-icon>
            <br />
            06.04.79.76.75
          </a>
        </div>

        <div class="Card-Description">
          <div class="Card-Element">
            <a href="mailto:justineragues@gmail.com" class="Card-Lien">
              <ion-icon class="Card-Icon" name="mail-open-outline"></ion-icon>
              <br />
              justineragues@gmail.com
            </a>
          </div>
          <div class="Card-Element">
            <a
              href="https://www.linkedin.com/in/justine-ragues"
              class="Card-Lien"
            >
              <ion-icon class="Card-Icon" name="logo-linkedin"></ion-icon>
              <br />
              Justine-Ragues
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
