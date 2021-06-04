import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: '50px',
      padding: 50
    },footerLeft: {
      display: "flex",
      flexDirection: "column",
      fontWeight: 600
    }
  }),
);