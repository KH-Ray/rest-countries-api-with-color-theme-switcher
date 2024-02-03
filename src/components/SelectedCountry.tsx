import { Link, useParams } from "react-router-dom";
import { CountryProps } from "../types/countryProps";
import { Country } from "../types/countries";
import ArrowLeft from "../assets/ArrowLeft";
import addCommas from "../helper/addComas";
import classNames from "../helper/classNames";

const SelectedCountry = (props: CountryProps) => {
  const id = useParams().id;
  const country: Country | undefined = props.countries.find(
    (c: Country) => c.name.common === id,
  );

  if (!country) {
    return (
      <div className="mx-auto flex w-11/12 max-w-7xl items-center justify-center py-16 text-4xl">
        Country not found
      </div>
    );
  }

  console.log(country);

  const nativeName = Object.values(country.name.nativeName)
    .map(({ common }) => common)
    .join(", ");

  const currency = Object.values(country.currencies)
    .map(({ name }) => name)
    .join(", ");

  const language = Object.values(country.languages).join(", ");

  return (
    <section
      className={classNames(
        props.darkMode ? "bg-very-dark-blue text-white" : "bg-white text-black",
        "max-h-full min-h-screen py-10",
      )}
    >
      <div className="mx-auto w-11/12 max-w-7xl">
        <div className="mb-8">
          <Link
            to="/"
            className={classNames(
              props.darkMode
                ? "bg-very-dark-blue text-white"
                : "bg-white text-black",
              "flex h-8 w-28 items-center justify-center gap-2 rounded drop-shadow",
            )}
          >
            <ArrowLeft className="h-5 w-5" /> Back
          </Link>
        </div>

        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row">
          <div className="flex-none shadow-lg">
            <img
              src={country.flags.png}
              alt={`${country.name.common}'s flag`}
              className="h-full w-full rounded-lg object-cover lg:h-[401px] lg:w-[560px]"
            />
          </div>

          <div className="w-full">
            <h1 className="mb-4 text-4xl font-extrabold">
              {country.name.common}
            </h1>

            <div className="mb-8 grid grid-cols-1 grid-rows-5 gap-y-3 xl:grid-cols-2">
              <div>
                <strong className="font-semibold">Native Name:</strong>{" "}
                {nativeName}
              </div>
              <div>
                <strong className="font-semibold">Top Level Domain:</strong>{" "}
                {country.tld}
              </div>
              <div>
                <strong className="font-semibold">Population:</strong>{" "}
                {addCommas(country.population)}
              </div>
              <div>
                <strong className="font-semibold">Currencies:</strong>{" "}
                {currency}
              </div>
              <div>
                <strong className="font-semibold">Region:</strong>{" "}
                {country.region}
              </div>
              <div>
                <strong className="font-semibold">Languages:</strong> {language}
              </div>
              <div>
                <strong className="font-semibold">Sub Region:</strong>{" "}
                {country.subregion}
              </div>
              <div className="lg:row-start-5">
                <strong className="font-semibold">Capital:</strong>{" "}
                {country.capital}
              </div>
            </div>

            <div className="block items-center gap-2 xl:flex">
              <strong className="flex-none font-semibold">
                Border Countries:
              </strong>{" "}
              <div className="mt-2 flex flex-wrap gap-2 xl:mt-0">
                {country.borders ? (
                  country.borders.map((border) => (
                    <div
                      key={border}
                      className={classNames(
                        props.darkMode ? "bg-dark-blue" : "bg-white",
                        "flex h-7 w-24 items-center justify-center drop-shadow",
                      )}
                    >
                      {border}
                    </div>
                  ))
                ) : (
                  <div
                    className={classNames(
                      props.darkMode ? "bg-dark-blue" : "bg-white",
                      "flex h-7 w-24 items-center justify-center drop-shadow",
                    )}
                  >
                    None
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedCountry;
