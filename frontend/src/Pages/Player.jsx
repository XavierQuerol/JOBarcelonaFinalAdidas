import { useParams } from "react-router-dom"

export const Player = () => {
  const { playerId } = useParams()


  return (
    <div className="flex w-full">
      <div className="border-2 border-red-600 w-3/5">
        <div className="border-2 border-red-600 flex items-center justify-between rounded-[40px] m-2 p-5">
          <div className="flex items-center">
            <img src={`https://fbref.com/req/202302030/images/headshots/${playerId}_2022.jpg`} alt={playerId} className="rounded-full" />
            <p className="p-5">{playerId}</p>
          </div>
          <p className="p-5">{playerId}</p>
        </div>
        <div className="border-2 border-red-600 rounded-[40px] m-2">
          <p className="text-center">Matches</p>
          <div>
            {/* {matches.map((match, index)=>{
              <MatchData matchData={match} id={index}/>
            })} */}
            <div className="flex items-center p-4 ">
              <div className="flex place-content-around items-center w-full ">
                <img src="https://cdn.ssref.net/req/202303071/tlogo/fb/206d90db.png" alt="a" className="w-20" />
                <p>3-2</p>
                <img src="https://cdn.ssref.net/req/202303071/tlogo/fb/206d90db.png" alt="a" className="w-20" />
              </div>
              <p className="">20/02/2022</p>
            </div>
            <div className="flex items-center p-4 ">
              <div className="flex place-content-around items-center w-full ">
                <img src="https://cdn.ssref.net/req/202303071/tlogo/fb/206d90db.png" alt="a" className="w-20" />
                <p>3-2</p>
                <img src="https://cdn.ssref.net/req/202303071/tlogo/fb/206d90db.png" alt="a" className="w-20" />
              </div>
              <p className="">20/02/2022</p>
            </div>
            <div className="flex items-center p-4 ">
              <div className="flex place-content-around items-center w-full ">
                <img src="https://cdn.ssref.net/req/202303071/tlogo/fb/206d90db.png" alt="a" className="w-20" />
                <p>3-2</p>
                <img src="https://cdn.ssref.net/req/202303071/tlogo/fb/206d90db.png" alt="a" className="w-20" />
              </div>
              <p className="">20/02/2022</p>
            </div>
            <div className="flex items-center p-4 ">
              <div className="flex place-content-around items-center w-full ">
                <img src="https://cdn.ssref.net/req/202303071/tlogo/fb/206d90db.png" alt="a" className="w-20" />
                <p>3-2</p>
                <img src="https://cdn.ssref.net/req/202303071/tlogo/fb/206d90db.png" alt="a" className="w-20" />
              </div>
              <p className="">20/02/2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-red-600 w-2/5">
        <div className="border-2 border-red-600 rounded-[40px] m-2 p-5">
          <p className="text-center">Stats</p>
          <div className="p-2">
            <div className="flex justify-around p-2">
              <p>Goles marcados</p>
              <p>{ }</p>
            </div>
            <div className="flex justify-around p-2">
              <p>Minutos jugados</p>
              <p>{ }</p>
            </div>
            <div className="flex justify-around p-2">
              <p>Asistencias hechas</p>
              <p>{ }</p>
            </div>
            <div className="flex justify-around p-2">
              <p>Penaltis marcados</p>
              <p>{ }</p>
            </div>
            <div className="flex justify-around p-2">
              <p>Targetas amarillas</p>
              <p>{ }</p>
            </div>
            <div className="flex justify-around p-2">
              <p>Targetas rojas</p>
              <p>{ }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
