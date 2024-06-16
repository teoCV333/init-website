import styled from "styled-components";
import wiccaImg from "../assets/img/wicca.png"
//import ritualParaEnamorarImg from "../assets/img/ritualparaenamorar.png";

export function Party() {
  return (<Container>
  <section className="party section" id="party">
          <div className="party__container container grid">
            <div className="party__data">
              <h2 className="section__title">
                Atención <br />
                Las 24 horas del día
              </h2>

              <p className="party__description">
                Deja tu mensaje para agendar una cita con uno de nuestros eruditos 
              </p>

              <a href="https://api.whatsapp.com/send?phone=573243888917&text=Quiero%2C%20hablar%2C%20con%2C%20un%2C%20eruditos" className="button">
                Agendar
              </a>
            </div>

            <div className="party__images">
              <img
                src={wiccaImg}
                alt="party image"
                className="party__img"
              />

              {/* <img
                src={ritualParaEnamorarImg}
                alt="party image"
                className="party__star-1"
              />
              <img
                src={ritualParaEnamorarImg}
                alt="party image"
                className="party__star-2"
              /> */}
            </div>
          </div>
        </section>
  </Container>);
}
const Container =styled.div`
  .party{
    position: relative;
    
    &__container{
        row-gap: 5rem;

        & .section__title{
            margin-bottom: 1rem;
            text-align: center;
        }
    }
    &__data{
        text-align: center;
    }
    &__description{
        margin-bottom: 2rem;
    }
    &__images{
        position: relative;
        justify-self: center;
        border-radius: 2rem;
    }
    &__img{
        width: 325px;
    }
    &__star-1,
    &__star-2{
        width: 50px;
        position: absolute;
        transform: rotate(15deg);
    }
    &__star-1{
        top: -3rem;
        left: -.5rem;
        animation: animate-star-1 5s infinite ease-in-out
    }
    &__star-2{
        right: -1.5rem;
        bottom: 2rem;
        animation: animate-star-2 5s infinite ease-in-out
    }
}
`