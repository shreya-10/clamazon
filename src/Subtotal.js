import './Subtotal.css'
import React from 'react'
import CurrencyFormat from'react-currency-format'
import { useStateValue } from './StateProvider'
import {getBasketTotal} from './reducer'
import {Link, useHistory} from "react-router-dom";

function Subtotal() {
    const history=useHistory();
  const  [{basket,user},dispatch]=useStateValue();
  
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
            Subtotal({basket.length} items):<strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/>This order contains a gift
                </small>
                </>
            )}
           decimalScale={2}
           value={getBasketTotal(basket)}
           displayType={"text"}
           thousandSeperator={true}
           prefix={"₹"}
            />
        <button onClick={e=> history.push(user?'/payment':'/login')} className="checkout__btn">Proceed to Checkout</button>
          
        </div>
    )
}

export default Subtotal
