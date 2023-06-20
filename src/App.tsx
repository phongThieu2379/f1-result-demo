import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Page/HomePage/HomePage";
import Layout from "./Layout/Layout";
import SearchYearRace from "./Page/HomePage/SearchByYear/SearchYearRace/SearchYearRace";
import SearchYearTeam from "./Page/HomePage/SearchByYear/SearchYearTeam/SearchYearTeam";
import SearchYearFastestLap from "./Page/HomePage/SearchByYear/SearchYearFastestLap/SearchYearFastestLap";
import SearchYearDriver from "./Page/HomePage/SearchByYear/SearchYearDriver/SearchYearDriver";
import SearchDetailRace from "./Page/HomePage/SearchDetail/SearchDetailRace";
import SearchDetailDriver from "./Page/HomePage/SearchDetail/SearchDetailDriver";
import SearchDetailTeam from "./Page/HomePage/SearchDetail/SearchDetailTeam";
import Spinner from "./Component/Spinner/Spinner";

function App() {
  return (
      <div>
        <Spinner/>
        <BrowserRouter basename="/f1-result-demo">
          <Routes>
            <Route path="/homepage" element={<Layout Component={HomePage} />} />
            <Route
              path="/homepage/search-nav/races/:year"
              element={<Layout Component={SearchYearRace} />}
            />
            <Route
              path="/homepage/search-nav/races/:year/:detail"
              element={<Layout Component={SearchDetailRace} />}
            />
            <Route
              path="/homepage/search-nav/drivers/:year"
              element={<Layout Component={SearchYearDriver} />}
            />
            <Route
              path="/homepage/search-nav/drivers/:year/:detail"
              element={<Layout Component={SearchDetailDriver} />}
            />
            <Route
              path="/homepage/search-nav/teams/:year"
              element={<Layout Component={SearchYearTeam} />}
            />
            <Route
              path="/homepage/search-nav/teams/:year/:detail"
              element={<Layout Component={SearchDetailTeam} />}
            />
            <Route
              path="/homepage/search-nav/fastest-lap/:year"
              element={<Layout Component={SearchYearFastestLap} />}
            />
      
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
