import { Stack } from "@mui/material";
import React from "react";
import { Content, Root } from "styled/layouts/app-layout";
import Header from "./header";

/**
 * App layout component
 *
 * @param props component properties
 */
const AppLayout: React.FC = ({ children }) => {
  return (
    <Root>
      <Header/>
      <Stack
        direction="row"
        height="100%"
        overflow="auto"
      >
        <Content>
          { children }
        </Content>
      </Stack>
    </Root>
  );
};

export default AppLayout;