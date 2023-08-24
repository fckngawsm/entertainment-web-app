import { RootState } from "../../store";

export const BookmarkedVisibleSelectors = (state: RootState, value: string) => {
  if (value.length === 0) return state.bookmarked.list;

  return state.bookmarked.list?.filter((movie) => {
    return movie.title.toLocaleLowerCase().includes(value.toLocaleLowerCase());
  });
};
