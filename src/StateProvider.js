import React, { createContext, useContext, useReducer} from "react";


//prepares the datalayer
export const StateContext=createContext();
//Wrap our app and provide the Data layer to every component
export const StateProvider=({reducer,initialState,children}
    ) => (
        <StateContext.Provider value={useReducer(reducer, initialState)
        }>
            {children}
        </StateContext.Provider>

    );
    //Pull information from datalayer
export const useStateValue =() => useContext(StateContext); 