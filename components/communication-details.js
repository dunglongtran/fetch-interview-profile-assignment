import React from "react";
import { countries } from "countries-list";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import {
  TextField,
  Select,
  InputAdornment,
  InputLabel,
  IconButton,
  Typography,
  Link
} from "@material-ui/core";

import TextFieldSelect from "./text-filed-select";

const COUNTRIES = Object.keys(countries).map((c) => ({
  label: countries[c].name,
  value: countries[c].name
}));

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {},
    backgroundColor: "#172038"
  },
  details: {
    backgroundColor: "#172038",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2)
  },
  verify: {
    color: "#9FD8FF",
    textDecoration: "underline",
    textUnderlinePosition: "under",
    fontFamily: "Mulish"
  },
  text: { color: "#A1D6FA", fontFamily: "Mulish" },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    "& .MuiFormLabel-root": {
      color: "rgba(159, 216, 255, 0.36)",
      fontFamily: "Mulish"
    },
    "& .MuiInputBase-input": {
      color: "#9FD8FF",
      fontFamily: "Mulish"
    },
    "& .MuiInputBase-root::before": {
      display: "none"
    },
    "& .MuiInputBase-root": {
      backgroundColor: "rgba(159,216,255,0.24)",
      padding: theme.spacing(1),
      fontFamily: "Mulish"
    }
  }
}));

function maskPhoneNumber(phone = "") {
  return phone
    .split("")
    .map((digit, index) => (index < phone.length - 4 ? "*" : digit))
    .join("");
}

export default function CommunicationDetails(props) {
  const { phone = "0983456789" } = props;
  const classes = useStyles();
  const [language, setLanguage] = React.useState("Singapore");
  const changeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.details}>
        <Typography className={[classes.text]}>
          Communication details
        </Typography>
        <TextField
          label="Mobile Number"
          value={maskPhoneNumber(phone)}
          className={[classes.textField]}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Typography className={classes.verify}>Verify</Typography>
              </InputAdornment>
            )
          }}
        ></TextField>
        <TextFieldSelect
          label="Language"
          value={language}
          onChange={changeLanguage}
          items={COUNTRIES}
        />
      </div>
    </form>
  );
}
