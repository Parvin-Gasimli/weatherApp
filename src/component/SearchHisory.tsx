import React from "react";
import { SearchHistoryProps } from "../types";
import { Paper, Typography } from "@mui/material";

const SearchHistory = ({ name, temp, humidity, icon }: SearchHistoryProps) => (
  <Paper
    className="history_element relative flex flex-col w-full rounded-md items-center text-white max-w-[200px] max-md:max-w-[170px]"
    elevation={3}
  >
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "100px",
        borderRadius: "20px",
      }}
    ></div>
    <Typography variant="body1" gutterBottom>
      {name}
    </Typography>
    <img
      style={{ width: "50px", height: "50px" }}
      src={icon}
      alt="Weather Icon"
    />
    <Typography variant="body1" gutterBottom>
      {temp}
    </Typography>
    <Typography variant="body1" gutterBottom>
      {`${humidity}%`}
    </Typography>
  </Paper>
);
export default SearchHistory;
