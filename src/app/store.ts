import { configureStore } from "@reduxjs/toolkit";

import { patientDataApi } from "../services/patientDataApi";

export default configureStore({
  reducer: {
    [patientDataApi.reducerPath]: patient.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(patientDataApi.middleware),
});
