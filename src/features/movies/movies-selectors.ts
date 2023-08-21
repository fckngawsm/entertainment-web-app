import { RootState } from "../../store";

export const MoviesListSelectors = (state: RootState) => state.movies.list;
// export const MoviesInformationSelectors = (state:RootState) => state.movies
export const MoviesInformationSelectors = (state:RootState) => ({
    status: state.movies.status,
    error: state.movies.error,
    length: state.movies.list?.length,
  });
