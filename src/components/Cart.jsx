import { useState } from 'react';
import { pizzaCart } from '../data/pizzas';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart.map(pizza => ({ ...pizza, quantity: 1 }))); 

  const increaseQuantity = (id) => {
    setCart(cart.map(pizza =>
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart
      .map(pizza =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
      )
      .filter(pizza => pizza.quantity > 0)
    );
  };

  const totalPrice = cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Carrito de Compras</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {cart.map(pizza => (
          <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '18rem', margin: '10px' }} key={pizza.id}>
            <img className="card-img-top" src={pizza.img} alt={pizza.name} />
            <div className="card-body text-center">
              <h5 className="card-title">{pizza.name}</h5>
              <p className="card-text">Precio: ${pizza.price.toLocaleString()}</p>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <button 
                  className="btn btn-outline-primary" 
                  style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.2rem' }} 
                  onClick={() => decreaseQuantity(pizza.id)}>
                  -
                </button>
                <span className="mx-3 fs-4">{pizza.quantity}</span>
                <button 
                  className="btn btn-outline-primary" 
                  style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.2rem' }} 
                  onClick={() => increaseQuantity(pizza.id)}>
                  +
                </button>
              </div>
              <p className="card-text text-muted">Subtotal: ${(pizza.price * pizza.quantity).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center align-items-center mt-4 p-4 border-top">
        <h3 className="me-3">Total: ${totalPrice.toLocaleString()}</h3>
        <button className="btn btn-success btn-lg">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;