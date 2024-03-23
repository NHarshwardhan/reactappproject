import { BUY_CAKE, BUY_CANDLE } from "./cakeActionType"

// State
const initialState = {
      numberOfCakes: 40,
      numberOfCandles: 30
}

/*
  action =  {
          type:BUY_CAKE,
          payload:qty
      }
  state = {numberOfCakes : 30}    
*/
const cakeReducer = (state=initialState, action)=>{
       switch(action.type){
                 case BUY_CAKE:
                      return{
                        ...state,
                        numberOfCakes: state.numberOfCakes -action.payload
                      }
                  case BUY_CANDLE:
                        return{
                          ...state,
                          numberOfCandles: state.numberOfCandles - action.payload
                        }
                default: return state
       }
}
export default cakeReducer