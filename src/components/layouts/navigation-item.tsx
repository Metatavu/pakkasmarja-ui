import React from "react";
import { NavigationButton } from "styled/layouts/navigation-item";
import { useResolvedPath, useMatch, useNavigate } from "react-router-dom";
import { ListItemText } from "@mui/material";

/**
 * Component properties
 */
interface Props {
  disabled?: boolean;
  title: string;
  to: string;
}

/**
 * Navigation item component
 *
 * @param props component properties
 */
const NavigationItem: React.FC<Props> = ({
  disabled,
  title,
  to
}) => {
  const navigate = useNavigate();
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  /**
   * Check if viewport is mobile size
   */

  return (
    <NavigationButton
      disabled={ disabled }
      selected={ match !== null }
      onClick={ () => navigate(to) }
    >
      <ListItemText primary={ title }/>
    </NavigationButton>
  );
};

export default NavigationItem;