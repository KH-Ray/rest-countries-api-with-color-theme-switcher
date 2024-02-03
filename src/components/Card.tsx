import { Link } from "react-router-dom";
import addCommas from "../helper/addComas";
import { Country } from "../types/countries";
import classNames from "../helper/classNames";

const Card = ({
  country,
  darkMode,
}: {
  country: Country;
  darkMode: boolean;
}) => {
  return (
    <Link
      to={`/${country.name.common}`}
      className="flex w-64 cursor-pointer flex-col drop-shadow sm:w-full"
    >
      <img
        src={country.flags.png}
        alt={`${country.name.common}'s flag`}
        className="h-40 w-full flex-none rounded-t-md object-cover md:w-full"
      />
      <div
        className={classNames(
          darkMode ? "bg-dark-blue text-white" : "bg-white text-black",
          "h-full rounded-b-md p-4",
        )}
      >
        <p className="mb-4 text-lg font-extrabold">
          <strong>{country.name.common}</strong>
        </p>

        <div className="space-y-1 text-sm">
          <div>
            <strong className="font-semibold">Population</strong>:{" "}
            {addCommas(country.population)}
          </div>
          <div>
            <strong className="font-semibold">Region</strong>: {country.region}
          </div>
          <div>
            <strong className="font-semibold">Capital</strong>:{" "}
            {country.capital}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
