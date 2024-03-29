import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logsInsert } from "./ReportSlice";
//////////////////// getBooks Action //////////////////////////

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/books");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//////////////////// insertBook Action //////////////////////////

export const insertBook = createAsyncThunk(
  "book/insertBook",
  async (dataBook, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    try {
      dataBook.userName = getState().auth.name;
      const res = await fetch("http://localhost:3005/books", {
        method: "POST",
        body: JSON.stringify(dataBook),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      dispatch(logsInsert({ name: "insertBooks", status: "success" }));
      return data;
    } catch (error) {
      dispatch(logsInsert({ name: "insertBooks", status: "failed" }));

      return rejectWithValue(error.message);
    }
  }
);
//////////////////// DeleteBook Action //////////////////////////

export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3005/books/${item.id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      });
      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//////////////////// GetBook Action //////////////////////////
export const getBook = createAsyncThunk(
  "book/getBook",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/books/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//////////////////// CreateSlice Reducer //////////////////////////
const bookSlice = createSlice({
  name: "book",
  initialState: { books: [], isLoading: false, error: null, bookInfo: null },
  extraReducers: (builder) => {
    builder
      //Get Books
      .addCase(getBooks.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //insert Books
      .addCase(insertBook.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(insertBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books.push(action.payload);
      })
      .addCase(insertBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //delete Books
      .addCase(deleteBook.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = state.books.filter((el) => el.id !== action.payload.id);
        state.bookInfo = null;
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //get Book Info
      .addCase(getBook.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookInfo = action.payload;
      })
      .addCase(getBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Reset Book
      .addCase("RESET_BOOK_INFO", (state, action) => {
        state.bookInfo = null;
      });
  },
});

export default bookSlice.reducer;
