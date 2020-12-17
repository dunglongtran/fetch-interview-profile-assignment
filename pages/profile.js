import { useState, useCallback } from "react";
import Container from "@material-ui/core/Container";
import { fade, makeStyles } from "@material-ui/core/styles";

import {
  Person as PersonIcon,
  AccountBalance as AccountBalanceIcon,
  Mail as MailIcon
} from "@material-ui/icons";

import { Grid } from "@material-ui/core";

import BalanceAccount from "../components/balance-account";
import TabBar from "../components/tab-bar";
import TabPanel from "../components/tab-panel";
import CommunicationDetails from "../components/communication-details";
import AccountDetails from "../components/account-details";
import HomeAddress from "../components/home-address";
import ConfirmMessage from "../components/confirm-message";

const useStyles = makeStyles((theme) => ({
  profile: {
    backgroundColor: "#1F2744",
    margin: `${theme.spacing(3)}px auto`,
    padding: 0,
    minWidth: 300,
    maxWidth: 1006
  },
  groupDetails: {
    minWidth: 300,
    width: "auto"
  },
  groupLeft: {
    height: "auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
}));

const TABS = [
  { label: "Account Profile", icon: <PersonIcon /> },
  { label: "Update Bank Account", icon: <AccountBalanceIcon /> },
  { label: "Inbox", icon: <MailIcon /> }
];
const BALANCE = {
  thumb:
    "https://images.unsplash.com/photo-1573451443210-bb45db25c1fe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VhbHRofGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  name: "Howdycandidate",
  balance: "THB 565.000"
};

const ProfileContent = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={6} className={[classes.groupLeft, classes.groupDetails]}>
        <BalanceAccount {...BALANCE} />
        <CommunicationDetails />
      </Grid>
      <Grid item xs={6} className={[classes.groupDetails]}>
        <AccountDetails />
      </Grid>

      <Grid item xs={12}>
        <HomeAddress />
      </Grid>
    </Grid>
  );
};
export default function ProfilePage() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = useCallback(
    (event, newValue) => {
      setValue(newValue);
    },
    [value]
  );

  return (
    <Container className={classes.profile}>
      <TabBar tabIndex={value} onChange={handleChange} tabs={TABS} />

      <TabPanel value={value} index={0}>
        <ProfileContent />
        <ConfirmMessage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Container>
  );
}
