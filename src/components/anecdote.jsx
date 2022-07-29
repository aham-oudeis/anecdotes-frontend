import { useDispatch } from "react-redux";
import { upVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notification_reducer";

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();

  if (!anecdote.id) {
    return <p>There is no anecdote here</p>;
  }

  console.log("inside the anecdote component");

  const vote = (anecdote) => {
    const { id, content } = anecdote;
    console.log("anecdote id", id);
    dispatch(upVote(anecdote));
    dispatch(setNotification(`You voted: ${content}`, 10));
  };

  return (
    <div>
      <h2>{anecdote.content}</h2>
      <div>
        has {anecdote.votes} votes. To add:
        <button onClick={() => vote(anecdote)}>vote</button>
      </div>
    </div>
  );
};

export default Anecdote;
