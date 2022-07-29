import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notification_reducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addAnecdote = (event) => {
    event.preventDefault();
    let content = event.target.anecdote.value;
    dispatch(createAnecdote(content));
    dispatch(setNotification(`New note "${content}" created`, 5));
    navigate("/");
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
        <div>
          <input name="anecdote" />
        </div>
        <button style={style}>create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
