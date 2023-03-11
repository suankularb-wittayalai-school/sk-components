// External libraries
import { createContext } from "react";

// SK Components
import { SnackbarProps } from "@suankularb-components/react";

/**
 * A Context that provides the value and the setter for showing Snackbars.
 */
const SnackbarContext = createContext<{
  snackbar: Omit<SnackbarProps, "open" | "onExitComplete"> | null;
  setSnackbar: (
    snackbar: Omit<SnackbarProps, "open" | "onExitComplete">
  ) => void;
}>({ snackbar: null, setSnackbar: (snackbar) => {} });

export default SnackbarContext;
