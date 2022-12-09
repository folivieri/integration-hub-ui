import { createSlice } from "@reduxjs/toolkit";

export const iHubSlice = createSlice({
  name: "iHubSlice",
  initialState: {},
  reducers: {
    updateState: (state, action) => (action.payload),
    shAction: (state, action) => ({
      ...state,
      partnerSystems: {
        ...state.partnerSystems,
        sh: action.payload,
      }
    }),
    wdAction: (state, action) => ({
      ...state,
      partnerSystems: {
        ...state.partnerSystems,
        wd: action.payload,
      }
    }),
    sfAction: (state, action) => ({
      ...state,
      partnerSystems: {
        ...state.partnerSystems,
        sf: action.payload,
      }
    }),
    afsAction: (state, action) => ({
      ...state,
      partnerSystems: {
        ...state.partnerSystems,
        afs: action.payload,
      }
    }),
    sftpAction: (state, action) => ({
      ...state,
      partnerSystems: {
        ...state.partnerSystems,
        sftp: action.payload,
      }
    }),
    plsAction: (state, action) => ({
      ...state,
      partnerSystems: {
        ...state.partnerSystems,
        pls: action.payload,
      }
    }),
  },
});

export const { updateState, shAction, wdAction, sfAction, afsAction, sftpAction,plsAction, showWdDeptsAction, showWdLocAction, showSfDeptsAction, showSfLocAction, showAfsDeptsAction, showAfsLocAction } = iHubSlice.actions;
export default iHubSlice.reducer;