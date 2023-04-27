export const MatchData = (matchData) => {

    return (
        <div className="flex items-center p-4 ">
            <div className="flex place-content-around items-center w-full ">
                <img src={`https://cdn.ssref.net/req/202303071/tlogo/fb/${matchData.Home_id}.png`} alt={matchData.Home_id} className="w-20" />
                <p>{matchData.ScoreHome}-{matchData.ScoreAway}</p>
                <img src={`https://cdn.ssref.net/req/202303071/tlogo/fb/${matchData.Away_id}.png`} alt={matchData.Away_id} className="w-20" />
            </div>
            <p className="">{matchData.Date} {matchData.Time} </p>
        </div>
    )
}
