import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import PaymentDataBehaviour from "./Confirmation.behaviour";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function Confirmation() {
  const { handleChange, formData, handleTnC } = PaymentDataBehaviour();
  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <TextField
          label="Email Address"
          name="UserEmail"
          variant="outlined"
          value={formData?.UserEmail}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData?.TnC}
              onChange={handleTnC}
              name="TnC"
            />
          }
          label="I agree with the Terms and Conditions"
        />
      </Grid>
    </Grid>
  );
}
