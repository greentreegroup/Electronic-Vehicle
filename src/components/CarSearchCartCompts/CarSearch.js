import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import CarCard from "./Card";
import { useCarContext } from "./CarContext";
import FilterPanel from "./FilterPanel";
import Pagination from "./Pagination";
import Loading from "./Loading";
import { modelTypes } from "./data";
import { PA_BACKEND_CAR_URL, PA_UNIQUE_CAR_BRANDS_URL } from "./urls";
import "./CarSearch.css";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { carData, setCarData, currentPage, setCurrentPage } = useCarContext();
  const [sortOrder, setSortOrder] = useState("price-asc");
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [yearRange, setYearRange] = useState([2000, 2024]);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [carBrands, setCarBrands] = useState([]);
  const [error, setError] = useState(null);

  const cardsPerPage = 6;

  const handleSortBrand = (event) => setBrand(event.target.value);
  const handleSortModels = (event) => setModel(event.target.value);
  const handleSortOrderChange = (event) => setSortOrder(event.target.value);
  const handlePriceChange = (event, newValue) => setPriceRange(newValue);
  const handleYearChange = (event, newValue) => setYearRange(newValue);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        setLoading(true);
        const response = await fetch(PA_BACKEND_CAR_URL, {
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setCarData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (carData === null) fetchCarData();
  }, [carData, setCarData]);

  useEffect(() => {
    if (carData) {
      const filteredResults = carData
        .filter(car => car.price >= priceRange[0] && car.price <= priceRange[1])
        .filter(car => car.year >= yearRange[0] && car.year <= yearRange[1])
        .filter(car => (brand ? car.brand === brand : true))
        .filter(car => (model ? car.model_type === model : true));

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

      const paginatedResults = filteredResults.slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage,
      );

      setSearchResults(paginatedResults);
      setTotalPages(Math.ceil(filteredResults.length / cardsPerPage));
    }
  }, [brand, priceRange, yearRange, currentPage, carData, sortOrder, model]);

  useEffect(() => {
    const fetchCarBrands = async () => {
      try {
        const response = await fetch(PA_UNIQUE_CAR_BRANDS_URL, {
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) throw new Error("Network response error for fetching car brands list");
        const data = await response.json();
        setCarBrands(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCarBrands();
  }, []);

  return (
    <Box className="car-search-container">
      <Typography variant="h4" gutterBottom>
        EV Search
      </Typography>
      <div className="flex-container-car">
        <div className="filter-panel">
          <FilterPanel
            brand={brand}
            model={model}
            sortOrder={sortOrder}
            priceRange={priceRange}
            yearRange={yearRange}
            carBrands={carBrands}
            modelTypes={modelTypes}
            handleSortModels={handleSortModels}
            handleSortOrderChange={handleSortOrderChange}
            handleSortBrand={handleSortBrand}
            handlePriceChange={handlePriceChange}
            handleYearChange={handleYearChange}
          />
        </div>
        <div className="results-panel">
          {loading && <Loading loading={loading} />}
          {error && <Typography color="error">{error}</Typography>}
          <div className="car-results-grid">
            {searchResults.map((result) => (
              <CarCard key={result.id} result={result} />
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </Box>
  );
};

export default Search;
