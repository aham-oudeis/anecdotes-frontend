import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { upVote, fetchAnecdotes } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notification_reducer";

const ListOfAnecdotes = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector(({ anecdotes }) => {
    console.log(anecdotes);
    return anecdotes.slice().sort((a, b) => b.votes - a.votes);
  });

  useEffect(() => {
    dispatch(fetchAnecdotes());
  }, [dispatch]);

  const vote = (anecdote) => {
    const { id, content } = anecdote;
    console.log("vote", id);
    console.log({ type: "VOTE", id });
    dispatch(upVote(anecdote));
    dispatch(setNotification(`You voted: ${content}`, 10));
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
