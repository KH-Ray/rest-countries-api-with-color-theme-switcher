import { useEffect, useState } from "react";
import Moon from "./assets/Moon";
import { getAllCountries } from "./services/countries";
import AllCountries from "./components/AllCountries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectedCountry from "./components/SelectedCountry";
import classNames from "./helper/classNames";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const getRestCountriesAPI = async () => {
      setIsLoading(true);

      try {
        const countries = await getAllCountries();
        setCountries(countries);
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    };

    getRestCountriesAPI();
  }, []);

  return (
    <Router>
      <main className="max-h-full min-h-screen overflow-auto font-nunito-sans">
        <header
          className={classNames(
            darkMode ? "bg-dark-blue text-white" : "bg-white text-black",
            "drop-shadow",
          )}
        >
          <div className="mx-auto flex w-11/12 max-w-7xl justify-between py-7">
            <div className="text-sm font-extrabold sm:text-2xl">
              Where in the world?
            </div>
            <div
              onClick={() => setDarkMode(!darkMode)}
              className="flex cursor-pointer items-center gap-2 text-sm font-semibold sm:text-base"
            >
              <Moon
                className={classNames(
                  darkMode ? "fill-white" : "fill-none",
                  "h-5 w-5",
                )}
              />
              Dark Mode
            </div>
          </div>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <AllCountries
                isLoading={isLoading}
                countries={countries}
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="/:id"
            element={
              <SelectedCountry
                isLoading={isLoading}
                countries={countries}
                darkMode={darkMode}
              />
            }
          />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
