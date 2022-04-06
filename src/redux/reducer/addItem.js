 const addItem = [];

 const addItems = (state = addItem, action) => {
     console.log("addItem", action);
    switch (action.type) {
        case "ADDITEM": return[
            ...state, 
            action.payload
        ]
        
        
        case "DELITEM":
            return state = state.filter((x) => {
                return x.itemId !== action.payload.itemId
            })
           

        default: return state; 
           
    }
 }
 export default addItems;