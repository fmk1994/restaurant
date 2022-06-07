import React, { useState, createContext } from 'react';

export const MenuContext = createContext();

export function MenuProvider(props) {
	const [items, setItems] = useState({});
	const updateItem = (type, index, count) => {
		const key = `${type.toLowerCase()}-${index}`;
		setItems({...items, [key]: Number(count) });
	};

	return (
		<MenuContext.Provider value={[items, updateItem]}>
			{props.children}
		</MenuContext.Provider>
	);
}
