import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import BannerSlider from "./BannerSlider";

const Banner = () => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  return (
    <Box my={0} sx={{ overflow: "hidden",
       height:"330px"}}>
   
      <BannerSlider />
    </Box>
  );
};

export default Banner;
