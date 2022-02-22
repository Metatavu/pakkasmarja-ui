import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AccessTokenRefresh from "components/containers/access-token-refresh";
import MainScreen from "components/screens/main-screen";
import ConfirmHandler from "components/contexts/confirm-handler";
import ErrorHandler from "components/contexts/error-handler";
import ApiProvider from "./providers/api-provider";
import AppLayout from "./layouts/app-layout";

const apiProviders: React.FC<{}>[] = [];

/**
 * Application component
 */
const App: React.FC = () => (
  <ErrorHandler>
    <ApiProvider providers={ apiProviders }>
      <ConfirmHandler>
        {/* <AccessTokenRefresh> */}
        <BrowserRouter>
          <AppLayout>
            <Routes>
              <Route
                path="/"
                element={ <MainScreen/> }
              />
              <Route
                path="/Deliveries"
                element={ <MainScreen/> }
              />
              <Route
                path="/Contracts"
                element={ <MainScreen/> }
              />
              <Route
                path="/News"
                element={ <MainScreen/> }
              />
              <Route
                path="/Databank"
                element={ <MainScreen/> }
              />
              <Route
                path="/Help"
                element={ <MainScreen/> }
              />
            </Routes>
          </AppLayout>
        </BrowserRouter>
        {/* </AccessTokenRefresh> */}
      </ConfirmHandler>
    </ApiProvider>
  </ErrorHandler>
);

export default App;