export const Player = ({player}) => {
   
  return (
    <div className="flex items-center justify-between gap-4 w-1/3">
      <img
        src={`https://fbref.com/req/202302030/images/headshots/${player.Player_id}_2022.jpg`}
        className="rounded-full h-24 w-24"
      />
      <p className="text-gray-500 text-2xl truncate">{player.Player}</p>
    </div>
  );
};
