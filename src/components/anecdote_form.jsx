import { useDispatch } from "react-redux";
import { addOneAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.anecdote);
    let content = event.target.anecdote.value;
    console.log("adding new anecdote:", content);
    dispatch(addOneAnecdote(content));
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
