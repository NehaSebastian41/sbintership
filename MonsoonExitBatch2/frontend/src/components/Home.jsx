import { useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import "../App.css";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => {
        console.log("Data fetched:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data. Please try again later.");
      });
  }, []);

  return (
    <div className="Mar">
      {error && <Typography color="error">{error}</Typography>}
      <Grid container spacing={6}>
        {data.length > 0 ? (
          data.map((val, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent>
                  <img
                    src={val.img_url}
                    className="img-fluid rounded-start"
                    width="100%"
                    alt="Employee"
                  />
                  <Typography gutterBottom variant="h5">
                    {val.EmpName}
                  </Typography>
                  <Typography component="div">{val.designation}</Typography>
                  <Typography component="div">{val.empId}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button size="small" variant="contained" color="secondary">
                    Delete
                  </Button>
                  <Button size="small" variant="contained" color="secondary">
                    Update
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No data available</Typography>
        )}
      </Grid>
    </div>
  );
};

export default Home;
