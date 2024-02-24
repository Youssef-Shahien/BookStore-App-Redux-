import React from "react";
import { useDispatch } from "react-redux";

function BookDetails({ bookInfo }) {
  const dispatch = useDispatch();
  const bookDataInfo = bookInfo && (
    <div className="mt-3 border-1 border-black bor">
      <p className="fw-bold">Title: {bookInfo.title}</p>
      <p className="fw-light">Description: {bookInfo.description}</p>
      <p className="fst-italic">
        Price: <b>${bookInfo.price}</b>
      </p>
      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={() => dispatch({ type: "RESET_BOOK_INFO" })}
      >
        Reset Book
      </button>
    </div>
  );
  return (
    <div>
      <h2>Book Details</h2>
      {bookInfo === null ? (
        <div className="alert alert-secondary" role="alert">
          There is no post selected yet. Please select!
        </div>
      ) : (
        bookDataInfo
      )}
      <div></div>
    </div>
  );
}

export default BookDetails;
