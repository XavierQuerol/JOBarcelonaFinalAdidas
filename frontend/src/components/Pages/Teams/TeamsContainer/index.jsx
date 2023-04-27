import { TeamItem } from "../TeamItem";

export const TeamsContainer = ({ league }) => {
  return (
    <div className="p-4 bg-white">
      <h2>{league.name}</h2>
      <div className="flex items-start justify-start flex-wrap">
        {league.teams.map((team) => {
          return <TeamItem name={team.name} />;
        })}
      </div>
    </div>
  );
};
