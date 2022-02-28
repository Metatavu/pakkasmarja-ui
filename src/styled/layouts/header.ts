import { Toolbar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

/**
 * Styled logo container component
 */
export const LogoContainer = styled(Box, {
  label: "logo-container"
})(() => ({
  display: "flex",
  width: 150,
  alignItems: "center"
}));

/**
 * Styled logo toolbar content component
 */
export const HeaderToolbar = styled(Toolbar, {
  label: "header-toolbar"
})(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
}));