import { Link } from "react-router-dom";

export const TeamItem = ({ name, teamId }) => {
  return (
    <Link to={`/team/${name}`}>
      <img src={`https://cdn.ssref.net/req/202303071/tlogo/fb/${teamId}.png`} />
      <p>{name}</p>
    </Link>
  );
};
