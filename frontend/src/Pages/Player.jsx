import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

export const Player = () => {
  const { playerId } = useParams()
const [playerData, setPlayerData] = useState()
  async function getQueryResultsPlayers () {
    const response = await fetch("http://localhost:3000/players")
    const data = await response.json()
    const results = data.filter(player => {
      return player.Player_id.toLowerCase().includes(playerId.toLowerCase())
    });
    setPlayerData(results);
    console.log(results);
  }
useEffect(() => {
  getQueryResultsPlayers()
}, [playerId])

  return (<>
    {playerData ?
    <div className="flex w-full flex-col">
      <div className=" w-full">
        <div className="border-2 border-gray-300 flex items-center justify-between rounded-[40px] m-2 p-5">
          <div className="flex items-center">
            <img src={`https://fbref.com/req/202302030/images/headshots/${playerId}_2022.jpg`} alt={playerId} className="rounded-full" />
            <p className="p-5">{playerData[0].Player}</p>
          </div>
          <p className="p-5">Nation: {playerData[0].Nation}</p>
        </div>
      </div>
      <div className=" ">
        <div className="border-2 border-gray-300 rounded-[40px] m-2 p-5">
          <p className="text-center">Stats</p>
          <div className="p-2">
            <div className="flex p-2 justify-between">
              <p>Goles marcados</p>
              <p>{ playerData[0].Gls}</p>
            </div>
            <div className="flex justify-between p-2">
              <p>Minutos jugados</p>
              <p>{ playerData[0].Min}</p>
            </div>
            <div className="flex justify-between p-2">
              <p>Partidos jugados</p>
              <p>{ playerData[0].MP}</p>
            </div>
            <div className="flex justify-between p-2">
              <p>Número de veces que ha tocado el balón</p>
              <p>{ playerData[0].Touches}</p>
            </div>
            <div className="flex justify-between p-2">
              <p>Asistencias hechas</p>
              <p>{ playerData[0].Ast}</p>
            </div>
            <div className="flex justify-between p-2">
              <p>Penaltis marcados</p>
              <p>{ playerData[0].PK}</p>
            </div>
            <div className="flex justify-between p-2">
              <p>Tarjetas amarillas</p>
              <p>{ playerData[0].CrdY}</p>
            </div>
            <div className="flex justify-between p-2">
              <p>Tarjetas rojas</p>
              <p>{ playerData[0].CrdR}</p>
            </div>
          </div>
        </div>
      </div>
    </div> :null}
    </>
  )
}
