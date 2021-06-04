import Cards from "react-credit-cards";
import PaymentDataBehaviour from "./PaymentData.behaviour";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import "react-credit-cards/es/styles-compiled.css";

export default function PaymentData() {
  const { formData, handleChange, handleFocus } = PaymentDataBehaviour();
  return (
    <Grid container spacing={8}>
      <Grid item xs={6}>
        <Cards
          cvc={formData.cvc}
          expiry={formData.expiry}
          focused={formData.focused === "cvc" ? "cvc" : "name"}
          name={formData.name}
          number={formData.number}
        />
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFocus}
              inputProps={{ maxLength: 30 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Card Number"
              type="number"
              name="number"
              variant="outlined"
              value={formData.number}
              onChange={handleChange}
              onFocus={handleFocus}
              inputProps={{ maxLength: 16 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Expiry"
              name="expiry"
              type="number"
              variant="outlined"
              value={formData.expiry}
              onChange={handleChange}
              onFocus={handleFocus}
              inputProps={{ maxLength: 4 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="CVC"
              name="cvc"
              type="number"
              variant="outlined"
              value={formData.cvc}
              onChange={handleChange}
              onFocus={handleFocus}
              inputProps={{ maxLength: 4 }}
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
