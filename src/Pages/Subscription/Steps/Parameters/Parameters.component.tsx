import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useStyles } from "./Parameters.styles";
import ParametersBehaviour from "./Parameters.behaviour";

export default function Parameters() {
  const classes = useStyles();
  const { handleChange, formData } = ParametersBehaviour();

  return (
    <div>
      <FormControl className={classes.form}>
        <InputLabel>Duration (Months)</InputLabel>
        <Select
          name="Duration"
          value={formData?.Duration.Value}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl className={classes.form}>
        <InputLabel>Amount (GB)</InputLabel>
        <Select
          name="Amount"
          value={formData?.Amount.Value}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl className={classes.form}>
        <FormControlLabel
          className={classes.PaymentSwitch}
          control={
            <Switch
              checked={Boolean(formData?.UpfrontPayment.Value)}
              onChange={handleChange}
              inputProps={{ name: "UpfrontPayment" }}
            />
          }
          label="Upfront Payment"
          labelPlacement="start"
        />
      </FormControl>
    </div>
  );
}
