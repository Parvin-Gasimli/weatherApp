export const convertFahrenheitToCelsius = (fahrenheit: number) => {
  return ((fahrenheit - 32) * 5) / 9;
};

export const convertCelsiusToFahrenheit = (celsius: number) => {
  return (celsius * 9) / 5 + 32;
};

export const convertKelvinToCelsius = (kelvin: number) => {
  return kelvin - 273.15;
};

export const convertMetersPerSecondToMilesPerHour = (
  metersPerSecond: number
) => {
  if (typeof metersPerSecond === "number") {
    return (metersPerSecond * 2.23694).toFixed(2);
  } else {
    return 0;
  }
};
