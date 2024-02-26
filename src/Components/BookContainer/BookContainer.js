import React, { useEffect } from "react";
import BookList from "../BookList/BookList";
import BookDetails from "../BookDetails.js/BookDetails";
import { getBooks } from "../../store/BookSlice";
import { useDispatch, useSelector } from "react-redux";
function BookContainer() {
  const dispatch = useDispatch();
  //books State
  const { books, isLoading, error, bookInfo } = useSelector(
    (state) => state.books
  );
  //auth State
  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BookList isLoading={isLoading} books={books} error={error} isLoggedIn={isLoggedIn} />
        </div>
        <div className="col side-line">
          <BookDetails bookInfo={bookInfo}/>
        </div>
      </div>
    </div>
  );
}

export default BookContainer;
