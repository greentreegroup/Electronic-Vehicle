import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { COLOUR, SELECT_COLOUR2 } from "./Colour";

const EmptyCartButton = ({ handleEmptyCart }) => {
  return (
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={handleEmptyCart}
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
        Empty Cart
      </Button>
  );
};

export default EmptyCartButton;
