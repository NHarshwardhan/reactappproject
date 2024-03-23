import { BUY_CAKE, BUY_CANDLE } from "./cakeActionType"

// Action Creator
export const buyCake = (qty)=>{ //2
      return {
          type:BUY_CAKE,
          payload:qty
      }
}
export const buyCandle = (qty)=>{ //3
    return {
        type:BUY_CANDLE,
        payload: qty
    }
}