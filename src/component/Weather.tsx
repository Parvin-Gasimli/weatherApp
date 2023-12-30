import React, { useState } from "react";
import {
  convertMetersPerSecondToMilesPerHour,
  convertCelsiusToFahrenheit,
} from "../utils/helper";
import { useSelector } from "react-redux";
import SearchHistory from "./SearchHisory";
import SearchButton from "./SearchButton";
import { WeatherProps } from "../types";
import { Box, Typography, Switch, FormGroup } from "@mui/material";

const Weather = ({ city, temp, humidity, wind, time, icon }: WeatherProps) => {
  const [chnageSwitch, setChangeSwitch] = useState(true);
  const windSpeedInMilesPerHour = convertMetersPerSecondToMilesPerHour(
    wind as number
  );
  const Fahrenheit = convertCelsiusToFahrenheit(temp as number);
  const serachItemHistory = useSelector((state: any) => state.weather.history);
  // console.log(serachItemHistory, "serachItemHistory");
  return (
    <Box
      className="bg-neutral-800 flex flex-col pl-4 pr-20 pt-12 pb-8 items-start max-md:pr-5"
      sx={{
        backgroundColor: "#333",
        paddingRight: 2,
        borderRadius: "12px",
      }}
    >
      <Typography
        variant="h5"
        className="text-white text-7xl w-[679px] ml-12 mt-1 max-md:text-4xl max-md:ml-2.5"
      >
        Hotlify
      </Typography>
      <div className="self-center w-full max-w-[1150px] mt-7 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[15%] max-md:w-full max-md:ml-0">
            <div className="flex items-center justify-between max-md:justify-start gap-5 mt-5 max-md:mt-10">
              <Typography
                variant="h5"
                className="text-white text-3xl font-light my-auto"
              >
                °C
              </Typography>
              <FormGroup>
                <Switch
                  checked={chnageSwitch}
                  onClick={() => {
                    setChangeSwitch(!chnageSwitch);
                  }}
                />
              </FormGroup>
              <div className="text-white text-3xl font-light mt-1.5 self-start">
                °F
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[85%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-9">
              <div className="flex flex-col items-stretch pl-20 pr-9 max-md:max-w-full max-md:px-5">
                <Box
                  className="self-center flex w-[362px] max-w-full items-stretch gap-4 ml-8"
                  sx={{
                    display: "flex",
                    width: "362px",
                    maxWidth: "100%",
                    gap: 4,
                    marginLeft: 8,
                  }}
                >
                  <Box
                    className="flex grow basis-[0%] flex-col items-center"
                    sx={{
                      display: "flex",
                      flexGrow: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      flexBasis: "0%",
                      "@media (max-width:600px)": { marginTop: 0 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      className="text-lime-500 text-center text-xl font-medium leading-9 tracking-widest uppercase whitespace-nowrap"
                    >
                      Today
                    </Typography>
                    <Box
                      className="bg-lime-500 self-stretch shrink-0 h-1 mt-1"
                      sx={{
                        backgroundColor: "#6EE7B7",
                        alignSelf: "stretch",
                        flexShrink: 0,
                        height: "1px",
                        marginTop: 1,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    className="text-zinc-300 text-center text-xl font-medium leading-9 tracking-widest uppercase grow whitespace-nowrap self-start"
                  >
                    Tomorrow
                  </Typography>
                </Box>
                <SearchButton />
                <div className=" bg shadow-md flex flex-col items-stretch ml-3.5 mt-14 pt-10 pb-5 rounded-[32px] max-md:max-w-full max-md:mt-10">
                  <div className="z-[1] flex flex-col px-7 max-md:max-w-full max-md:px-5">
                    <div className="flex w-full items-center justify-between gap-3.5 self-start">
                      <div className="flex gap-2 text-white text-3xl font-light my-auto">
                        {city}
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d375a6f2e1e6fbbba5964159aa9e41598542f4f4e42d30309929b77f495a884?apiKey=960bf456301745adb224fc22de8011ef&"
                          className="aspect-square object-contain object-center w-[31px] overflow-hidden self-stretch shrink-0 max-w-full"
                        />
                      </div>

                      <div className="text-white text-xl font-medium underline z-[1] mt-0">
                        {time}
                      </div>
                    </div>
                    <div className="self-center flex items-stretch max-md:items-center justify-between gap-5 mt-24 max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/91f4a8ee555b7374a7b5940acef1c25aac9b2dd2cc3161fd5bac512685fe6b30?apiKey=960bf456301745adb224fc22de8011ef&"
                        className="aspect-[0.31] object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-zinc-100 text-7xl max-md:text-2xl font-light">
                        {!chnageSwitch ? `${temp} °C` : `${Fahrenheit} °F`}
                      </div>
                      {icon && (
                        <img
                          loading="lazy"
                          src={icon}
                          className="aspect-[2] object-contain object-center w-[100px] h-[100px] overflow-hidden shrink-0 max-w-full self-start"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-around mt-32">
                    <div className="flex flex-col   self-end items-start max-md:mr-2.5 ">
                      <div className="text-white text-xl font-medium uppercase ml-2.5">
                        Wind
                      </div>
                      <div className="text-white text-2xl font-medium self-stretch mt-2">
                        {chnageSwitch
                          ? `${wind} km/h`
                          : `${windSpeedInMilesPerHour} mph`}
                      </div>
                    </div>
                    <div className="flex mt-0 flex-col items-stretch ml-14 self-start max-md:ml-2.5">
                      <div className="text-white text-xl font-medium uppercase">
                        Humidity
                      </div>
                      <div className="text-white text-2xl font-medium self-center mt-3.5">
                        {humidity && `${humidity} %`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-5 flex  max-md:flex-wrap items-center gap-[12px] justify-start max-md:justify-center">
                {serachItemHistory.length > 0 &&
                  serachItemHistory.map(
                    (item: any, index: number) => (
                      console.log(item, "item"),
                      (
                        <SearchHistory
                          key={index}
                          name={item?.name}
                          temp={
                            !chnageSwitch
                              ? `${item?.main?.temp} °C`
                              : `${Fahrenheit} °F`
                          }
                          humidity={item?.main?.humidity}
                          icon={
                            `http://openweathermap.org/img/w/${item?.weather[0]?.icon}.png` ||
                            ""
                          }
                        />
                      )
                    )
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Weather;
