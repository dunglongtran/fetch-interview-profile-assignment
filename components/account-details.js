import React from "react";
import { countries } from "countries-list";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { Lock as LockIcon } from "@material-ui/icons";
import {
  TextField,
  Select,
  InputAdornment,
  InputLabel,
  IconButton,
  Typography,
  Link
} from "@material-ui/core";

import TextSelectHorizontal from "./text-select-horizontal";
import TextFieldHorizontal from "./text-field-horizontal";

const GENDERS = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" }
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {},
    marginBottom: theme.spacing(2)
  },
  accountDetails: {
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
  text: { color: "rgba(159, 216, 255, 0.36)", fontFamily: "Mulish" },
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
  },
  changePassword: {
    "& input.MuiInputBase-input": {
      textDecoration: "underline",
      textUnderlinePosition: "under"
    }
  }
}));

export default function AccountDetails(props) {
  const classes = useStyles();
  const [gender, setGender] = React.useState("Male");
  const changeGender = (event) => {
    setGender(event.target.value);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.accountDetails}>
        <Typography className={[classes.text]}>Account details </Typography>
        <TextFieldHorizontal
          label={"Username"}
          value={"howdycandidate"}
          icon={<LockIcon />}
          hasBackground
        />
        <TextFieldHorizontal
          label={"Fist Name"}
          value={"howdycandidate"}
          icon={<LockIcon />}
        />
        <TextFieldHorizontal
          label={"Date of Birth"}
          value={"12/10/1999"}
          icon={<LockIcon />}
          hasBackground
        />
        <TextFieldHorizontal
          label={"Password"}
          value={"Change Password"}
          optionClass={[classes.changePassword]}
        />
        <TextFieldHorizontal
          label={"Country"}
          value={"Chile"}
          icon={<LockIcon />}
          hasBackground
        />
        <TextFieldHorizontal
          label={"Currency"}
          value={"THB"}
          icon={<LockIcon />}
        />
        <TextFieldHorizontal
          label={"Last Name"}
          value={"pewpew"}
          icon={<LockIcon />}
          hasBackground
        />
        <TextFieldHorizontal
          label={"E-Mail"}
          value={"example@mail.com"}
          icon={<LockIcon />}
        />
        <TextSelectHorizontal
          label={"Gender"}
          value={gender}
          onChange={changeGender}
          items={GENDERS}
          hasBackground
        />
      </div>
    </form>
  );
}
