import Button from "@mui/material/Button";
import { COLOUR, SELECT_COLOUR2 } from "./Colour";

const CheckoutButton = ({ handleCheckoutCart }) => {
  return (
      <Button
        variant="outlined"
        onClick={handleCheckoutCart}
        size="small"
        sx={{
          textTransform: "none",
          borderColor: COLOUR,
          color: COLOUR,
          "&:hover": {
            borderColor: COLOUR,
            backgroundColor: SELECT_COLOUR2,
          },
        }}
      >
        Checkout
      </Button>
  );
};

export default CheckoutButton;
