import { Button } from "@mui/material";

const BackButton = ({ handleBack }) => {
  return (
    <Button
      onClick={handleBack}
      sx={{
        textTransform: "none",
        paddingX: 4,
        paddingY: 1.5,
        marginTop: 2,
        marginBottom: 3,
        borderColor: "#17292e",
        color: "#17292e",
        "&:hover": {
          borderColor: "#17292e",
          backgroundColor: "#ecf0f1",
        },
      }}
      variant="outlined"
    >
      Back to Cars
    </Button>
  );
};

export default BackButton;
