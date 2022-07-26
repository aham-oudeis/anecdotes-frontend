import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addVote, fetchAnecdotes } from "../reducers/anecdoteReducer";
import { addMessage } from "../reducers/notification_reducer";

const ListOfAnecdotes = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector(({ anecdotes }) => {
    console.log(anecdotes);
    return anecdotes.slice().sort((a, b) => b.votes - a.votes);
  });

  useEffect(() => {
    dispatch(fetchAnecdotes());
  }, [dispatch]);

  const vote = ({ id, content }) => {
    console.log("vote", id);
    console.log({ type: "VOTE", id });
    dispatch(addVote(id));
    dispatch(addMessage(`You voted: ${content}`));
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListOfAnecdotes;
