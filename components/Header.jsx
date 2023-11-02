import { LOGO } from "@/assets";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Header({ page }) {
  return (
    <Box className={`${page == 0 ? "pt-14" : page == 1 ? "pt-14" : "pt-5"}`}>
      <Image
        src={LOGO.src}
        width={256}
        height={128}
        alt="logo"
        // className="w-36 m-auto "
        className={`${
          page == 1 ? "w-36 m-auto" : page == 2 ? "w-36 m-auto" : "w-24 m-auto"
        }`}
      />
      {/* {page != 4 || page != 5 ? (
        <Typography
          sx={{ fontSize: "1.8rem" }}
          className="tracking-widest text-white text-center"
        >
          Awards 2024
        </Typography>
      ) : (
        <></>
      )} */}
      {page <= 3 ? (
        <Typography
          sx={{ fontSize: "2.5rem" }}
          className="tracking-widest text-white text-center uppercase font-bold mt-4"
        >
          Awards 2024
        </Typography>
      ) : (
        <Typography
          sx={{ fontSize: "2rem" }}
          className="tracking-widest text-white text-center uppercase font-bold mt-4"
        >
          Awards 2024
        </Typography>
      )}
    </Box>
  );
}
