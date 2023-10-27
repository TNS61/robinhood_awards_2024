import { BG } from "@/assets";
import AppWrapper from "@/components/AppWrapper";
import Login from "@/components/frontend/Login";
import Register from "@/components/frontend/Register";
import Rewards from "@/components/frontend/Rewards";
import TermAndCondition from "@/components/frontend/TermAndCondition";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Home() {
  const initUser = {
    name: "",
    memberCode: "",
    tel: "",
    email: "",
    profile: "",
    reward: null,
    joinReason: "",
  };

  const [user, setUser] = useState(initUser);
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const handleUploadProfile = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const registerNow = async (e) => {
    e.preventDefault();
    nextPage();
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(user);
  };
  const previewProfile = () => {
    if (user.profileFile) {
      let url = URL.createObjectURL(user.profileFile);

      setUser({
        ...user,
        profile: url,
      });
    }
  };

  const pageElement = () => {
    switch (page) {
      case 0:
        return (
          <Box className="px-8">
            {/* วัน เวลา สถานที่จัดงาน */}
            <Box className="flex flex-col gap-1">
              <Typography className="text-center text-white font-light">
                23 Jan 2024
              </Typography>
              <Typography className="text-center text-white font-light">
                14.00 - 16.00
              </Typography>
              <Typography className="text-center text-white font-light">
                @Samyan Mitrtown
              </Typography>
            </Box>
            <Login
              handleChange={handleChange}
              user={user}
              submitData={submitData}
              nextPage={nextPage}
            />
          </Box>
        );
      case 1:
        return (
          <Box className="px-8">
            {/* วัน เวลา สถานที่จัดงาน */}
            <Box className="flex flex-col gap-1">
              <Typography className="text-center text-white font-light">
                23 Jan 2024
              </Typography>
              <Typography className="text-center text-white font-light">
                14.00 - 16.00
              </Typography>
              <Typography className="text-center text-white font-light">
                @Samyan Mitrtown
              </Typography>
            </Box>
            <Register
              handleChange={handleChange}
              user={user}
              submitData={submitData}
              nextPage={nextPage}
              prevPage={prevPage}
              handleUploadProfile={handleUploadProfile}
              registerNow={registerNow}
            />
          </Box>
        );
      case 2:
        return (
          <Box className="px-8">
            <TermAndCondition nextPage={nextPage} />
          </Box>
        );
      case 3:
        return (
          <Box className="px-8">
            <Rewards user={user} handleChange={handleChange}/>
          </Box>
        );
    }
  };

  useEffect(() => {
    previewProfile();
  }, [user.profileFile]);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return <AppWrapper page={page}>{pageElement()}</AppWrapper>;
}
