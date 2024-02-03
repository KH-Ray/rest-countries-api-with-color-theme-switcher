import { ClipLoader } from "react-spinners";
import classNames from "../helper/classNames";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import ChevronDown from "../assets/ChevronDown";
import { CountryProps } from "../types/countryProps";
import { useState } from "react";

const AllCountries = (props: CountryProps) => {
  const [textInput, setTextInput] = useState("");
  const [filterRegion, setFilterRegion] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const filter = ["None", "Africa", "America", "Asia", "Europe", "Oceania"];

  const backgroundImgSearch = {
    backgroundImage: "url(src/assets/magnifying-glass.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "5%",
    backgroundSize: "18px",
  };

  return (
    <section
      className={classNames(
        props.darkMode ? "bg-very-dark-blue" : "bg-very-light-gray",
        "max-h-full min-h-screen py-10",
      )}
    >
      <div className="mx-auto w-11/12 max-w-7xl">
        <div className="mb-12 block h-14 flex-col items-center gap-8 space-y-8 sm:flex sm:flex-row sm:justify-between sm:gap-2 sm:space-y-0">
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Search for a country..."
            className={classNames(
              props.darkMode
                ? "bg-dark-blue text-white"
                : "bg-white text-black",
              "h-full w-full rounded pl-14 pr-8 drop-shadow sm:w-[480px]",
            )}
            style={backgroundImgSearch}
            onChange={({ target }) => {
              setTextInput(target.value);
            }}
          />
          {/* relative z-10 flex h-full w-52 cursor-pointer items-center justify-center rounded bg-white drop-shadow */}
          <div
            className={classNames(
              props.darkMode
                ? "bg-dark-blue text-white"
                : "bg-white text-black",
              "relative z-10 flex h-full w-52 cursor-pointer items-center justify-center rounded drop-shadow",
            )}
          >
            <div
              className="flex h-full w-full items-center justify-center gap-2"
              onClick={() => setShowFilter(!showFilter)}
            >
              Filter By Region <ChevronDown className="h-3 w-3" />
            </div>
            {showFilter && (
              <div className="absolute -bottom-80 left-0 flex flex-col drop-shadow">
                {filter.map((f, i) => (
                  <span
                    key={i}
                    onClick={(e) => {
                      const target = e.target as HTMLElement;
                      setFilterRegion(target.innerText);
                    }}
                    className={classNames(
                      i === 0
                        ? "rounded-t"
                        : i === 5
                          ? "rounded-b"
                          : "rounded-none",
                      "flex h-full w-52 items-center bg-white p-4",
                      props.darkMode ? "bg-dark-blue" : "bg-white",
                    )}
                  >
                    {f}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {props.isLoading ? (
          <div className="flex items-center justify-center">
            <ClipLoader color="hsl(0, 0%, 52%)" />
          </div>
        ) : (
          <div className="mt-32 grid grid-cols-1 justify-items-center gap-8 sm:mt-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {props.countries
              .filter((country) => {
                if (filterRegion === "None") return country;
                return country.region.includes(filterRegion);
              })
              .filter((country) => {
                return country.name.common
                  .toLocaleLowerCase()
                  .includes(textInput.toLocaleLowerCase());
              })
              .map((country) => (
                <Card
                  key={uuidv4()}
                  country={country}
                  darkMode={props.darkMode}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCountries;
