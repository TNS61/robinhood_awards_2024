import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import Header from "./Header";
import { BG } from "@/assets";
import Image from "next/image";

export default function AppWrapper({ children, page }) {
  console.log(page);
  return (
    <Box className="h-full">
      <Container
        maxWidth="md"
        className="px-0 pt-0  h-full"
        sx={{
          backgroundImage: `url(${BG.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        <Image
          src={BG.src}
          width={720}
          height={1080}
          alt="bg"
          className={`fixed top-0 left-[50%] translate-x-[-50%] w-full h-screen object-cover  object-bottom duration-200 ${
            page == 0 ? "" : page == 1 ? "" : "brightness-50"
          }`}
        />

        <Container maxWidth="sm" className="absolute top-0 left-0 pb-10">
          <Header />
          {children}
        </Container>
      </Container>
    </Box>
  );
}
