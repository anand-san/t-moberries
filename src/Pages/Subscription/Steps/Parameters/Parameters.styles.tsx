import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    form: {
      width: "80%",
      maxWidth: 850,
    },
    PaymentSwitch: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);
