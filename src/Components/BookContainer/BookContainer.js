import React, { useEffect } from "react";
import BookList from "../BookList/BookList";
import BookDetails from "../BookDetails.js/BookDetails";
import { getBooks } from "../../store/BookSlice";
import { useDispatch, useSelector } from "react-redux";
function BookContainer() {
  const { books, isLoading, error, bookInfo } = useSelector(
    (state) => state.books
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BookList isLoading={isLoading} books={books} error={error} />
        </div>
        <div className="col side-line">
          <BookDetails bookInfo={bookInfo} />
        </div>
      </div>
    </div>
  );
}

export default BookContainer;
