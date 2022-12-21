import React from 'react';
const cartContext= React.createContext({
    items:[],
    total:0,
    addItem:(item) =>{},
    removeItem: (id) =>{},
    showItem: () =>{},
    
})
export default cartContext;