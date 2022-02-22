import React, { useState } from "react";
import { List, ListItem, ListItemButton, ListItemText, Popover } from "@mui/material";
import strings from "localization/strings";
import { logout } from "features/auth-slice";
import { useAppDispatch } from "app/hooks";
import theme from "theme";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
/**
 * Component properties
 */
interface Props {
}

/**
 * Account item component
 */
const AccountItem: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const [ menuAnchor, setMenuAnchor ] = useState<HTMLDivElement | undefined>(undefined);

  /**
   * Renders account menu
   */
  const renderAccountMenu = () => (
    <Popover
      open={ !!menuAnchor }
      anchorEl={ menuAnchor }
      onClose={ () => setMenuAnchor(undefined) }
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={ () => dispatch(logout()) }>
            <ListItemText primary={ strings.header.logout }/>
          </ListItemButton>
        </ListItem>
      </List>
    </Popover>
  );

  /**
   *  Component render
   */
  return (
    <>
      <ListItemButton
        onClick={ ({ currentTarget }) => setMenuAnchor(currentTarget) }
      >
        <ListItemText sx={{ color: theme.palette.primary.main }} primary={ strings.header.account }/>
        <ArrowDropDownIcon color="primary"/>
      </ListItemButton>
      { renderAccountMenu() }
    </>
  );
};

export default AccountItem;