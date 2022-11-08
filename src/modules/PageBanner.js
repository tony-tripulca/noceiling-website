import { Box, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "../styles/PageBanner.scss";

import Banner1 from "../assets/banner-slides/banner_1.jpg";
import Banner2 from "../assets/banner-slides/banner_2.jpg";
import Banner3 from "../assets/banner-slides/banner_3.jpg";

export default function PageBanner() {
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
          className="carousel"
          showArrows={true}
          autoPlay={true}
          emulateTouch={true}
          interval={3000}
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          dynamicHeight={true}
          animationHandler="fade"
          swipeable={false}
        >
          <div className="banner-holder">
            <img className="banner" src={Banner1} alt="Banner 1" />
            <div className="backdrop"></div>
            <div className="legend">
              <p className="lead">Low Risk</p>
              <p className="text">We invest in the entire stock market</p>
            </div>
          </div>
          <div className="banner-holder">
            <img className="banner" src={Banner2} alt="Banner 2" />
            <div className="backdrop"></div>
            <div className="legend">
              <p className="lead">Stress-Free</p>
              <p className="text">
                Long-term investment partnes who will guide you
              </p>
            </div>
          </div>
          <div className="banner-holder">
            <img className="banner" src={Banner3} alt="Banner 3" />
            <div className="backdrop"></div>
            <div className="legend">
              <p className="lead">Low Cost</p>
              <p className="text">One of the lowest fees in the world</p>
            </div>
          </div>
        </Carousel>
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
