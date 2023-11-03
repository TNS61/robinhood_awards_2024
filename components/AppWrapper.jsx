import { Box, Container } from "@mui/material";
import React, { use, useEffect, useState } from "react";
import Header from "./Header";
import { BG, CONTACT, FAVICON, NOTE } from "@/assets";
import Image from "next/image";
import Head from "next/head";

export default function AppWrapper({ children, page }) {
  useEffect(() => {
    //  set window scroll to top when page change //
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <Box className="h-full">
      <Head>
        <title>Robinhood Awards 2024</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="theme-color"
          content={`${
            page == 0
              ? "#644498"
              : page == 1
              ? "#644498"
              : page == 2
              ? "#644498"
              : "#372051"
          }`}
        ></meta>
        {/*##  icon ##  */}
        <link rel="icon" href={FAVICON.src} />
      </Head>
      <Container
        maxWidth="md"
        className="px-0 pt-0  h-full"
        // sx={{
        //   backgroundImage: `url(${BG.src})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center bottom",
        // }}
      >
        <Image
          src={BG.src}
          width={720}
          height={1080}
          alt="bg"
          className={`fixed top-0 left-[50%] translate-x-[-50%] w-[1024px] h-screen object-cover  object-bottom duration-200 ${
            page == 0 ? "" : page == 1 ? "" : page == 2 ? "" : "brightness-50"
          }`}
        />

        <Container
          maxWidth="sm"
          className="absolute top-0 left-[50%] translate-x-[-50%]  h-full"
        >
          <Header page={page} />
          {children}
          {page == 0 && (
            <Image
              src={CONTACT.src}
              width={720}
              height={256}
              alt="contact"
              className="w-full sm:w-[80%] h-auto absolute bottom-2 left-[50%] translate-x-[-50%]  duration-200 px-2"
            />
          )}
        </Container>
      </Container>
    </Box>
  );
}
