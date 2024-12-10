import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import bannerbgImg1 from "/public/images/landingpage/t1.jpg";
import bannerbgImg2 from "/public/images/landingpage/t2.jpg";
import bannerbgImg3 from "/public/images/landingpage/t3.jpg";
import bannerbgImg4 from "/public/images/landingpage/t4.jpg";

const BannerSlider = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        marginTop: "55px",
        height: "30rem", // Define consistent height
        maxWidth: "100%", // Ensures responsiveness
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          animation: "slide 20s linear infinite",
          width: "400%", // Width accommodates all images in a row
        }}
      >
        <Box
          sx={{
            flex: "0 0 25%", // Each image takes 25% of the slider
          }}
        >
          <Image src={bannerbgImg1} alt="Background Image 1" layout="responsive" />
        </Box>
        <Box
          sx={{
            flex: "0 0 25%",
          }}
        >
          <Image src={bannerbgImg2} alt="Background Image 2" layout="responsive" />
        </Box>
        <Box
          sx={{
            flex: "0 0 25%",
          }}
        >
          <Image src={bannerbgImg3} alt="Background Image 3" layout="responsive" />
        </Box>
        <Box
          sx={{
            flex: "0 0 25%",
          }}
        >
          <Image src={bannerbgImg4} alt="Background Image 4" layout="responsive" />
        </Box>
      </Box>

      <style jsx global>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          25% {
            transform: translateX(-25%);
          }
          50% {
            transform: translateX(-50%);
          }
          75% {
            transform: translateX(-75%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </Box>
  );
};

export default BannerSlider;
