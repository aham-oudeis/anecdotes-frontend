import { Routes, Route, Link, useMatch } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AnecdoteForm from "./components/anecdote_form";
import ListOfAnecdotes from "./components/list_of_anecdotes";
import Notification from "./components/Notification";
import { setNotification } from "./reducers/notification_reducer";
import Anecdote from "./components/anecdote";
import Home from "./components/home";
import { fetchAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnecdotes());
  }, [dispatch]);

  const match = useMatch("/anecdotes/:id");

  const listOfAnecdotes = useSelector(({ anecdotes }) => {
    return anecdotes.slice().sort((a, b) => b.votes - a.votes);
  });

  const messages = useSelector(({ notifications }) => notifications);

  const hidden = messages === "";

  const selected = match
    ? listOfAnecdotes.find((anecdote) => anecdote.id === match.params.id)
    : {};

  const style = {
    padding: 5,
    margin: 5,
    bordeRadius: 5,
  };

  return (
    <div>
      <h2>Software Anecdotes</h2>
      <div>
        <Notification hidden={hidden} />
      </div>
      <div style={style}>
        <Link style={style} to="/">
          Home
        </Link>
        <Link style={style} to="/anecdotes">
          Anecdotes
        </Link>
        <Link style={style} to="/new">
          Create New
        </Link>
        <Link style={style} to="/about">
          About
        </Link>
      </div>
      <Routes>
        <Route
          path="/anecdotes/:id"
          element={<Anecdote anecdote={selected} />}
        />
        <Route path="/anecdotes" element={<ListOfAnecdotes />} />
        <Route path="/new" element={<AnecdoteForm />} />
        <Route path="/" element={<Home list={listOfAnecdotes} />} />
      </Routes>
      <footer style={style}>Anecdote App for Full Stack Open Course</footer>
    </div>
  );
};

export default App;
