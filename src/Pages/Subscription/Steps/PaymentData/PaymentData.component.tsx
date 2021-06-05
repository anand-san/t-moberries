import Cards from "react-credit-cards";
import PaymentDataBehaviour from "./PaymentData.behaviour";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import "react-credit-cards/es/styles-compiled.css";

export default function PaymentData() {
  const { handleChange, handleFocus, formData } = PaymentDataBehaviour();
  return (
    <Grid container spacing={8}>
      <Grid item xs={6}>
        <Cards
          cvc={(formData?.cvc.Value as string)}
          expiry={(formData?.expiry.Value as string)}
          focused={
            (formData?.focused.Value as string) === "cvc" ? "cvc" : "name"
          }
          name={(formData?.name.Value as string)}
          number={(formData?.number.Value as string)}
        />
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              error={formData?.name.Error}
              label="Name"
              name="name"
              value={formData?.name.Value}
              onChange={handleChange}
              onFocus={handleFocus}
              inputProps={{ maxLength: 30 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={formData?.number.Error}
              label="Card Number"
              type="number"
              name="number"
              value={formData?.number.Value}
              onChange={handleChange}
              onFocus={handleFocus}
              inputProps={{ maxLength: 16 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={formData?.expiry.Error}
              label="Expiry"
              name="expiry"
              type="number"
              value={formData?.expiry.Value}
              onChange={handleChange}
              onFocus={handleFocus}
              inputProps={{ maxLength: 4 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={formData?.cvc.Error}
              label="CVC"
              name="cvc"
              type="number"
              value={formData?.cvc.Value}
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
