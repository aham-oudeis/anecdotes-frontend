import { useDispatch } from "react-redux";
import { upVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notification_reducer";

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();

  if (!anecdote.note_id) {
    return <p>There is no anecdote here</p>;
  }

  const vote = (anecdote) => {
    const { note_id, content } = anecdote;
    console.log("anecdote id", note_id);
    dispatch(upVote(anecdote));
    dispatch(setNotification(`You voted: ${content}`, 10));
  };

  return (
    <div style={{ margin: 50, padding: 50 }}>
      <h2>{anecdote.content}</h2>
      <div>
        has {anecdote.votes} votes. To add:
        <button onClick={() => vote(anecdote)}>vote</button>
      </div>
    </div>
  );
};

export default Anecdote;
