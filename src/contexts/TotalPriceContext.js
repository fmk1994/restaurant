import React, {createContext} from 'react';




export const TotalPriceContext = createContext();


export function TotalPriceProvider(props){
 
return(
<TotalPriceContext.Provider value={totalPrice}>
   {props.children}
</TotalPriceContext.Provider>

);
};