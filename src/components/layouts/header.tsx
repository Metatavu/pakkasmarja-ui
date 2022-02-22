import { AppBar, Typography } from "@mui/material";
import strings from "localization/strings";
import React from "react";
import { LogoContainer, HeaderToolbar } from "styled/layouts/header";
import PallasmarjaLogoPath from "../../resources/svg/pakkasmarja-logo.svg";

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
      </HeaderToolbar>
    </AppBar>
  );
};

export default Header;