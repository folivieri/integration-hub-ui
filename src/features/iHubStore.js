import { configureStore } from "@reduxjs/toolkit";
import iHubReducer from './iHubSlice';
import { IntegrationHubUIStateApi } from "./api/IntegrationHubUIStateApi";
import { updateState } from "./iHubSlice";

const api = new IntegrationHubUIStateApi();
const rootReducer = (state, action) => {

  if (action.type === "hydrate") {
    let payload = { body: state }
    api.updateIntegrationCustomer(payload, (error, data, response) => {
      if (error) {
        console.error("error:", error);
        return;
      }
      console.info("RESPONSE: \n", JSON.stringify(response.body));
      return iHubReducer(response.body, action);
    });
  }

  return iHubReducer(state, action);
}

const store = configureStore({
  reducer: rootReducer,
})


export default store;