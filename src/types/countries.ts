export type Country = {
  name: {
    common: string;
    nativeName: {
      common: string;
    }[];
  };
  cca3: string;
  subregion: string;
  tld: string[];
  region: string;
  population: number;
  capital: string;
  alpha3Code: string;
  currencies: {
    name: string;
  }[];
  languages: {
    name: string;
  }[];
  flags: {
    png: string;
  };
  borders: string[];
};
