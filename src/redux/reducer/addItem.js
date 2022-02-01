 const addItem = [];

 const addItems = (state = addItem, action) => {
     console.log("addItem", action);
    switch (action.type) {
        case "ADDITEM": return[
            ...state, 
            action.payload
        ]
         break;
        
        case "DELITEM":
            return state = state.filter((x) => {
                return x.itemid !== action.payload.itemId
            })
            break;

        default: return state; 
            break;
    }
 }
 export default addItems;