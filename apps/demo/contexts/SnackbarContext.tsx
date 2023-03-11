// External libraries
import { createContext } from "react";

// TODO: Replace `any` with `SnackbarProps`

/**
 * A Context that provides the value and the setter for showing Snackbars.
 */
const SnackbarContext = createContext<{
  snackbar: any;
  setSnackbar: (snackbar: any) => void;
}>({ snackbar: null, setSnackbar: (snackbar) => {} });

export default SnackbarContext;
