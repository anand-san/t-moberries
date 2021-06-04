import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    form: {
      width: "100%",
    },
    PaymentSwitch: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);
