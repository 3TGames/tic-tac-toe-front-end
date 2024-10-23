import { Link } from "react-router-dom";

const Game = () => {
  return (
    <>
      <h1>Game</h1>
      <ul>
        <Link to="/game/pvplocal">Player vs player local</Link>
        <li>Player vs player online</li>
      </ul>
    </>
  );
};
export { Game };
