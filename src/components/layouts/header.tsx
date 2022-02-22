import { AppBar, Typography, List } from "@mui/material";
import strings from "localization/strings";
import React from "react";
import { LogoContainer, HeaderToolbar } from "styled/layouts/header";
import PallasmarjaLogoPath from "../../resources/svg/pakkasmarja-logo.svg";
import NavigationItem from "./navigation-item";

/**
 * Header component
 */
const Header: React.FC = () => {
  /**
   * Component render
   */
  return (
    <AppBar elevation={ 0 } position="static" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
      <HeaderToolbar>
        <LogoContainer>
          <img alt="Pakkasmarja logo" src={ PallasmarjaLogoPath }/>
          <Typography color="primary">
            { strings.appTitle }
          </Typography>
        </LogoContainer>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          <NavigationItem
            title={ strings.header.overview }
            to="/"
          />
          <NavigationItem
            title={ strings.header.deliveries }
            to="deliveries"
          />
          <NavigationItem
            title={ strings.header.contracts }
            to="contracts"
          />
          <NavigationItem
            title={ strings.header.news }
            to="news"
          />
          <NavigationItem
            title={ strings.header.databank }
            to="databank"
          />
          <NavigationItem
            title={ strings.header.help }
            to="help"
          />
        </List>
      </HeaderToolbar>
    </AppBar>
  );
};

export default Header;