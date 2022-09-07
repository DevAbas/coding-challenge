import React, { useEffect } from "react";
import { Box } from "@mui/material";
import axios from "axios";

//COMPONENTS
import { WindFarms } from "./components/WindFarms";

function App() {
  useEffect(() => {
    async function getWeather() {
      const lat = 58.7984;
      const lng = 17.8081;
      const params = "windSpeed,swellHeight,waveHeight";
      try {
        const response = await axios.get(
          `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
          {
            headers: {
              Authorization: process.env.REACT_APP_API_KEY as string,
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    getWeather();
  }, []);
  return (
    <Box style={{ display: "flex", justifyContent: "center", padding: 20 }}>
      <WindFarms />
    </Box>
  );
}

export default App;
