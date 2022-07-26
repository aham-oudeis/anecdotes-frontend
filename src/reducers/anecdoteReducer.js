import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

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
      return state.concat(anecdote);
    },
    loadAnecdotes(state, action) {
      let listOfAnecdotes = action.payload;
      return listOfAnecdotes;
    },
  },
});

export const { addVote, addOneAnecdote, loadAnecdotes } = anecdoteSlice.actions;

export const createAnecdote = (content) => async (dispatch) => {
  const newAnecdote = await anecdoteService.addOne(content);
  dispatch(addOneAnecdote(newAnecdote));
};

export const fetchAnecdotes = () => async (dispatch) => {
  const allAnecdotes = await anecdoteService.getAll();
  dispatch(loadAnecdotes(allAnecdotes));
};

export default anecdoteSlice.reducer;
