import { BTN_BACK, BTN_LOGIN } from "@/assets";
import { inputStyle } from "@/utils/inputStyle";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Login({
  handleChange,
  user,
  submitData,
  nextPage,
  nextPageByPage,
  
}) {
  return (
    <Box className="mt-10">
      <Box
        component={"form"}
        className="flex flex-col gap-3"
        onSubmit={submitData}
      >
        <TextField
          id="memberCode"
          name="memberCode"
          value={user?.memberCode}
          onChange={handleChange}
          sx={inputStyle}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  "& .MuiTypography-body1": {
                    fontSize: "1rem",
                    color: "#A5278F",
                  },
                }}
              >
                รหัสร้านค้า :
              </InputAdornment>
            ),
          }}
          required
        />

        <TextField
          id="tel"
          name="tel"
          value={user?.tel}
          onChange={handleChange}
          sx={inputStyle}
          type="tel"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  "& .MuiTypography-body1": {
                    fontSize: "1rem",
                    color: "#A5278F",
                  },
                }}
              >
                เบอร์โทร :
              </InputAdornment>
            ),
          }}
          inputProps={{
            maxLength: 10,
          }}
          required
        />
        <Box className="mt-5 w-full flex flex-col gap-4 justify-center">
          <Button type="submit" className="p-0">
            <Image
              src={BTN_LOGIN.src}
              width={256}
              height={128}
              alt="login"
              className="w-[70%] sm:w-[40%] h-auto"
            />
          </Button>
          <Button className="p-0" onClick={() => nextPageByPage(0)}>
            <Image
              src={BTN_BACK.src}
              width={256}
              height={128}
              alt="login"
              className="w-[70%] sm:w-[40%] h-auto"
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
