import { RootState } from "../../store";

export const MoviesListSelectors = (state: RootState) => state.movies.list;
export const MoviesInformationSelectors = (state:RootState) => state.movies
