import { Backdrop, Box, Container, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Banner_1 from "../assets/banner-slides/banner_1.jpg";
import Banner_2 from "../assets/banner-slides/banner_2.jpg";
import Banner_3 from "../assets/banner-slides/banner_3.jpg";

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
          showArrows={true}
          autoPlay={true}
          emulateTouch={true}
          interval={3000}
          infiniteLoop={true}
          showIndicators={true}
          showStatus={false}
          showThumbs={false}
        >
          <div>
            <img src={Banner_1} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={Banner_2} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={Banner_3} />
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
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignSelf: "center",
              backgroundColor: "black",
              marginTop: 25,
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            
          </Box>
        </Box>
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
