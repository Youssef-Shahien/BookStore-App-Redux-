import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook, getBook } from "../../store/BookSlice";

function BookList({ isLoading, books, error }) {
  const dispatch = useDispatch();

  const bookList =
    books.length > 0
      ? books.map((item) => (
          <li
            className="list-group-item d-flex  justify-content-between align-items-center"
            key={item.id}
          >
            <div>{item.title}</div>
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => dispatch(getBook(item.id))}
              >
                Read
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => dispatch(deleteBook(item.id))}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      : "There Is No Book There";

  return (
    <div>
      <h2>Books List</h2>
      <div className="overflow-auto" style={{ maxHeight: "200px" }}>
        {error && (
          <div className="alert alert-danger mb-0" role="alert">
            {error}
          </div>
        )}
        {isLoading ? (
          "Loading..."
        ) : (
          <ul className="list-group">{error === null ? bookList : ""}</ul>
        )}
      </div>
    </div>
  );
}

export default BookList;
