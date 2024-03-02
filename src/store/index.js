import { configureStore } from "@reduxjs/toolkit";
import books from "./BookSlice";
import auth from "./authSlice";
import report from "./ReportSlice";

export default configureStore({
  reducer: {
    books,
    auth,
    report,
  },
});
