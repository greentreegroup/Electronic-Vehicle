import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { COLOUR } from "./Colour"

const ContactSeller = ({ contacts }) => {
  return (
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {/* Address */}
        <Grid item xs={12} md={4}>
          <LocationOnIcon style={{ color: COLOUR, marginRight: 8 }} />
          <Typography variant="body1">
            <strong>{contacts.title}:</strong>{" "}
            {contacts.address ? contacts.address : "None"}
          </Typography>
        </Grid>

        {/* Phone */}
        <Grid item xs={12} md={4}>
          <PhoneIcon style={{ color: COLOUR, marginRight: 8 }} />
          <Typography variant="body1">
            <strong>Phone:</strong>{" "}
            {contacts.phone ? contacts.phone : "000-000-0000"}
          </Typography>
        </Grid>

        {/* Email */}
        <Grid item xs={12} md={4}>
          <EmailIcon style={{ color: COLOUR, marginRight: 8 }} />
          <Typography variant="body1">
            <strong>Email:</strong>{" "}
            {contacts.email ? contacts.email : "none@mail.com"}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSeller;
