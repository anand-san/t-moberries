import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    form: {
      width: "100%",
      marginBottom: 15
    },
    PaymentSwitch: {
      display: "flex",
      justifyContent: "space-between",
    }
  })
);
