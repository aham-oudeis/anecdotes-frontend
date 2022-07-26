import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    update(state, action) {
      let toUpdate = action.payload;
      let id = toUpdate.id;

      let index = state.findIndex((anecdote) => anecdote.id === id);

      state[index] = toUpdate;
    },
    create(state, action) {
      let anecdote = action.payload;
      return state.concat(anecdote);
    },
    loadAll(state, action) {
      let listOfAnecdotes = action.payload;
      return listOfAnecdotes;
    },
  },
});

const { create, loadAll, update } = anecdoteSlice.actions;

export const createAnecdote = (content) => async (dispatch) => {
  const newAnecdote = await anecdoteService.addOne(content);
  console.log("the new updated anecdote", newAnecdote);
  dispatch(create(newAnecdote));
};

export const fetchAnecdotes = () => async (dispatch) => {
  const listOfAnecdotes = await anecdoteService.getAll();
  dispatch(loadAll(listOfAnecdotes));
};

export const upVote = (anecdote) => async (dispatch) => {
  const upVoted = { ...anecdote, votes: anecdote.votes + 1 };
  const updateAnecdote = await anecdoteService.addVote(upVoted);
  console.log("returned by put request", updateAnecdote);
  dispatch(update(upVoted));
};

export default anecdoteSlice.reducer;
