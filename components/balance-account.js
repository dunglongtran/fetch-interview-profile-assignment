import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Avatar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1F2744",
    padding: theme.spacing(2)
  },
  thumb: {
    width: 147,
    height: 147
  },
  text: {
    color: "#A1D6FA",
    fontFamily: "Mulish"
  },
  name: {
    marginTop: theme.spacing(1),
    fontFamily: "Mulish"
  },
  balance: {
    marginTop: theme.spacing(0.5),
    fontWeight: 100,
    fontFamily: "Mulish"
  }
}));

export default function BalanceAccount(props) {
  const { thumb, name, balance } = props;
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <Avatar src={thumb} className={classes.thumb} />
      <Typography variant={"h6"} className={[classes.text, classes.name]}>
        {name}
      </Typography>
      <Typography variant={"body2"} className={[classes.text, classes.balance]}>
        {balance}
      </Typography>
    </Paper>
  );
}
