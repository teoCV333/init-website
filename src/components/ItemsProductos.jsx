/* eslint-disable react/prop-types */
export function ItemsProductos({item}) {
    return (
      <article className="items__card">
        <a className="redirectBtn" href={`https://api.whatsapp.com/send?phone=${item.telefono}&text=${item.texto}`}>
          <img
          src={item.img}
          alt="items image"
          className="items__img"
        />
  
        <h3 className="items__name">{item.title}</h3>
        <span className="items__price">{item.precio}</span>
  
        <button className="items__button">
          <i className="ri-heart-3-line"></i>
        </button>
        </a>
        
      </article>
    );
  }
  