import { Country } from "./country";
import { Regions } from "./region.type";

export interface CacheStore {
  byCapital: termContries;
  byContries: termContries;
  byRegion: RegionCountries;
}

export interface termContries {
  term: string;
  countries: Country[];
}

export interface RegionCountries {
  region?: Regions;
  countries: Country[];
}
