import AnecdoteForm from "./components/anecdote_form";
import ListOfAnecdotes from "./components/list_of_anecdotes";
import Notification from "./components/Notification";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <ListOfAnecdotes />
      <AnecdoteForm />
    </div>
  );
};

export default App;
