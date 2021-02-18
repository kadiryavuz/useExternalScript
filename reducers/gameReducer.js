import { createSlice } from "@reduxjs/toolkit";
import { GameMessages, GameResult, GameStatus } from "../config";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    data: {
      totalMoves: 0,
      arena: [],
    },
    status: GameStatus.IDLE,
    result: GameResult.NONE,
    message: GameMessages.NONE,
  },
  reducers: {
    play: (state, action) => {
      console.log("Action incoming: ", action);
      state.data.totalMoves = state.data.totalMoves + action.payload.value;
    },
    onMessage: {
      reducer(state, action) {
        state.errors.push(action.payload);
      },
      prepare(msg) {
        return {
          payload: {
            message: msg,
          },
        };
      },
    },
  },
});

export const { play, onMessage } = gameSlice.actions;

export const selectData = (state) => state.data;
export const selectMessage = (state) => state.message;

export default gameSlice.reducer;
