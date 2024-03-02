import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
  name: "report",
  initialState: { logs: [] },
  reducers: {
    logsInsert: (state, action) => {
      state.logs.push(action.payload);
    },
  },
});

export const { logsInsert } = reportSlice.actions;
export default reportSlice.reducer;
 