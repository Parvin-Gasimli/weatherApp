import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import {
  addToSearchHistory,
  fetchWeather,
} from "../store/weatherSlice/weatherslice";
import { Button, TextField, Box } from "@mui/material";

const SearchButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [city, setCity] = useState("");
  const weatherData = useSelector((state: any) => state.weather.weatherData);
  const getWeather = (e: any) => {
    e.preventDefault();
    dispatch(fetchWeather(city));
    dispatch(addToSearchHistory(weatherData));
    setCity("");
  };
  const loading = useSelector((state: any) => state.weather.loading);
  return (
    <Box
      className="rounded self-center bg-white flex w-[711px] max-md:w-[300px] max-w-full items-center justify-between gap-5 mt-11 pl-8 pr-3.5 py-2  max-md:mt-10 max-md:pl-5"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TextField
        type="text"
        value={city}
        disabled={loading}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search..."
        size="small"
        variant="outlined"
        sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
        fullWidth
      />
      <Button
        variant="contained"
        color="success"
        size="medium"
        disabled={loading || !city}
        onClick={getWeather}
      >
        {loading ? "Searching..." : "Search"}
      </Button>
    </Box>
  );
};

export default SearchButton;
