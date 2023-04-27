export const getTeams = async () => {
  const res = await fetch("http://localhost:3000/teams")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  return res;
};
