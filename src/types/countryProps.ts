import { Country } from "./countries";

export interface CountryProps {
  isLoading: boolean;
  // handleIsLoading: (set: boolean) => void;
  countries: Country[];
  darkMode: boolean;
}
