import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notification_reducer";
import { useField } from "../hooks/index.js";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const saying = useField("text");
  const author = useField("text");
  const source = useField("text");

  const addAnecdote = (event) => {
    event.preventDefault();
    let content = event.target.anecdote.value;
    dispatch(createAnecdote(content));
    dispatch(setNotification(`New note "${content}" created`, 5));
    navigate("/");
  };

  const resetValues = (event) => {
    event.preventDefault();
    [saying, author, source].forEach((input) => input.reset());
  };

  const style = {
    padding: 5,
    marginTop: 10,
    bordeRadius: 10,
  };

  return (
    <>
      <h2>Create new</h2>
      <form onSubmit={addAnecdote}>
        <div style={style}>
          <label>
            What they said:{" "}
            <textarea
              style={{ width: 550, padding: 25 }}
              name="anecdote"
              {...saying}
            />
          </label>
        </div>
        <div style={style}>
          <label>
            Who said it:
            <input
              style={{ margin: 25, width: 300 }}
              name="author"
              {...author}
            />
          </label>
        </div>
        <div style={style}></div>
        <button style={style} className="btn btn-primary btn-lg" type="submit">
          create
        </button>
        <button
          style={style}
          className="btn btn-primary btn-lg"
          type="button"
          onClick={resetValues}
        >
          reset
        </button>
      </form>
    </>
  );
};

export default AnecdoteForm;
