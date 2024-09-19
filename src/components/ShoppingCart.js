import React from 'react';
import './ShoppingCart.css';
import '../App.css';
import Footer from './Footer';


//Dummy shopping cart data
let cartItemList = [
  {
    id: 1,
    itemName: "Brake Pad",
    price: 45.29,
    quantity: 3,
    img: ".../public/img/brakes.jpeg"
  },
  {
    id: 2,
    itemName: "New Turbochargers",
    price: 1199.89,
    quantity: 1,
    img: ".../public/img/brake_rotar.jpeg"
  }
]


//Finds the number of items in the cart
function GetItems({props}){
    let numItems = 0;

    //Find quantities
    for(const item in cartItemList){
      numItems += cartItemList[item].quantity;
    }

    return numItems;
}

//Function for defining a CartItem component (that shows up on the table)
function CartItem({props}){
    const {itemName, price, quantity, img} = props;
    return (
      <tr className = "cartItem">
          <td><img src={img}></img>{itemName}</td>
          <td>{price}</td>
          <td><button className = "increment">+</button>  {quantity}  <button className = "increment">-</button></td>
          <td>{price * quantity} <button className="removeButton">X</button></td>
      </tr>
    )
}

//Function for returning subtotal of all items in the cart 
function CalculateSubtotal({props}){
  let subtotal = 0;

  //Goes through each item and adds its price up
  for(const item in cartItemList){
    let itemTotal = cartItemList[item].price * cartItemList[item].quantity;
    subtotal += itemTotal;
  }
  return Math.round(subtotal * 100) / 100;
}

//Function for returning sales tax
function CalculateSalesTax({props}){
  {/*To be added*/}
  return 0.00;
}

//Function for returning shipping costs
function CalculateShipping({props}){
  {/*To be added*/}
  return 0.00;
}

function CalculateTotal({props}){
  return CalculateSubtotal(cartItemList) + CalculateShipping(cartItemList) + CalculateSalesTax(cartItemList);
}

function ShoppingCart() {
  return (
    <div>
      <div className="top-section">
        <h1>Your cart ({GetItems(cartItemList)} items:)</h1>
      </div>
      <div className="cart-items">
        <table>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cartItemList.map((item) => {
            return <CartItem props={item} />;
          })}
        </table>
      </div>
      <br></br>
      <div className="totals">
        Subtotal: {CalculateSubtotal(cartItemList)}
        <hr></hr>
        Sales tax: {CalculateSalesTax(cartItemList)}
        <hr></hr>
        Shipping: {CalculateShipping(cartItemList)}
        <hr></hr>
        Total: {CalculateTotal(cartItemList)}
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