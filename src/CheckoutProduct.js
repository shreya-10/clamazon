import React, { forwardRef } from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
const CheckoutProduct =forwardRef( ({name,price,rating,image,hideButton},ref) =>{

    const [{basket},dispatch] =useStateValue();
//state/{basket}- pull out info dispatch-//modify basket
    const removeFromBasket=() =>
{
    //Remove item from basket 
    dispatch({
        type:"REMOVE_FROM_BASKET",
        name:name,
    })
}
   return (
        <div className="checkoutProduct" ref={ref}>
            <img className="checkoutProduct__img" src={image}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{name}</p>
                <p><small>₹</small><strong>{price}</strong></p>
                <div className="checkoutProduct__rating">
                        {Array(rating)
                        .fill()
                        .map((_,i) =>  (
                            <p>⭐️</p>
                        ))}
                        
                </div>
                {!hideButton && (
                <button onClick={removeFromBasket} className="checkoutProductRemove__btn">Remove from Basket</button>)}
            </div>
        </div>
    )
});

export default CheckoutProduct
