import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

type WindFarmProps = {
  name: string;
  activePower: number;
  maxPower: number;
  windDirection: number;
  windSpeed: number;
};

const WindFarm = ({
  name,
  activePower,
  maxPower,
  windDirection,
  windSpeed,
}: WindFarmProps) => {
  return (
    <Card sx={{ width: 500 }}>
      <CardContent>
        <Typography
          variant="h1"
          sx={{ fontSize: 18 }}
          color="text.secondary"
          gutterBottom
        >
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {windSpeed}m/s {windDirection}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Active Power: {activePower} / {maxPower} MW
        </Typography>
        <LinearProgress
          value={Math.round((activePower * maxPower) / 100)}
          variant="determinate"
        />
      </CardContent>
    </Card>
  );
};

export default WindFarm;
