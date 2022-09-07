import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

import { WindFarm } from "../WindFarm";

const WindFarms = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <WindFarm
            name="Bancal"
            activePower={6.3}
            maxPower={21}
            windSpeed={7.1}
            windDirection={15}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <WindFarm
            name="Westereems"
            activePower={8.9}
            maxPower={168}
            windSpeed={7.1}
            windDirection={15}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <WindFarm
            name="Eekerpolder"
            activePower={6.3}
            maxPower={21}
            windSpeed={7.1}
            windDirection={15}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WindFarms;
