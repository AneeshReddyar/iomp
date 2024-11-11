/** TAC SERVICE BOOKING APP LOGO/TITLE BRANDING COMPONENT **/
/*
 * This component represents the landing brand section for the TAC Service Booking App.
 * It also serves as the visual introduction to the app, providing the logo, title, and slogan.
 */

/* Importing the necessary dependencies */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

const LandingBrand = () => {
  return (
    <section className="brand-section">
      <div className="brand-container">
        <h2 className="brand-title">
          <span className="logo-container">
            A
            <span className="logo">
              <FontAwesomeIcon icon={faCar} />
            </span>
            C
          </span>
          <span className="title">Auto care</span>
        </h2>
        <p className="slogan">Door step car service!</p>
      </div>
    </section>
  );
};

export default LandingBrand;
