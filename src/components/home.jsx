import { Link } from "react-router-dom";

const Home = ({ list }) => {
  const style = {
    padding: 5,
    margin: 5,
  };

  const snippets = list.map(({ content, id }) => (
    <li key={id} style={style}>
      <Link to={`/anecdotes/${id}`}>
        {content.split(" ").slice(0, 5).join(" ") + "...."}
      </Link>
    </li>
  ));

  return <div>{snippets}</div>;
};

export default Home;
