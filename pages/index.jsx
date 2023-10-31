import { BG } from "@/assets";
import AppWrapper from "@/components/AppWrapper";
import Login from "@/components/frontend/Login";
import Profile from "@/components/frontend/Profile";
import Register from "@/components/frontend/Register";
import Rewards from "@/components/frontend/Rewards";
import Rules from "@/components/frontend/Rules";
import Success from "@/components/frontend/Success";
import TermAndCondition from "@/components/frontend/TermAndCondition";
import Works from "@/components/frontend/Works_bk";
import EditProfile from "@/components/frontend/editProfile";
import { Edit } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const initUser = {
    shopName: "",
    firstName: "",
    lastName: "",
    memberCode: "",
    tel: "",
    telSpare: "",
    email: "",
    socialMedia: "",
    profile: "",
    profileFile: null,
    reward: [],
    file: [],
    joinReason: "",
  };

  const initSignIn = { memberCode: "", tel: "" };

  const [user, setUser] = useState(initUser);
  const [signIn, setSignIn] = useState(initSignIn);
  const [page, setPage] = useState(5);

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

  const submitData = async (e) => {
    e.preventDefault();
    console.log(user);
    const res = await axios.post(process.env.API_BASE + "/signin", user);
    console.log(res.data.data);
    setSignIn(res.data.data);
    setUser(res.data.data);
    setPage(7);
  };
  const signInUser = async () => {
    const res = await axios.post(process.env.API_BASE + "/signin", user);
    console.log(res.data.data);
    setSignIn(res.data.data);
    setUser(res.data.data);
  };

  const createUser = async () => {
    let tempUser = user;

    if (user.profileFile) {
      const formData = new FormData();
      formData.append("file", user.profileFile);

      // console.log(formData);
      // console.log(user.profileFile);
      const res = await axios.post(
        process.env.API_BASE + "/upload/" + user.memberCode,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(res.data);
      if (res.data.status == "error") return;
      tempUser.profile = res.data.data.url;
    }

    if (user.file.length > 0) {
      let tempFiles = [];
      for (let i = 0; i < user.file.length; i++) {
        const formData = new FormData();
        formData.append("file", user.file[i].file);
        const res = await axios.post(
          process.env.API_BASE + "/upload/" + user.memberCode,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (res.data.status == "error") return;

        tempFiles.push({
          file: res.data.data.url,
          type: user.file[i].file.type,
        });
      }
      tempUser.file = tempFiles;
    }

    const res = await axios.post(process.env.API_BASE + "/create", tempUser);
    console.log(res.data.data);
    if (res.data.status == "error") return;
    tempUser.userId = res.data.data;

    if (tempUser.file.length > 0) {
      for (let i = 0; i < tempUser.file.length; i++) {
        const res = await axios.post(process.env.API_BASE + "/createFile", {
          userId: tempUser.userId,
          url: tempUser.file[i].file,
          type: tempUser.file[i].type,
        });

        if (res.data.status == "error") return;
      }
      nextPage();
    }
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
                23 มกราคม 2567
              </Typography>
              <Typography className="text-center text-white font-light">
                14.00 - 16.00
              </Typography>
              <Typography className="text-center text-white font-light">
                @สามย่ายมิททาวน์
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
          <Box className="px-2">
            {/* วัน เวลา สถานที่จัดงาน */}
            <Box className="flex flex-col gap-1">
              <Typography className="text-center text-white font-light">
                23 มกราคม 2567
              </Typography>
              <Typography className="text-center text-white font-light">
                14.00 - 16.00
              </Typography>
              <Typography className="text-center text-white font-light">
                @สามย่ายมิททาวน์
              </Typography>
            </Box>
            <Register
              handleChange={handleChange}
              user={user}
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
          <Box className="px-3">
            <Rewards
              user={user}
              handleChange={handleChange}
              nextPage={nextPage}
              page={page}
              prevPage={prevPage}
            />
          </Box>
        );
      case 4:
        return (
          <Box className="px-8">
            <Rules nextPage={nextPage} />
          </Box>
        );
      case 5:
        return (
          <Box className="px-2">
            <Works
              nextPage={nextPage}
              user={user}
              handleChange={handleChange}
              createUser={createUser}
            />
          </Box>
        );
      case 6:
        return (
          <Box className="px-2">
            <Success />
          </Box>
        );
      case 7:
        return (
          <Box className="px-2">
            <Profile user={user} nextPage={nextPage} />
          </Box>
        );
      case 8:
        return (
          <Box className="px-2">
            <EditProfile
              handleChange={handleChange}
              user={user}
              nextPage={nextPage}
              prevPage={prevPage}
              handleUploadProfile={handleUploadProfile}
              registerNow={registerNow}
            />
          </Box>
        );
      case 9:
        return (
          <Box className="px-8">
            <Rewards
              user={user}
              handleChange={handleChange}
              nextPage={nextPage}
              page={page}
              prevPage={prevPage}
            />
          </Box>
        );
      case 10:
        return (
          <Box className="px-2">
            <Works
              nextPage={nextPage}
              user={user}
              handleChange={handleChange}
              createUser={createUser}
            />
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
  useEffect(() => {
    if (page == 7) {
      signInUser();
    }
  }, [page]);

  return <AppWrapper page={page}>{pageElement()}</AppWrapper>;
}
