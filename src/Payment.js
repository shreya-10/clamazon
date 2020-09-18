import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios'
import { db } from "./firebase";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history=useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [processing, setProccessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const[clientSecret,setClientSecret]=useState(true);
  useEffect(() => {
      let finalamt=getBasketTotal(basket)*100;
      finalamt=Math.round(finalamt);
     const getClientSecret =async () =>
     {
         const finalurl="/payments/create?total="+finalamt;
         const response= await axios({
             method:'post',
             url:finalurl,
         });
         setClientSecret(response.data.clientSecret)
     };
     getClientSecret();
  }, [basket])

  console.log('client secret>>',clientSecret);
  const handleSubmit =async (e) => {
      e.preventDefault(); //prevent refreshing
      setProccessing(true); //once true button is disabled click buy button only once

     const  payload=await stripe.confirmCardPayment(clientSecret,{
         payment_method:{
             card:elements.getElement(CardElement)
         }
     }).then(({paymentIntent}) =>{

        db.collection('users').doc(user?.uid).collection('orders').
        doc(paymentIntent.id).set({
            basket:basket,
            amount: paymentIntent.amount,
            created:paymentIntent.created
        });
         setSucceeded(true)
         setProccessing(false)
         setError(null)
        dispatch({
            type:'EMPTY_BASKET'
        })
         history.replace('./order')  //do not want user to come back to payment 
     })

  };
  
   const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  
  
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout
          <Link to="./checkout">({basket?.length} items)</Link>
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email} </p>
            <p>Saket,New Delhi</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items And Delivery</h3>
          </div>
          <div className="payment__product">
            {basket.map((item) => (
              <CheckoutProduct
                name={item.name}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h4>Order Total:{value}</h4>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

            {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
