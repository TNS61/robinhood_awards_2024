import { BTN_LOGIN, BTN_REGISTER } from "@/assets";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Welcome({ nextPageByPage }) {
  return (
    <Box className="pt-5">
      {" "}
      <Typography
        className="text-center text-white tracking-wider  "
        sx={{
          fontSize: "1.8rem",
        }}
      >
        ลงทะเบียนเข้าร่วมกิจกรรม
      </Typography>
      <Box  className="py-5 flex flex-col gap-4 items-center">
        <Button className="p-0" onClick={() => nextPageByPage(2)}>
          <Image
            src={BTN_REGISTER.src}
            width={256}
            height={128}
            alt="login"
            className="w-[60%] sm:w-[40%] h-auto"
          />
        </Button>
        <Button className="p-0" onClick={() => nextPageByPage(1)}>
          <Image
            src={BTN_LOGIN.src}
            width={256}
            height={128}
            alt="login"
            className="w-[60%] sm:w-[40%] h-auto"
          />
        </Button>
        {/* <Image
          src={BTN_REGISTER.src}
          width={256}
          height={128}
          alt="btn-register"
          className="w-[70%] sm:w-1/2 h-auto"
          draggable={false}
          onClick={() => nextPageByPage(2)}
        /> */}
        {/* <Image
          src={BTN_LOGIN.src}
          width={256}
          height={128}
          alt="btn-register"
          className="w-[70%] sm:w-1/2 h-auto"
          draggable={false}
          onClick={() => nextPageByPage(1)}
        /> */}
      </Box>
    </Box>
  );
}
