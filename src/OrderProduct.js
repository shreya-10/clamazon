import React from 'react'
import './OrderProduct.css'
import  moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
function OrderProduct({order}) {
    return (
    <div className="orderproduct">
        <h2>Order</h2>
        <p className="order__date">{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
        <p className="order__id">
            <small>{order.id}</small>
        </p>

            {order.data.basket?.map(item => 
            <CheckoutProduct  className="order__info"
            name={item.name}
            
            price={item.price}
            rating={item.rating}
            image={item.image}
            hideButton />
           
        )}
        <CurrencyFormat
            renderText={(value)=>(
                <>
                <h3 className="order__price">
                Order Total: {value}
                </h3>
                
                </>
            )}
           decimalScale={2}
           value={order.data.amount/100}
           displayType={"text"}
           thousandSeperator={true}
           prefix={"₹"}
            />
        </div>
    )
}

export default OrderProduct
