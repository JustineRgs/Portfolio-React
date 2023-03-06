import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="card_contact">
        <div className="contact">
          <a href="https://github.com/JustineRgs" class="Card-Lien">
            <ion-icon class="Card-Icon" name="logo-github"></ion-icon>
            <br />
            JustineRgs
          </a>
        </div>
        <div className="contact">
          <a href="tel:+33604797675" class="Card-Lien">
            <ion-icon class="Card-Icon" name="call-outline"></ion-icon>
            <br />
            06.04.79.76.75
          </a>
        </div>
      </div>
      <div className="card_contact">
        <div className="contact">
          <a href="mailto:justineragues@gmail.com" class="Card-Lien">
            <ion-icon class="Card-Icon" name="mail-open-outline"></ion-icon>
            <br />
            justineragues@gmail.com
          </a>
        </div>
        <div className="contact">
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
    </>
  );
}
export default Contact;
