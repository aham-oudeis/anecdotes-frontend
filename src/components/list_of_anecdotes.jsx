import { useSelector } from "react-redux";
import Anecdote from "./anecdote.jsx";

const ListOfAnecdotes = () => {
  const anecdotes = useSelector(({ anecdotes }) => {
    return anecdotes.slice().sort((a, b) => b.votes - a.votes);
  });

  return (
    <>
      {anecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      ))}
    </>
  );
};

export default ListOfAnecdotes;
