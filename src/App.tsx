import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Weather from "./component/Weather";
import moment from "moment";
import { Container, Box } from "@mui/material";
function App() {
  const weatherData = useSelector((state: any) => state.weather.weatherData);

  // const [searchHistory, setSearchHistory] = useState([]) as any[];
  //Search History from local storage

  // useEffect(() => {
  //   const storedHistory = localStorage.getItem("searchHistory");
  //   if (storedHistory) {
  //     setSearchHistory(JSON.parse(storedHistory));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  // }, [searchHistory]);

  console.log(import.meta.env.VITE_REACT_WEATHER_API_key, "keu");

  return (
    <Container sx={{ my: 5 }}>
      <Box>
        <ToastContainer />
      </Box>
      <Box>
        <Weather
          temp={weatherData && Math.floor(weatherData?.main?.temp || "")}
          city={(weatherData && weatherData?.name) || ""}
          humidity={weatherData && weatherData?.main?.humidity}
          wind={(weatherData && weatherData?.wind?.speed) || ""}
          icon={
            (weatherData &&
              `${import.meta.env.VITE_REACT_APP_ICON_URL}/${
                weatherData?.weather[0]?.icon
              }.png`) ||
            ""
          }
          time={
            (weatherData &&
              moment()
                .utcOffset(weatherData?.timezone / 60)
                .format("MMM DD  dd")) ||
            ""
          }
        />
      </Box>
    </Container>
  );
}

export default App;
