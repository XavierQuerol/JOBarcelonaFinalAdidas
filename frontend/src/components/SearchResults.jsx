import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const SearchResults = (query) => {
    const [results, setResults] = useState();
    const [showResults, setShowResults] = useState(false);

    async function getQueryResultsPlayers () {
        const response = await fetch("http://localhost:3000/players")
        const data = await response.json()
        console.log(data);
    return data
    } 
    async function getQueryResultsTeams () {
         const response = await fetch("http://localhost:3000/teams")
         
         const data = await response.json()
         console.log(data);
     return data
    } 

    async function searchPlayers(query) {
        const data = await getQueryResultsPlayers();
        const results = data.filter(player => {
          return player.Player.toLowerCase().includes(query.toLowerCase())
        });
        console.log(results);

        return results;
      }
      async function searchTeams(query) {
        const data = await getQueryResultsTeams();
        const results = data.filter(team => {
          return team.Squad.toLowerCase().includes(query.toLowerCase())
        })
        console.log(results);
        return results;
    }
      
    async function getQueryResults(query) {
        const players = await searchPlayers(query);
        const teams = await searchTeams(query);
        // console.log(teams);
        setResults({
            Players: players,
            Teams: teams,
        })
        setTimeout(() => {
            console.log(results);
        }, 5000);

    }
    const timeoutIdRef = useRef(null);

    useEffect(() => {
        clearTimeout(timeoutIdRef.current);

        if (query.query.length >= 3) {
            timeoutIdRef.current = setTimeout(() => {
                setShowResults(true)
                getQueryResults(query.query);
            }, 1000);
        } else {
            setResults({ Players: [], Teams: [] });
            console.log("HOLA");
        }
    }, [query]);

    const handleClick = () => {
        setShowResults(false);
    };

    return (
        <div>
            {showResults && results ? (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-md  py-4 px-6 w-[150%] z-10">
                    <div className="p-3">
                        <h2 className="text-xl font-bold mb-4">Players</h2>
                        <div className="list-disc list-inside grid grid-cols-2">
                            {results.Players.map((result, index) => (
                                <Link
                                    to={`/player/${result.Player_id}`}
                                    key={index}
                                    className="text-md truncate p-3 rounded-full m-1 text-black"
                                    onClick={handleClick}
                                >
                                    {result.Player}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="p-3">
                        <h2 className="text-xl font-bold mb-4">Teams</h2>
                        <div className="list-disc list-inside grid grid-cols-2">
                            {results.Teams.map((result, index) => (
                                <Link
                                    to={`/team/${result.Squad}`}
                                    key={index}
                                    className="text-lg truncate p-3 rounded-full m-1 text-black"
                                    onClick={handleClick}
                                >
                                    {result.Squad}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
