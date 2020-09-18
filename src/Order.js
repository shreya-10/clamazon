import React, {useEffect, useState} from 'react'
import { db } from './firebase';
import './Order.css'
import { useStateValue } from './StateProvider';
import OrderProduct from './OrderProduct';
function Order() {
    
    const[{basket,user},dispatch]=useStateValue();
    const[orders,setOrders]=useState([]);
    useEffect(() => {
        if(user)
        { db.collection('users').doc(user?.uid).collection('orders')
        .orderBy('created','desc')
        .onSnapshot(snapshot => 
            setOrders(snapshot.docs.map( doc =>({
                id:doc.id,
                data:doc.data() 
            }) ))); }
            else setOrders([]);
       
    },[user])
        
    return (
        <div className="order">
            <h1>Your Order</h1>
            <div className="orders__product">
                {
                orders?.map((order) => 
                     <OrderProduct order={order}/>
                )}
            </div>

            
        </div>
    )
}

export default Order
