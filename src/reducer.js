import { Switch } from "@material-ui/core";

export const initialState={
    basket:[],
    user:null
};
//selector
export const  getBasketTotal =(basket) =>  basket?.reduce((amount,item) => amount+item.price,0);

const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket, action.item],

            };
        case 'REMOVE_FROM_BASKET':
             const index=state.basket.findIndex(
                 (basketItem)=>basketItem.name===action.name
             );
            let newBasket=[...state.basket]
            if(index>=0)
            newBasket.splice(index,1)
            return{
                ...state,
                basket:newBasket,
            }
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }

        case 'EMPTY_BASKET':
            return{
               ...state,
               basket:[]
            }
            default:
                return state;
                
    }
};
export  default reducer;