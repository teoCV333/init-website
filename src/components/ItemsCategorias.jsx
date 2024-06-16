/* eslint-disable react/prop-types */
export function ItemsCategorias({item}) {
  return (
  
      <div className="category__card">
        <a className="redirectBtn" href={`https://api.whatsapp.com/send?phone=${item.telefono}&text=${item.texto}`}>
          <img src={item.img} alt="category image" className="category__img" />

        <h3 className="category__title">{item.title}</h3>
        <p className="category__description">
          {item.descripcion}
        </p>
        </a>
      </div>
    
  );
}
