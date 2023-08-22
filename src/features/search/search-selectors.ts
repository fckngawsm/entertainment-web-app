import { RootState } from "../../store";

export const SearchSelectors = (state: RootState) => state.search.value;
