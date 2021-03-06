import React, { createContext, useReducer, useContext } from "react"

// any variables we depend on for UI/flow we must pre-set
const initialData = {
  authOk: false, 
  name: "", 
  tasks: [], 
  addresses:[], 
  currentAddress:{}, 
  alert: "", 
  wtp:[],
  totalCost:0,
  basketList:[{email:""}, {basket:[]}],
  basketCount:0
}

/*! IMPORTANT all your reducer functionality goes here */
const dataReducer = (state, action) => {


  switch (action.type) {
    case "USER_LOGIN":
     return { ...state, ...action.data, alert: action.message || '', authOk: true }
     
      
    case "USER_LOGOUT":
      // needed to force this reload (else it just refreshed with invalid content)
      delete localStorage.session
      window.location.href = '/login'
      return { ...action.data, alert: action.message || '' }
    case "ALERT_MESSAGE":
      return { ...state, alert: action.message }
    case "ALERT_CLEAR":
      return { ...state, alert: '' }
    case "UPDATE_TASKS":
      return { ...state, tasks: action.tasks, alert: action.message || '' }
    case "UPDATE_COMPINFO":
      return { ...state, addresses: action.addresses, currentAddress: action.currentAddress, alert: action.message || '' }
    case "UPDATE_ADDRESS":
      return { ...state, addresses: action.addresses, currentAddress: action.currentAddress, alert: action.message || '' }
    case "SHOPPING_BASKET":
      return { ...state, basketList: action.basketList, totalCost: action.totalCost }
      case "SHOPPING_BASKET_COUNT":
        return { ...state, basketCount: action.basketCount}
    default:
      console.log(`Invalid action type: ${action.type}`)
      return state 
  }
}



const StoreContext = createContext()

const useStoreContext = function(){
  return useContext(StoreContext)
}

const StoreProvider = function(props){
  const [state, dispatch] = useReducer( dataReducer, initialData )
  return <StoreContext.Provider value={[state, dispatch]} {...props} />
}

export { StoreProvider, useStoreContext }