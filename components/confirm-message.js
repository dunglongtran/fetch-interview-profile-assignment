import React from "react";
import { countries } from "countries-list";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import {
  Box,
  TextField,
  Select,
  InputAdornment,
  InputLabel,
  IconButton,
  Typography,
  Checkbox,
  Link,
  Button
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  details: {
    backgroundColor: "#172038"
  },
  title: {
    color: "#A1D6FA",
    fontWeight: 400,
    fontFamily: "Mulish"
  },
  subtitle: {
    color: "#9FD8FF",
    fontWeight: 100,
    fontFamily: "Mulish"
  },
  checkbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiButtonBase-root.Mui-checked svg": {
      color: "#3E5171",
      backgroundColor: "transparent"
    },
    "& .MuiButtonBase-root svg": {
      color: "transparent",
      backgroundColor: "#3E5171"
    }
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    textTransform: "capitalize",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    minWidth: 150,
    flex: 1,
    fontFamily: "Mulish"
  },
  saveBtn: {
    background: "#42AFF9"
  },
  cancelBtn: {
    background: "#F94263"
  }
}));

export default function ConfirmMassage(props) {
  const { phone = "0983456789" } = props;
  const classes = useStyles();
  const [isChecked, setIsChecked] = React.useState(false);
  const checked = (event) => {
    setIsChecked(event.target.value);
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>
        Would you like to get the latest promos, updates, and offers?
      </Typography>
      <div className={classes.checkbox}>
        <Checkbox value={isChecked} onChange={checked} />
        <Typography className={classes.subtitle}>
          Yes. Send me the latest promotions, updates and offers.
        </Typography>
      </div>
      <div className={classes.buttons}>
        <Button
          variant="contained"
          color="primary"
          className={[classes.button, classes.saveBtn]}
        >
          Save Change
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={[classes.button, classes.cancelBtn]}
        >
          Cancel
        </Button>
      </div>
    </Box>
  );
}
