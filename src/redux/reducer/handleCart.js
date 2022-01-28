const addCart = [];

const handleCart = (state = addCart, action) => {
  switch (action.type) {
    case "ADDITEM": 
    return[
      ...state,
      action.payload
    ]
      break;

      case "DELITEM": 
      return state = state.filter((x) => {
        return x.itemId !== action.payload.itemId
      })
        break;

        default: return state;
        break;
  }

};
export default handleCart;
