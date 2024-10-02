import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import {
  ArrowBack,
  ArrowForward,
  KeyboardDoubleArrowLeftRounded,
  KeyboardDoubleArrowRightRounded,
} from "@mui/icons-material";
import { BACKGROUND_COLOUR, SELECT_COLOUR, COLOUR } from "./Colour";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <>
      {totalPages === 0 ? (
        <Typography variant="h5" color={COLOUR} align="center" mt={4}>
          It looks like we don't have any cars that match. Try modifying your
          search. 🚙😄
        </Typography>
      ) : totalPages > 1 ? (
        <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
          {/* First Page Button */}
          <IconButton
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            sx={{
              "&:hover": {
                backgroundColor: BACKGROUND_COLOUR,
                "& .MuiSvgIcon-root": {
                  color: SELECT_COLOUR,
                },
                "& .MuiTypography-root": {
                  color: SELECT_COLOUR,
                },
              },
            }}
          >
            <Box display="flex" alignItems="center">
              <KeyboardDoubleArrowLeftRounded sx={{ fontSize: 40 }} />
              <Typography variant="body2" sx={{ marginLeft: 1, fontSize: 20 }}>
                1
              </Typography>
            </Box>
          </IconButton>

          {/* Previous Page Button */}
          <IconButton
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            sx={{
              "&:hover": {
                backgroundColor: BACKGROUND_COLOUR,
                "& .MuiSvgIcon-root": {
                  color: SELECT_COLOUR,
                },
              },
            }}
          >
            <ArrowBack sx={{ fontSize: 40 }} />
          </IconButton>

          {/* Next Page Button */}
          <IconButton
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            sx={{
              "&:hover": {
                backgroundColor: BACKGROUND_COLOUR,
                "& .MuiSvgIcon-root": {
                  color: SELECT_COLOUR,
                },
              },
            }}
          >
            <ArrowForward sx={{ fontSize: 40 }} />
          </IconButton>

          {/* Last Page Button */}
          <IconButton
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            sx={{
              "&:hover": {
                backgroundColor: BACKGROUND_COLOUR,
                "& .MuiSvgIcon-root": {
                  color: SELECT_COLOUR,
                },
                "& .MuiTypography-root": {
                  color: SELECT_COLOUR,
                },
              },
            }}
          >
            <Box display="flex" alignItems="center">
              <KeyboardDoubleArrowRightRounded sx={{ fontSize: 40 }} />
              <Typography variant="body2" sx={{ marginLeft: 1, fontSize: 20 }}>
                {totalPages}
              </Typography>
            </Box>
          </IconButton>
        </Box>
      ) : null}
    </>
  );
};

export default Pagination;
