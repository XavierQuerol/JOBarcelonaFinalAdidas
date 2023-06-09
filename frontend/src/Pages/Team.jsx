import { useEffect, useState } from "react";
import { Player } from "../components/Player";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Team = () => {
  const [points, setPoints] = useState([1, 2, 4, 4, 5, 3, 4, 5, 6]);
  const [numTeams, setNumTeams] = useState(14);

  const getLabels = () => {
    let labels = [];
    for (let i = 0; i <= points.length; i++) {
      labels.push(i + 1);
    }
    return labels;
  };

  const data = {
    labels: getLabels(),
    datasets: [
      {
        label: "Clasification",
        data: points,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      y: {
        reverse: true,
        beginAtZero: true,
        min: 1,
        max: numTeams,
      },
    },
  };

  const { teamId: teamName } = useParams();
  const [team, setTeam] = useState(null);

  const getTeam = async () => {
    return await fetch(`http://localhost:3000/teams/${teamName}`)
      .then((res) => res.json())
      .then((data) => {
        setTeam(data);
      });
  };
  const getClassification = async () => {
    return await fetch(`http://localhost:3000/classifications/${teamName}`)
      .then((res) => res.json())
      .then((data) => {
        setPoints(data.points);
        setNumTeams(data.num_teams);
      });
  };

  console.log(team);
  useEffect(() => {
    getTeam();
    getClassification();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {team && (
        <>
          <img
            src={`https://cdn.ssref.net/req/202303071/tlogo/fb/${team[0].Squad_id}.png`}
            className="mt-4"
          />
          <p>{team[0].Squad}</p>
        </>
      )}
      <div className="w-full flex items-center justify-center">
        <div className="w-2/3 h-[60vh]">
          {points.length && numTeams && <Line options={options} data={data} />}
        </div>
      </div>
      <div className=" ">
        <div className="border-2 border-gray-300 rounded-[40px] m-2 p-5">
          <p className="text-center">Stats</p>
          <div className="p-2">
            <div className="flex p-2 justify-between">
              <p>Goles marcados</p>
              <p>{ team[0].Gls}</p>
            </div>
            <div className="flex justify-between p-2">
              <p>Minutos jugados</p>
              <p>{ team[0].Min}</p>
            </div>
            <div className="flex justify-between p-2">
              <p>Partidos jugados</p>
              <p>{ team[0].MP}</p>
            </div>
            <div className="flex justify-between p-2">
              <p>Asistencias hechas</p>
              <p>{ team[0].Ast}</p>
            </div>
            <div className="flex justify-between p-2">
              <p>Penaltis marcados</p>
              <p>{ team[0].PK}</p>
            </div>
            <div className="flex justify-between p-2">
              <p>Tarjetas amarillas</p>
              <p>{ team[0].CrdY}</p>
            </div>
            <div className="flex justify-between p-2">
              <p>Tarjetas rojas</p>
              <p>{ team[0].CrdR}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full gap-12 items-center justify-center mt-12">
        {team &&
          team.map((play, idx) => {
            if (idx !== 0) {
              return <Player player={play} />;
            }
          })}
      </div>
    </div>
  );
};
