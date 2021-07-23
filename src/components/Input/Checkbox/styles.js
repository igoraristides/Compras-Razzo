import { makeStyles } from "@material-ui/core";

import { theme } from "../../../styles/theme";

export default makeStyles(() => ({
  checkbox: {
    "&.Mui-checked": {
      color: theme.colors.primary,
    },
  },
  label: {
    color: theme.colors.label,
  },
}));
