import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "../actions/counter.action";

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => {
    if (state === 0) { // Nếu state = 0 thì không thể giảm nữa
      return state; // Trả về state hiện tại
    }
    return state - 1; // Trả về state - 1
  }),
  on(reset, (state) => 0)



)
