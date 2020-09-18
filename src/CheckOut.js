import React from 'react'
import './CheckOut.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import FlipMove from 'react-flip-move';

function CheckOut() {
    const [{basket , user},dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
              
                <div>
                    <h3>Hello, {user?.email} </h3>
                    <h2 className="checkout__title"> Your Shopping Basket</h2> 
                      <FlipMove>
                    {basket.map(item => (
                        <CheckoutProduct
                        key={item.name}
                        name={item.name}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                        />
                    ))}
                    </FlipMove>
                    {/*BASKET ITEM */}

                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default CheckOut
