import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
 
function Product({name,image,price,rating}) {
  const [{basket},dispatch] =useStateValue();
  const addToBasket= () => {
      //dispatch item into data layer 
      dispatch({
          type:"ADD_TO_BASKET",
          item:{
              name:name,
              image: image,
              price: price,
              rating: rating,

          },
      });
      console.log(basket)

  };
    return (
        <div className="product">
            <div className="product__info">
                <p>{name}</p>
                <p className="product__price"><small>₹</small><strong>{price}</strong></p>
            
            <div className="product__rating">
                {Array(rating)
                .fill()
                .map((_, i)=> (
                    <p>⭐️</p>
                ))}
               
            </div>
            </div>  
            <img src={image}/>

            <button onClick={addToBasket}>Add To Basket  </button>
        </div>
    )
}

export default Product
