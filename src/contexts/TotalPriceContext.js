import React, {createContext} from 'react';

export const TotalPriceContext = createContext({totalPrice: 0, setTotalPrice: () => undefined});

export function TotalPriceContextProvider({
   totalPrice = 0,
   children,
   ...props
}) {
    const [totalPriceQuery, setTotalPriceQuery] = React.useState(totalPrice);

    return (
        <TotalPriceContext.Provider
            value={{
                totalPrice: totalPriceQuery,
                setTotalPrice: setTotalPriceQuery,
            }}
            {...props}
        >
            {children}
        </TotalPriceContext.Provider>
    );
}
