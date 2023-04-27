import { TeamItem } from "../TeamItem";

export const TeamsContainer = ({ league }) => {
  return (
    <div className="p-4 bg-white">
      <p className="text-6xl mb-6 capitalize text-gray-400">{league.name}</p>
      <div className="flex items-start justify-start flex-wrap gap-6">
        {league.teams.map((team) => {
          return <TeamItem name={team.name} teamId={team.id} />;
        })}
      </div>
    </div>
  );
};
