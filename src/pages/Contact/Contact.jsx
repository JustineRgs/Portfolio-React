import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="card_contact">
        <div className="contact">
          <a href="https://github.com/JustineRgs" target="_blank">
            <ion-icon class="Card-Icon" name="logo-github"></ion-icon>
            <br />
            JustineRgs
          </a>
        </div>
        <div className="contact">
          <a href="tel:+33604797675">
            <ion-icon class="Card-Icon" name="call-outline"></ion-icon>
            <br />
            06.04.79.76.75
          </a>
        </div>
      </div>
      <div className="card_contact">
        <div className="contact">
          <a href="mailto:justineragues@gmail.com" target="_blank">
            <ion-icon class="Card-Icon" name="mail-open-outline"></ion-icon>
            <br />
            justineragues@gmail.com
          </a>
        </div>
        <div className="contact">
          <a href="https://www.linkedin.com/in/justine-ragues" target="_blank">
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
