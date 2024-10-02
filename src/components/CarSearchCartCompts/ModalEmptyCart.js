import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useCart } from "./CartContext";
import { COLOUR, SELECT_COLOUR2, BACKGROUND_COLOUR } from "./Colour";
import { adjustBrightness } from "./functions"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalEmptyCart = ({
  modalOpen,
  setModalOpen,
  calculateTotal
}) => {
  const { setCart } = useCart();

  const handleConfirmEmptyCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
    calculateTotal([]);
    setModalOpen(false);
  };

  const handleClose = () => setModalOpen(false);

  return (
    <>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="Empty Cart"
        aria-describedby="Confirm to empty cart"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Confirm Empty Cart
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Are you sure you want to empty the cart? This action cannot be
            undone.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button
              variant="contained"
              onClick={handleConfirmEmptyCart}
              sx={{
                textTransform: "none",
                paddingX: 1,
                paddingY: 1,
                marginTop: 1,
                marginBottom: 1,
                borderColor: BACKGROUND_COLOUR,
                color: BACKGROUND_COLOUR,
                backgroundColor: SELECT_COLOUR2,
                "&:hover": {
                  borderColor: BACKGROUND_COLOUR,
                  backgroundColor: adjustBrightness(COLOUR, 25),
                },
              }}
            >
              Yes
            </Button>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                textTransform: "none",
                paddingX: 1,
                paddingY: 1,
                marginTop: 1,
                marginBottom: 1,
                borderColor: COLOUR,
                color: BACKGROUND_COLOUR,
                "&:hover": {
                  borderColor: COLOUR,
                  backgroundColor: adjustBrightness(COLOUR, 25),
                },
              }}
            >
              No
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ModalEmptyCart;
