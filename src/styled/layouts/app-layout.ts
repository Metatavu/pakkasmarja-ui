import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

/**
 * Styled root component
 */
export const Root = styled(Box, {
  label: "app-layout--root"
})(() => ({
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  display: "grid",
  gridTemplateRows: "auto auto 1fr"
}));

/**
 * Styled content component
 */
export const Content = styled(Box, {
  label: "app-layout--content"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  width: "100%",
  padding: theme.spacing(3),
  overflow: "auto"
}));