import styled from "styled-components";
import { dataProductos } from "../data/DataEstatica";
import { ItemsProductos } from "../components/ItemsProductos";
export function Productos() {
  return (
    <Container>
      <section className="items section" id="items">
        <div className="shape__big"></div>

        <h2 className="section__title">
        Que deseas realizar?
        </h2>

        <div className="items__container container grid">
          {dataProductos.map((item, index) => {
            return <ItemsProductos item={item} key={index} />;
          })}
        </div>
      </section>
    </Container>
  );
}
const Container = styled.div`
  .items {
    position: relative;

    &__container {
      padding-top: 2rem;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      gap: 3rem 1.5rem;
    }
    &__card {
      position: relative;
      background-color: var(--container-color);
      border-radius: 1.5rem;
      padding: 4rem 1.25rem 1.25rem;
      box-shadow: 0 4px 16px hsla(22, 10%, 2%, 0.3);
      text-align: center;
      margin-top: 4rem;
      & .items__img {
        transition: transform 0.3s ease;
        transform: translateY(0.5rem);
      }
      &:hover .items__img {
        transform: translateY(-0.5rem);
      }
      &:hover .items__button{
        background-color: var(--first-color-alt);
      }
    }
    &__img {
      width: 80px;
      position: absolute;
      inset: 0;
      top: -5rem;
      margin: 0 auto;
      transition: transform 0.3s;
    }
    &__name {
      font-size: var(--normal-font-size);
      font-weight: var(--font-medium);
      margin-bottom: 0.25rem;
    }
    &__price {
      display: block;
      font-weight: var(--font-semi-bold);
      color: var(--first-color);
      margin-bottom: 0.5rem;
    }
    &__button {
      display: inline-flex;
      background-color: var(--first-color);
      color: var(--white-color);
      padding: 0.25rem 1.5rem;
      border-radius: 4rem;
      cursor: pointer;
      transition: background 0.3s;
      border: none;
      outline: none;

      & i {
        font-size: 1.25rem;
      }
      &:hover {
        background-color: var(--first-color-alt);
      }
    }
    & .shape__big {
      bottom: -8rem;
      right: -8rem;
    }
  }
`;
