import React, { useState, useEffect, useRef } from "react";
import { Tabs, Tab, Box, Typography, List, ListItem } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const Specifications = ({ car }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const sectionsRef = useRef([]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    sectionsRef.current[newValue]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  //Some of the details are currently commented out due to a lack of accurate information on them 
  const specificationsData = {
    "Engine & Transmission": {
      "Battery Capacity": car.batteryCapacity,
      // "Usable Battery (kWh)": car.usable_battery,
      "Max Power": car.maxPower,
      //  "Motor Power": car.motorPower,
      "Max Torque": car.maxTorque,
      "Range": car.real_range + " km",
      "Consumption": car.efficiency +" kWh/100km",
      "Charging Time (D.C)": car.chargingTimeDC,
      "Regenerative Braking": car.regenerativeBraking,
      "Charging Port": car.chargingPort,
      "Transmission Type": car.transmissionType,
      "Drive Type": car.driveType,
    },
    "Fuel & Performance": {
      "Fuel Type": car.fuelType,
      "Emission Norm Compliance": car.emissionNorm,
      "Acceleration 0-100 km/h": car.acceleration + " s",
    },
    "Charging": {
      "Charging Time": car.chargingTimeDC,
      "Fast Charging": car.fastCharging,
    },
    "Suspension, Steering & Brakes": {
      "Front Suspension": car.frontSuspension,
      "Rear Suspension": car.rearSuspension,
      "Steering Type": car.steeringType,
      "Steering Column": car.steeringColumn,
      "Front Brake Type": car.frontBrakeType,
      "Rear Brake Type": car.rearBrakeType,
    },
    "Dimensions & Capacity": {
      "Length": car.length,
      "Width": car.width,
      "Height": car.height,
      "Seating Capacity": car.seatingCapacity,
      "Wheel Base": car.wheelBase,
      "No. of Doors": car.doors,
    },
    "Entertainment": {
      "Radio": car.radio,
      //  "Wireless Phone Charging": car.wirelessCharging,
      "Bluetooth Connectivity": car.bluetooth,
      // "Touchscreen": car.touchscreen,
      // "Touchscreen Size": car.touchscreenSize,
      // "Android Auto": car.androidAuto,
      // "Apple CarPlay": car.appleCarPlay,
      "No. of Speakers": car.speakers,
      "USB Ports": car.usbPorts,
    },
  };

  const renderSpecificationContent = (specCategory) => {
    return (
      <List sx={{ padding: "1rem"}}>
        {Object.entries(specCategory).map(([label, value], index) => (
          <ListItem 
            key={label} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              flexDirection: { xs: 'column', md: 'row' }, //Shows the info vertically in smaller screen sizes
              paddingY: '10px',
              overflowX:'auto',
              borderBottom: index === Object.entries(specCategory).length - 1 ? 'none' : '1px solid #ccc', // Avoid border on the last item
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: { xs: '10px', md: '15px' }}}> 
              {label}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: { xs: '10px', md: '15px' } }}>
              {typeof value === 'boolean' ? (
                value ? <CheckIcon sx={{ color: 'green' }} /> : <CloseIcon sx={{ color: 'red' }} />
              ) : (
                <Typography variant="body1" >{value}</Typography>
              )}
            </Box>
          </ListItem>
        ))}
      </List>
    );
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = sectionsRef.current.indexOf(entry.target);
          if (index !== -1) {
            setSelectedTab(index);
          }
        }
      });
    }, options);

    sectionsRef.current.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: "#fff",
        padding: { xs: "1rem 0", sm: "0 0rem" }, // Remove left/right padding below 600px
        borderRadius: "10px",
        boxShadow: 2,
        margin: { xs: '0', sm: '0 1rem', md: '0 4rem' }, // Responsive margins
        marginBottom: 4,
      }}
    >
      <Box sx={{ width: '35%', borderRight: '1px solid #ccc' }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem", marginTop: "1rem", textAlign:"center", fontSize: {xs: '15px', md:'20px'} }}>
          Specifications
        </Typography>
        <Tabs
          orientation="vertical"
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="Car specifications"
          sx={{ height: '100%', paddingX: { xs: '0', sm: '2rem' } }} // Remove padding for small screens
        >
          {Object.keys(specificationsData).map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ width: '75%', height: '32rem', overflowY: 'auto', overflowX: 'auto', paddingLeft: { xs: '0', sm: '2rem' }, paddingRight: { xs: '0', sm: '2rem' }, scrollSnapType: 'y mandatory' }}>
        {Object.entries(specificationsData).map(([category, specs], index) => (
          <Box
            key={category}
            ref={el => sectionsRef.current[index] = el}
            sx={{ marginBottom: '1rem', scrollSnapAlign: 'start' }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: '0.5rem', textAlign:"center", fontSize: { xs: '15px', md: '20px' }}}>
              {category}
            </Typography>
            {renderSpecificationContent(specs)}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Specifications;
