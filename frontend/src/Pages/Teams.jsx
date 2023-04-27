import { TeamsContainer } from "../components/Pages/Teams/TeamsContainer";
import { league } from "../data/teams";

export const Teams = () => {
  return (
    <div className="bg-blue-300 min-h-screen p-4">
      {league.map((lea, idx) => {
        return <TeamsContainer key={idx} league={lea} />;
      })}
    </div>
  );
};
