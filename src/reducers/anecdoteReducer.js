import { createSlice } from "@reduxjs/toolkit";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addVote(state, action) {
      let id = action.payload;
      state.forEach((anecdote) => {
        if (anecdote.id === id) {
          anecdote.votes += 1;
        }
      });
    },
    addOneAnecdote(state, action) {
      let anecdote = action.payload;
      return state.concat(asObject(anecdote));
    },
    loadAnecdotes(state, action) {
      let listOfAnecdotes = action.payload;
      return listOfAnecdotes;
    },
  },
});

export const { addVote, addOneAnecdote, loadAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
