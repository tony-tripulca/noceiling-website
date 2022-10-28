import { Box, Container, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function PageBanner() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Box
        sx={{
          backgroundColor: "red",
          height: "calc(100vh - 100px)",
          marginTop: 12,
        }}
      >
        <Carousel>
          <div>
            <img src="assets/1.jpeg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="assets/2.jpeg" />
            <p className="legend">Legend 2</p>
          </div>
        </Carousel>
      </Box>
    </Box>
  );
}
