import { useContext } from "react";
import "./ProductCard.css";
import formatCurrency from "format-currency";
import Rating from "./Rating";
import CartContext from "../context/cart/CartContext"
//import React from "react";
// import './style.css'

//  function App() 
//   const [count, setCount] = React.useState(0)
//   /**
//    * Note: if you ever need the old value of state
//    * to help you determine the new value of state,
//    * you should pass a callback function to your
//    * state setter function instead of using
//    * state directly. This callback function will
//    * receive the old value of state as its parameter,
//    * which you can then use to determine your new
//    * value of state.
//    */
//   function add() {
//       setCount(prevCount => prevCount + 1)
//   }
  
//   function subtract() {
//       setCount(prevCount => prevCount - 1)
//   }

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };
  return (
    <div className='productCard__wrapper'>
      <div>
        <img className='productCard__img' src={product.image} alt='' />
        <h4>{product.name}</h4>
        <div className='ProductCard__price'>
          <h5>{formatCurrency(`${product.price}`, opts)}</h5>
        </div>
        <div className='ProductCard__Rateing'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>
         {/* <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>  */}
        <button
          className='ProductCard__button'
          onClick={() => addToCart(product)}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
