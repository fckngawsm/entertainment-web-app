import { RootState } from "../../store";

export const MoviesInformationSelectors = (state: RootState) => ({
  status: state.movies.status,
  error: state.movies.error,
  length: state.movies.list?.length,
});

export const MoviesVisibleSelectors = (state: RootState, value: string) => {
  if (value.length === 0) return state.movies.list;

  return state.movies.list?.filter((movie) => {
    return movie.title.toLocaleLowerCase().includes(value.toLocaleLowerCase());
  });
};
