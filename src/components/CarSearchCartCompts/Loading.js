import React from "react";
import { Box } from "@mui/material";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { COLOUR } from "./Colour";

const Loading = ({ loading }) => {
  return (
    <>
      {loading && (
        <Box
          sx={{
            position: "absolute",
            top: "55%",
            left: "61%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            backgroundColor: "rgba(255, 255, 255, 0)",
          }}
        >
          <CircularProgress
            variant="indeterminate"
            disableShrink
            sx={{
              color: COLOUR,
              animationDuration: "550ms",
              position: "absolute",
              left: 0,
              [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: "round",
              },
            }}
            size={100}
            thickness={5}
          />
        </Box>
      )}
    </>
  );
};

export default Loading;
