import { Link } from "react-router-dom";

const Home = ({ list }) => {
  console.log(list);
  const style = {
    padding: 10,
    margin: 80,
  };

  const snippets = list.map(({ content, note_id }) => (
    <li key={note_id} style={style}>
      <Link to={`/anecdotes/${note_id}`}>
        {content.split(" ").slice(0, 5).join(" ") + "...."}
      </Link>
    </li>
  ));

  return <div>{snippets}</div>;
};

export default Home;
