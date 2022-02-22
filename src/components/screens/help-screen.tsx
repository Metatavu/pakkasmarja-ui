import React from "react";
import { Typography } from "@mui/material";
import strings from "localization/strings";

/**
 * Help screen component
 */
const HelpScreen: React.FC = () => {
  return (
    <Typography>{ strings.generic.notImplemented }</Typography>
  );
};

export default HelpScreen;