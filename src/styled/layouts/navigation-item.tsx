import { ListItemButton, ListItemIcon } from "@mui/material";
import { styled } from "@mui/material/styles";

/**
 * Styled navigation button
 */
export const NavigationButton = styled(ListItemButton, {
  label: "navigation-button"
})(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(1, 2),
    color: "#000"
  },
  "&.Mui-selected": {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main
  }
}));

/**
 * Styled navigation button icon
 */
export const NavigationButtonIcon = styled(ListItemIcon, {
  label: "navigation-button-icon"
})(({ theme }) => ({
  minWidth: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    minWidth: theme.spacing(6)
  }
}));