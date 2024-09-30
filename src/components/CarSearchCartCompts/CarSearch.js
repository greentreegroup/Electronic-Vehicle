import React, { useEffect, useState } from "react";
import { Box, Grid, SelectChangeEvent } from "@mui/material";
import { Typography, CarCard } from "./Card";
import { useCarContext } from "./CarContext";
import FilterPanel from "./FilterPanel";
import Pagination from "./Pagination";
import Loading from "./Loading";
import { PA_BACKEND_CAR_URL, PA_UNIQUE_CAR_BRANDS_URL } from "./urls"

const Search: React.FC = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { carData, setCarData, currentPage, setCurrentPage } = useCarContext();
  const [sortOrder, setSortOrder] = useState("price-asc");
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [yearRange, setYearRange] = useState([2000, 2024]);
  const [brand, setBrand] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [carBrands, setCarBrands] = useState([]);

  const cardsPerPage = 6;

  const handleSortBrand = (event) => {
    setBrand(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleYearChange = (event, newValue) => {
    setYearRange(newValue);
  };

  // on page mount load all cars from flow backend
  useEffect(() => {
    if (carData === null) {
      setLoading(true);
      fetch(PA_BACKEND_CAR_URL, {
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          //console.log("Fetched data:", data);
          setCarData(data);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [carData, setCarData]);

  // filter cars
  useEffect(() => {
    if (carData) {
      const filteredResults = carData
        .filter(
          (car) => car.price >= priceRange[0] && car.price <= priceRange[1],
        )
        .filter((car) => car.year >= yearRange[0] && car.year <= yearRange[1])
        .filter((car) => (brand ? car.brand === brand : true));

      // Sorting based on the selected sortOrder
      switch (sortOrder) {
        case "price-asc":
          filteredResults.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          filteredResults.sort((a, b) => b.price - a.price);
          break;
        case "year-asc":
          filteredResults.sort((a, b) => a.year - b.year);
          break;
        case "year-desc":
          filteredResults.sort((a, b) => b.year - a.year);
          break;
        default:
          break;
      }

      // Apply pagination logic: slice the filtered results to show only the results for the current page
      const paginatedResults = filteredResults.slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage,
      );

      setSearchResults(paginatedResults);
      setTotalPages(Math.ceil(filteredResults.length / cardsPerPage));
    }
  }, [brand, priceRange, yearRange, currentPage, carData, sortOrder]);

  // fetch unique car brands
  useEffect(() => {
    const fetchCarBrands = async () => {
      try {
        const response = await fetch(PA_UNIQUE_CAR_BRANDS_URL, {
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error(
            "Network response error for fetching car brands list",
          );
        }

        const data = await response.json();
        setCarBrands(data);
      } catch (error) {
        console.error("Error fetching car brands:", error);
      }
    };

    fetchCarBrands();
  }, []);

  return (
    <Box sx={{ padding: 0, margin: 0, maxWidth: "100%" }}>
      <Grid container alignItems="center" justifyContent="space-between">
          <Typography variant="h4" gutterBottom>
            EV Search
          </Typography>
      </Grid>
      <Grid container spacing={2}>
        <FilterPanel
          brand={brand}
          sortOrder={sortOrder}
          priceRange={priceRange}
          yearRange={yearRange}
          carBrands={carBrands}
          handleSortOrderChange={handleSortOrderChange}
          handleSortBrand={handleSortBrand}
          handlePriceChange={handlePriceChange}
          handleYearChange={handleYearChange}
        />

        <Grid item xs={12} md={9}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Loading loading={loading} />
            {searchResults.map((result) => (
              <Grid item xs={4} key={result.id}>
                <CarCard result={result} />
              </Grid>
            ))}
          </Grid>
          <Pagination
            loading={loading}
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
