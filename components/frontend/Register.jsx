import { BTN_BACK, BTN_LOGIN, BTN_NEXT, LOGO } from "@/assets";
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
  prevPage = () => {},
  handleUploadProfile = () => {},
  registerNow = () => {},
  nextPageByPage = () => {},
}) {
  return (
    <Box className="pt-5 pb-10">
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
          id="shopName"
          name="shopName"
          value={user?.shopName}
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
                ชื่อร้านค้า :
              </InputAdornment>
            ),
          }}
          // inputProps={{
          //   maxLength: 10,
          // }}
          required
        />
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
          id="firstName"
          name="firstName"
          value={user?.firstName}
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
                ชื่อ :
              </InputAdornment>
            ),
          }}
          required
        />
        <TextField
          id="lastName"
          name="lastName"
          value={user?.lastName}
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
                นามสกุล :
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

        <TextField
          id="telSpare"
          name="telSpare"
          value={user?.telSpare}
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
                เบอร์โทรสำรอง :
              </InputAdornment>
            ),
          }}
          inputProps={{
            maxLength: 10,
          }}
        />
        <TextField
          id="email"
          name="email"
          value={user?.email}
          onChange={handleChange}
          sx={inputStyle}
          type="email"
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
                อีเมล :
              </InputAdornment>
            ),
          }}
          required
        />
        <Box className="w-full">
          {/* <Typography className="">โซเชียลมีเดีย</Typography> */}
          <TextField
            fullWidth
            id="socialMedia"
            name="socialMedia"
            value={user?.socialMedia}
            onChange={handleChange}
            sx={{
              borderRadius: "1rem",
              backgroundColor: "white !important",
              border: "0.3rem solid #A5278F !important",
              color: "#A5278F !important",
              "& .MuiOutlinedInput-root": {
                border: "0rem !important",
                color: "#A5278F !important",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "0rem !important",
              },
            }}
            type="text"
            multiline
            rows={5}
            placeholder="โซเชียลมีเดีย"
          />
        </Box>

        <Box className="mt-5 w-full flex flex-col gap-5 justify-center">
          <Button type="submit" className="p-0">
            <Image
              src={BTN_NEXT.src}
              width={256}
              height={128}
              alt="login"
              className="w-[60%] sm:w-[40%] h-auto"
            />
          </Button>
          <Button className="p-0" onClick={() => nextPageByPage(0)}>
            <Image
              src={BTN_BACK.src}
              width={256}
              height={128}
              alt="login"
              className="w-[60%] sm:w-[40%] h-auto"
            />
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
        {data?.profile ? (
          <Box className="h-40 w-40 bg-white mx-auto rounded-full border-4 border-[#A5278F]  flex justify-center items-center">
            <Image
              src={data?.profile}
              width={512}
              height={512}
              alt="profile"
              className="w-full h-full object-cover rounded-full"
            />
          </Box>
        ) : (
          <Box className="flex flex-col gap-3">
            <Box className="h-40 w-40 bg-[#492E91] mx-auto rounded-full border-4 border-[#A5278F] flex justify-center items-center p-5">
              <Image
                src={LOGO.src}
                width={512}
                height={512}
                alt="profile"
                className="w-full h-full object-contain"
              />
            </Box>
            <Typography className="text-white text-sm text-center  ">
              อัพโหลดรูปโปรไฟล์
            </Typography>
          </Box>
        )}
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
