import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const SearchResults = (query) => {
    const [results, setResults] = useState();
    const [showResults, setShowResults] = useState(false);

    async function getQueryResultsPlayers () {
        const response = await fetch("http://localhost:3000/players")
        const data = await response.json()
    return data
    } 
    async function getQueryResultsTeams () {
         const response = await fetch("http://localhost:3000/teams")
         const data = await response.json()
     return data
    } 

    async function searchPlayers(query) {
        const data = await getQueryResultsPlayers();
        const results = data.filter(player => {
          return player.name.toLowerCase().includes(query.toLowerCase())
        });
        return results;
      }
      async function searchTeams(query) {
        const data = await getQueryResultsTeams();
        const results = data.filter(team => {
          return team.name.toLowerCase().includes(query.toLowerCase())
        })
        return results;
    }
      
    async function getQueryResults(query) {
        const players = await searchPlayers(query);
        const teams = await searchTeams(query);
        setResults({
            players: players,
            teams: teams,
        });
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
                        <h2 className="text-xl font-bold mb-4">Recipes</h2>
                        <div className="list-disc list-inside grid grid-cols-4">
                            {results.players.map((result, index) => (
                                <Link
                                    to={`/player/${result.id}`}
                                    key={index}
                                    className="text-lg truncate p-3 rounded-full m-1"
                                    onClick={handleClick}
                                >
                                    {result.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="p-3">
                        <h2 className="text-xl font-bold mb-4">Ingredients</h2>
                        <div className="list-disc list-inside grid grid-cols-4">
                            {results.teams.map((result, index) => (
                                <Link
                                    to={`/team/${result.id}`}
                                    key={index}
                                    className="text-lg truncate p-3 rounded-full m-1"
                                    onClick={handleClick}
                                >
                                    {result.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
