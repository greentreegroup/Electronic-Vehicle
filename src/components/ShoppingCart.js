import React from 'react';
import './ShoppingCart.css';
import '../App.css';
import Footer from './Footer';


//Dummy shopping cart data
const cartItems = [
  {
    id: 1,
    itemName: "Brake Pad",
    price: 45.29,
    quantity: 1,
    total: 45.29,
    img: ".../public/img/brakes.jpeg"
  },
  {
    id: 2,
    itemName: "New Turbochargers",
    price: 1199.89,
    quantity: 1,
    total: 1199.89,
    img: ".../public/img/brake_rotar.jpeg"
  }
]



//Function for defining a CartItem component
function CartItem({props}){
    const {itemName, price, quantity, total, img} = props;
    return (
      <tr className = "cartItem">
          <td><img src={img}></img>{itemName}</td>
          <td>{price}</td>
          <td>{quantity}</td>
          <td>{total}</td>
      </tr>
    )
}


function ShoppingCart() {
  return (
    <div>
      <div className="top-section">
        <h1>Your cart:</h1>
      </div>
      <div className="cart-items">
        <table>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cartItems.map((item) => {
            return <CartItem props={item} />;
          })}
        </table>
      </div>
      <div className="totals">
        Subtotal:
        <hr></hr>
        Sales tax:
        <hr></hr>
        Total:
        <hr></hr>
        <button className = "checkout">Check Out</button>          
      </div>
      <div className="next-section d-flex">
      </div>
      <Footer />
    </div>
  );
}

export default ShoppingCart;