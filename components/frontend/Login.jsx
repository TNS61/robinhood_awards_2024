import { inputStyle } from "@/utils/inputStyle";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React from "react";

export default function Login({ handleChange, user, submitData, nextPage }) {
  return (
    <Box className="mt-10">
      <Box
        component={"form"}
        className="flex flex-col gap-5"
        onSubmit={submitData}
      >
        <TextField
          id="memberCode"
          name="memberCode"
          value={user.memberCode}
          onChange={handleChange}
          sx={inputStyle}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  "& .MuiTypography-body1": {
                    fontSize: "1.3rem",
                    color: "#A5278F",
                  },
                }}
              >
                Member Code :
              </InputAdornment>
            ),
          }}
          required
        />

        <TextField
          id="tel"
          name="tel"
          value={user.tel}
          onChange={handleChange}
          sx={inputStyle}
          type="tel"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  "& .MuiTypography-body1": {
                    fontSize: "1.3rem",
                    color: "#A5278F",
                  },
                }}
              >
                Tel :
              </InputAdornment>
            ),
          }}
          inputProps={{
            maxLength: 10,
          }}
          required
        />
        <Box className="mt-5 w-full flex flex-col gap-5 justify-center">
          <Button
            type="submit"
            sx={{
              backgroundColor: "white !important",
              borderRadius: "100px !important",
              color: "#A5278F !important",
              fontSize: "1.3rem !important",
              border: "5px solid #A5278F !important",
              width: "fit-content !important",
              px: "2rem !important",
              m: "auto !important",
            }}
            className="normal-case font-bold"
          >
            Login
          </Button>
          <Button
            sx={{
              backgroundColor: "white !important",
              borderRadius: "100px !important",
              color: "#A5278F !important",
              fontSize: "1.3rem !important",
              border: "5px solid #A5278F !important",
              width: "fit-content !important",
              px: "2rem !important",
              m: "auto !important",
            }}
            className="normal-case font-bold"
            onClick={nextPage}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
