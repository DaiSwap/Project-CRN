import React from "react";
import dandeli1 from "./dandeli-1.png";
import effortlessStreamlinedEventSolutions from "./effortless-streamlined-event-solutions.png";
import image from "./image.svg";
import indofil1 from "./indofil-1.png";
import jnera1 from "./jnera-1.png";
import "./style.css";
import sugamya1 from "./sugamya-1.png";
import vector12 from "./vector-1-2.svg";
import vector13 from "./vector-1-3.svg";
import vector14 from "./vector-1-4.svg";
import vector15 from "./vector-1-5.svg";
import vector16 from "./vector-1-6.svg";
import vector1 from "./vector-1.svg";
import vector2 from "./vector-2.svg";

export const DesktopLandingPage = () => {
  return (
    <div className="desktop-landing-page">
      <div className="div">
        <div className="nav-bar">
          <div className="logo">
            <div className="overlap-group">
              <div className="text-wrapper">GroupGuru.</div>

              <div className="text-wrapper-2">make it happen</div>
            </div>
          </div>

          <div className="frame">
            <div className="text-wrapper-3">Contact</div>
          </div>

          <div className="div-wrapper">
            <div className="text-wrapper-4">FAQ</div>
          </div>

          <div className="frame-2">
            <div className="text-wrapper-5">About</div>
          </div>
        </div>

        <div className="hero-section">
          <img
            className="effortless"
            alt="Effortless"
            src={effortlessStreamlinedEventSolutions}
          />

          <div className="overlap">
            <div className="rectangle" />

            <div className="frame-3">
              <div className="text-wrapper-6">Know more</div>
            </div>
          </div>
        </div>

        <div className="about">
          <div className="trusted-by">Trusted By</div>

          <div className="overlap-2">
            <div className="rectangle-2" />

            <img className="dandeli" alt="Dandeli" src={dandeli1} />

            <img className="indofil" alt="Indofil" src={indofil1} />

            <div className="frame-4">
              <div className="text-wrapper-7">The Santosa</div>
            </div>

            <img className="sugamya" alt="Sugamya" src={sugamya1} />

            <img className="jnera" alt="Jnera" src={jnera1} />
          </div>
        </div>

        <div className="faqs-section">
          <div className="FA-qs">Faqs</div>

          <div className="faq">
            <div className="headline-button">
              <div className="question">
                <div className="accordian-faqs">What is GroupGuru?</div>
              </div>

              <div className="button-drop">
                <img className="vector" alt="Vector" src={vector1} />
              </div>
            </div>
          </div>

          <div className="faq">
            <div className="headline-button">
              <div className="question">
                <p className="p">
                  Why should we choose your company over traditional event
                  planning services?
                </p>
              </div>

              <div className="button-drop">
                <img className="vector" alt="Vector" src={image} />
              </div>
            </div>
          </div>

          <div className="faq">
            <div className="headline-button">
              <div className="question">
                <p className="accordian-faqs">
                  How does your service save us time and money?
                </p>
              </div>

              <div className="button-drop">
                <img className="vector" alt="Vector" src={vector12} />
              </div>
            </div>
          </div>

          <div className="faq">
            <div className="headline-button">
              <div className="question">
                <p className="p">
                  Can we customize the event to match our company’s brand and
                  requirements?
                </p>
              </div>

              <div className="button-drop">
                <img className="vector" alt="Vector" src={vector13} />
              </div>
            </div>
          </div>

          <div className="faq">
            <div className="headline-button">
              <div className="question">
                <p className="accordian-faqs">
                  What is the booking process like?
                </p>
              </div>

              <div className="button-drop">
                <img className="vector" alt="Vector" src={vector14} />
              </div>
            </div>
          </div>

          <div className="faq">
            <div className="headline-button">
              <div className="question">
                <p className="accordian-faqs">
                  Are there any hidden fees or additional charges?
                </p>
              </div>

              <div className="button-drop">
                <img className="vector" alt="Vector" src={vector15} />
              </div>
            </div>
          </div>

          <div className="faq">
            <div className="headline-button">
              <div className="question">
                <p className="accordian-faqs">
                  What happens if we need to cancel or reschedule the event?
                </p>
              </div>

              <div className="button-drop">
                <img className="vector" alt="Vector" src={vector16} />
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-row">
            <div className="footer-copyright">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper">GroupGuru.</div>

                  <div className="text-wrapper-2">make it happen</div>
                </div>
              </div>
            </div>

            <a
              href="https://forms.gle/Mq3TvUyLpp5C7Z9o6"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="text-wrapper-8">Contact us for further inquiry</p>
            </a>

            <div className="social-media-links">
              <div className="social-media-icon" />

              <div className="social-media-icon" />

              <div className="social-media-icon" />
            </div>
          </div>

          <img className="img" alt="Vector" src={vector2} />

          <div className="footer-column">
            <a
              className="text-wrapper-9"
              href="https://forms.gle/Mq3TvUyLpp5C7Z9o6"
              rel="noopener noreferrer"
              target="_blank"
            >
              Submit an inquiry
            </a>
          </div>

          <div className="mail-us">
            <p className="mail-us-2">Get in touch via email</p>
          </div>
        </footer>
      </div>
    </div>
  );
};
