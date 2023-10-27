import { LOGO } from "@/assets";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <Box className="pb-2 pt-5 ">
      <Image
        src={LOGO.src}
        width={256}
        height={128}
        alt="logo"
        className="w-24 m-auto"
      />
      <Typography sx={{fontSize:"1.8rem"}} className="tracking-widest text-white text-center">Awards 2024</Typography>
    </Box>
  );
}
