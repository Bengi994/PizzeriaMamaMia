import { useContext } from 'react';
import CartContext from '../context/CartContext';

const CardPizza = ({ name, price, ingredients, img }) => {

  const { addItemToCart } = useContext(CartContext);  
  const pizza = { id: name, name, price, img }; 
  return (
    <div className="col-md-4 d-flex align-items-stretch mb-4 mt-4">
      <div className="card" style={{ maxWidth: "400px", margin: "auto" }}>
        <img className="card-img-top" src={img} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="m-2">
            <p className="card-text text-center">Ingredientes:</p>
            <p className="card-text text-center">
              🍕
              {ingredients.map((ingredient, index) => (
                <span key={index} style={{ display: 'inline-block', marginRight: '5px' }}>
                  {ingredient},
                </span>
              ))}
            </p>
          </div>

          <p className="card-text text-center fs-4 fw-bold">Precio: ${price.toLocaleString()}</p>
          <div className="d-flex justify-content-between mt-4 mx-4">
            <a href="#" className="btn btn-outline-secondary">Ver Más 👀</a>
            <button 
              onClick={() => addItemToCart(pizza)}  
              className="btn text-white bg-black"
            >
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardPizza;
