import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 10,
      padding: 50,
      minWidth: "300px"
    },footerLeft: {
      display: "flex",
      flexDirection: "column",
      fontWeight: 600
    }
  }),
);