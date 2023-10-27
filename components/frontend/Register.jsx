import { inputStyle } from "@/utils/inputStyle";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Register({
  handleChange = () => {},
  user,
  submitData = () => {},
  nextPage = () => {},
  prevPage = () => {},
  handleUploadProfile = () => {},
  registerNow = () => {},
}) {
  return (
    <Box className="mt-10">
      <Box
        component={"form"}
        className="flex flex-col gap-5"
        onSubmit={registerNow}
      >
        <Box>
          <ProfileUpload
            data={user}
            handleUploadProfile={handleUploadProfile}
          />
        </Box>
        <TextField
          id="name"
          name="name"
          value={user.name}
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
                Name :
              </InputAdornment>
            ),
          }}
          inputProps={{
            maxLength: 10,
          }}
          required
        />
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
        <TextField
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          sx={inputStyle}
          type="email"
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
                Email :
              </InputAdornment>
            ),
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
            Register Now !
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
            onClick={prevPage}
          >
            Back
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const ProfileUpload = ({ data, handleUploadProfile }) => {
  const handleSelectFile = (e) => {
    let event = {
      target: {
        name: "profileFile",
        value: null,
      },
    };

    if (e.target.files[0]) {
      event.target.value = e.target.files[0];
    } else {
      event.target.value = null;
    }
    console.log(event);
    handleUploadProfile(event);
  };

  return (
    <>
      <label className="flex w-fit m-auto " htmlFor="profile">
        <Box className="h-40 w-40 bg-white mx-auto rounded-full border-4 border-[#A5278F]  flex justify-center items-center">
          {data.profile ? (
            <Image
              src={data.profile}
              width={512}
              height={512}
              alt="profile"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <Typography className="text-main text-sm text-center ">
              Upload Profile Picture
            </Typography>
          )}
        </Box>
      </label>

      <input
        type="file"
        id="profile"
        onChange={handleSelectFile}
        hidden
        accept="image/*"
      />
    </>
  );
};
