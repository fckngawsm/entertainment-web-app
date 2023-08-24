import React from "react";
import { useAppSelector } from "../../../redux-hooks";
import style from "./Bookmarked.module.css";
import List from "../../../components/List/List";
import Card from "../../../components/Card/Card";
import { SearchSelectors } from "../../search/search-selectors";
import { BookmarkedVisibleSelectors } from "../bookmarked-selectors";
function Bookmarked() {
  const value = useAppSelector(SearchSelectors);
  const bookmarkeds = useAppSelector((state) =>
    BookmarkedVisibleSelectors(state, value)
  );
  return (
    <section className={style.bookmarked}>
      {bookmarkeds?.length ? (
        <>
          <div>
            <h2 className={style.title}>Bookmarked Movies</h2>
            <List>
              {bookmarkeds
                ?.filter((data) => data.category === "Movie")
                .map((bookmarked) => (
                  <Card key={bookmarked.id} {...bookmarked} />
                ))}
            </List>
          </div>
          <div className={style.bookmarked}>
            <h2 className={style.title}>Bookmarked TV Series</h2>
            <List>
              {bookmarkeds
                ?.filter((data) => data.category === "TV Series")
                .map((bookmarked) => (
                  <Card {...bookmarked} />
                ))}
            </List>
          </div>
        </>
      ) : (
        <h2 className={style.title}>List empty</h2>
      )}
    </section>
  );
}

export default Bookmarked;
