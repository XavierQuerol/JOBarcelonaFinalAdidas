import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Players,
  Teams,
  Matches,
  Leagues,
  Player,
  Team,
  Match,
  League,
} from "../Pages/index.js";
import { Layout } from "../components/Layout/index.jsx";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/teams" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/" element={<Teams />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/player/:playerId" element={<Player />} />
          <Route path="/team/:teamId" element={<Team />} />
          <Route path="/match/:matchId" element={<Match />} />
          <Route path="/league/:leagueId" element={<League />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
