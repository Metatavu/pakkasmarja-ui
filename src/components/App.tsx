import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AccessTokenRefresh from "components/containers/access-token-refresh";
import OverviewScreen from "components/screens/overview-screen";
import ConfirmHandler from "components/contexts/confirm-handler";
import ErrorHandler from "components/contexts/error-handler";
import ApiProvider from "./providers/api-provider";
import AppLayout from "./layouts/app-layout";
import DeliveriesScreen from "./screens/deliveries-screen";
import ContractsScreen from "./screens/contracts-screen";
import NewsScreen from "./screens/news-screen";
import DatabankScreen from "./screens/databank-screen";
import HelpScreen from "./screens/help-screen";

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
                element={ <OverviewScreen/> }
              />
              <Route
                path="/Deliveries"
                element={ <DeliveriesScreen/> }
              />
              <Route
                path="/Contracts"
                element={ <ContractsScreen/> }
              />
              <Route
                path="/News"
                element={ <NewsScreen/> }
              />
              <Route
                path="/Databank"
                element={ <DatabankScreen/> }
              />
              <Route
                path="/Help"
                element={ <HelpScreen/> }
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