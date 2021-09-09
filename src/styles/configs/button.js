import { theme } from "../theme";

export const colors = {
  default: {
    color: "#4D4D4E",
    border: "#4D4D4E",
    background: "transparent",
  },
  primary: {
    color: "#4D4D4E",
    border: theme.colors.primary,
    background: theme.colors.primary,
  },
  secondary: {
    color: "#fff",
    border: theme.colors.secondary,
    background: theme.colors.secondary,
  },
  success: {
    color: "#fff",
    border: theme.colors.success,
    background: theme.colors.success,
  },
  danger: {
    color: "#fff",
    border: theme.colors.error,
    background: theme.colors.error,
  },
  back: {
    color: "#4D4D4E",
    border: "#F0F4FD",
    background: "#F0F4FD",
  },
  changeP: {
    color: "#4D4D4E",
    border: "#CEDBF7",
    background: "#CEDBF7",
  },
};

export const sizes = {
  default: {
    height: "48px",
    fontSize: "100%",
    padding: "12px 25px",
    fontWeight: "bolder",
  },
  small: {
    height: "36px",
    fontSize: "16px",
    padding: "6px 30px",
    fontWeight: "bold",
    width: "140px",
  },
  medium: {
    fontSize: "18px",
    padding: "6px 15px",
    fontWeight: "bold",
  },
  large: {
    height: "60px",
    fontSize: "120%",
    padding: "14px 30px",
    fontWeight: "bolder",
  },
};

export default {
  borderRadius: "7px",
  margin: "0 5px 10px 0",
};
