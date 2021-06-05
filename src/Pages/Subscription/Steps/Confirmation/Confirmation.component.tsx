import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import PaymentDataBehaviour from "./Confirmation.behaviour";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function Confirmation() {
  const { handleChange, formData, handleTnC } = PaymentDataBehaviour();
  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <TextField
          label="Email Address"
          name="UserEmail"
          value={formData?.UserEmail.Value}
          error={formData?.UserEmail.Error as boolean}
          onChange={handleChange}
          fullWidth
          helperText={formData?.UserEmail.HelperText}
        />
      </Grid>
      <Grid item xs={12}>
      <FormControl required error={!formData?.TnC.Value as boolean} component="fieldset">
        <FormControlLabel
          control={
            <Checkbox
              checked={formData?.TnC.Value as boolean}
              onChange={handleTnC}
              name="TnC"
            />
          }
          label="I agree with the Terms and Conditions"
        />
        <FormHelperText>You must agree with our TnC to continue</FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
}
