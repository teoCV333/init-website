import styled from "styled-components";
import img1 from "../assets/img/pngwing.com (61).png";
/* import img2 from "../assets/img/pngwing.com (53).png";
import img3 from "../assets/img/pngwing.com (59).png";
import {BiLogoFacebook} from "react-icons/bi"
import {BsInstagram} from "react-icons/bs"
import {TiSocialTwitter} from "react-icons/ti" */
export function Footer() {
  return (
    <Container>
      <footer className="footer section">
        <div className="shape__small"></div>
        <div className="shape__big"></div>

        <div className="footer__container container grid">
          <div>
            <a href="#" className="footer__logo">
              <img src={img1} alt="logo image" />
              Santuario divino
            </a>

            <p className="footer__description">
              El poder de la magia y la sabiduría
              <br />
              a tu alcance.
            </p>
          </div>

          <div className="footer__content">
            <div>
              <h3 className="footer__title">rituales</h3>

              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">
                  Descuentos
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                  Precios
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">Sobre nosotros</h3>

              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">
                  Eruditos
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                  Noticias
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">Redes</h3>

              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">
                  Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                  Facebook
                  </a>
                </li>
              </ul>
            </div>


           {/*  <div>
              <h3 className="footer__title">Social Media</h3>

              <ul className="footer__social">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="footer__social-link"
                >
                 <BiLogoFacebook/>
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="footer__social-link"
                >
                <BsInstagram/>
                </a>

                <a
                  href="https://twitter.com/"
                  target="_blank"
                  className="footer__social-link"
                >
                  <TiSocialTwitter/>
                </a>
              </ul>
            </div> */}
          </div>
{/*  */}
{/*           <img src={img2} alt="footer image" className="footer__tree-1" /> */}
{/*           <img src={img3} alt="footer image" className="footer__tree-2" /> */}
        </div>

        <span className="footer__copy">&#169; Santuario divino</span>
      </footer>
    </Container>
  );
}
const Container = styled.div`
  .footer {
    position: relative;
    overflow: hidden;

    &__container {
      text-align: center;
      row-gap: 2rem;
    }
    &__logo {
      display: inline-flex;
      align-items: center;
      column-gap: 0.3rem;
      color: var(--first-color);
      font-weight: var(--font-medium);
      margin-bottom: 1.2rem;
      transition: color 0.3s;

      & img {
        width: 20px;
      }
      &:hover {
        color: var(--first-color-alt);
      }
    }
    &__description {
      font-size: var(--small-font-size);
    }
    &__content,
    &__links {
      display: grid;
    }
    &__content {
      grid-template-columns: repeat(3, max-content);
      justify-content: center;
      padding: 0.2rem;
      gap: 2.5rem 2rem;
    }
    &__title {
      font-size: var(--h3-font-size);
      font-weight: var(--font-semi-bold);
      margin-bottom: .5rem;
    }
    &__links {
      row-gap: 0.75rem;
    }
    &__link {
      color: var(--text-color);
      font-size: var(--small-font-size);
      transition: color 0.3s;

      &:hover {
        color: var(--first-color);
      }
    }
    &__social {
      display: flex;
      column-gap: 1.25rem;

      &-link {
        color: var(--first-color);
        font-size: 1.25rem;
        transition: color 0.3s, transform 0.3s;

        &:hover {
          color: var(--first-color-alt);
          transform: translateY(-0.25rem);
        }
      }
    }
    &__tree-1,
    &__tree-2 {
      width: 150px;
      position: absolute;
    }
    &__tree-1 {
      top: 4rem;
      right: -1.5rem;
    }
    &__tree-2 {
      left: -1.5rem;
      bottom: -0.5rem;
    }
    &__copy {
      position: relative;
      display: block;
      margin-top: 8rem;
      font-size: var(--smaller-font-size);
      text-align: center;
      color: var(--text-color-light);
    }
    & .shape__small {
      right: -7rem;
      top: 15rem;
    }
    & .shape__big {
      left: -8rem;
      bottom: -5rem;
    }
  }
`;
