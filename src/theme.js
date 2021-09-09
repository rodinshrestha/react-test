import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA200",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff0000",
    },
    // error:{
    //   main: ''
    // }
    action: {
      hover: "#fff",
      active: "#FFA200",
      focus: "#FFA200",
    },
  },

  overrides: {
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderColor: "#bdbdbd",
          borderRadius: "10px",
        },
        "&&& $input": {
          padding: "10px",
          "&::placeholder": {
            fontSize: "13px",
          },
        },
      },
    },
    MuiCheckbox: {
      colorPrimary: {
        color: "#FFA200",
        "&$checked": {
          color: "#FFA200",
        },
      },
    },
  },
});

export { theme };
