import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addOneAnecdote } from "../reducers/anecdoteReducer";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    let content = event.target.anecdote.value;
    console.log("adding new anecdote:", content);
    console.log(anecdoteService);

    anecdoteService.addOne(content).then((data) => {
      console.log("received from server", data);
      dispatch(addOneAnecdote(data));
    });
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
