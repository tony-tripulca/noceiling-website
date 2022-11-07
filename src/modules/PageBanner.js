import { Box, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Banner1 from "../assets/banner-slides/banner_1.jpg";
import Banner2 from "../assets/banner-slides/banner_2.jpg";
import Banner3 from "../assets/banner-slides/banner_3.jpg";

export default function PageBanner() {
  const imgStyle = {
    height: "100vh",
  };

  const legendStyle = {
    width: "300px",
    height: "200px",
    "background-color": "black",
    "z-index": "99",
  };

  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Carousel
          showArrows={true}
          autoPlay={true}
          emulateTouch={true}
          interval={3000}
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          dynamicHeight={true}
        >
          <div style={{ display: "flex", "justify-content": "center" }}>
            <img src={Banner1} alt="Banner 1" style={imgStyle} />
            <p className="legend" style={legendStyle}>
              Legend 1
            </p>
          </div>
          <div>
            <img src={Banner2} alt="Banner 2" style={imgStyle} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={Banner3} alt="Banner 3" style={imgStyle} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        ></Box>
      </Box>
      <Typography>
        Enim magna anim nisi aliqua elit aute aute officia aute velit culpa est.
        Aliqua fugiat laborum magna tempor do incididunt. Commodo velit ut
        laboris quis quis magna amet anim et fugiat. Qui amet nulla proident
        tempor non. Enim magna anim nisi aliqua elit aute aute officia aute
        velit culpa est. Aliqua fugiat laborum magna tempor do incididunt.
        Commodo velit ut laboris quis quis magna amet anim et fugiat. Qui amet
        nulla proident tempor non. Enim magna anim nisi aliqua elit aute aute
        officia aute velit culpa est. Aliqua fugiat laborum magna tempor do
        incididunt. Commodo velit ut laboris quis quis magna amet anim et
        fugiat. Qui amet nulla proident tempor non. Enim magna anim nisi aliqua
        elit aute aute officia aute velit culpa est. Aliqua fugiat laborum magna
        tempor do incididunt. Commodo velit ut laboris quis quis magna amet anim
        et fugiat. Qui amet nulla proident tempor non. Enim magna anim nisi
        aliqua elit aute aute officia aute velit culpa est. Aliqua fugiat
        laborum magna tempor do incididunt. Commodo velit ut laboris quis quis
        magna amet anim et fugiat. Qui amet nulla proident tempor non. Enim
        magna anim nisi aliqua elit aute aute officia aute velit culpa est.
        Aliqua fugiat laborum magna tempor do incididunt. Commodo velit ut
        laboris quis quis magna amet anim et fugiat. Qui amet nulla proident
        tempor non. Enim magna anim nisi aliqua elit aute aute officia aute
        velit culpa est. Aliqua fugiat laborum magna tempor do incididunt.
        Commodo velit ut laboris quis quis magna amet anim et fugiat. Qui amet
        nulla proident tempor non.
      </Typography>
    </Box>
  );
}
