import styled from "styled-components";
//import img1 from "../assets/img/pngwing.com (58).png"
export function About() {
  return (<Container>
   <section className="about section" id="about">
          <div className="shape__small"></div>
          <div className="shape__big"></div>

          <div className="about__container container grid">
            <div className="about__data">
              <h2 className="section__title">
                Acerca de El templo divino
              </h2>

              <p className="about__description">
                Descripción
              </p>

              <a href="#" className="button">
                Saber más!!!
              </a>
            </div>

           {/*  <img
              src={img1}
              alt="about image"
              className="about__img"
            /> */}
          </div>
        </section>
  </Container>);
}
const Container =styled.div`
  .about{
    position: relative;

    &__container{
        row-gap: 3.5rem;

        & .section__title{
            margin-bottom: 1rem;
        }
    }
    &__data{
        text-align: center;
    }
    &__description{
        margin-bottom: 2rem;
    }
    &__img{
        width: 300px;
        justify-self: center;
    }
    & .shape__small{
        top: 2rem;
        right: -3rem;
    }
    & .shape__big{
        bottom: 0;
        left: -8rem;
    }
}
`