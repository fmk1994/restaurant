import { useState, createContext } from 'react';
export const MenuContext = createContext();
export function MenuProvider(props) {
    const [items, setItems] = useState({});
    const updateItem = (type, index, count) => {
        const key = `${type.toLowerCase()}-${index}`;
        setItems(Object.assign(Object.assign({}, items), { [key]: Number(count) }));
    };
    return value = { [items, updateItem]:  } >
        { props, : .children }
        < /MenuContext.Provider>;
    ;
}
