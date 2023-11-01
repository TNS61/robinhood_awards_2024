import { BG } from "@/assets";
import AppWrapper from "@/components/AppWrapper";
import Login from "@/components/frontend/Login";
import Profile from "@/components/frontend/Profile";
import Register from "@/components/frontend/Register";
import Rewards from "@/components/frontend/Rewards";
import Rules from "@/components/frontend/Rules";
import Success from "@/components/frontend/Success";
import TermAndCondition from "@/components/frontend/TermAndCondition";
import Welcome from "@/components/frontend/Welcome";
import Works from "@/components/frontend/Works";
import EditProfile from "@/components/frontend/editProfile";
import { Edit } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

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
    joinReason: "",
    image1Url: "",
    image2Url: "",
    image3Url: "",
    videoUrl: "",
  };

  const initSignIn = { memberCode: "", tel: "" };

  const [user, setUser] = useState(initUser);
  const [signIn, setSignIn] = useState(initSignIn);
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const nextPageByPage = (page) => {
    setPage(page);
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
    setPage(8);
  };
  const signInUser = async () => {
    const res = await axios.post(process.env.API_BASE + "/signin", user);
    console.log(res.data.data);
    setSignIn(res.data.data);
    setUser(res.data.data);
  };

  const updateUser = async () => {
    let tempUser = user;

    if (user.profileFile) {
      const formData = new FormData();
      formData.append("file", user.profileFile);
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

    if (user.image1File) {
      const formData = new FormData();
      formData.append("file", user.image1File);
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
      tempUser.image1Url = res.data.data.url;
    }

    if (user.image2File) {
      const formData = new FormData();
      formData.append("file", user.image2File);
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
      tempUser.image2Url = res.data.data.url;
    }

    if (user.image3File) {
      const formData = new FormData();
      formData.append("file", user.image3File);
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
      tempUser.image3Url = res.data.data.url;
    }

    if (user.videoFile) {
      const formData = new FormData();
      formData.append("file", user.videoFile);
      const res = await axios.post(
        process.env.API_BASE + "/upload/" + user.memberCode,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
      if (res.data.status == "error") return;
      tempUser.videoUrl = res.data.data.url;
    }

    console.log(tempUser);

    const res = await axios.post(process.env.API_BASE + "/update", tempUser);
    console.log(res.data);
    if (res.data.status == "error") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<a href>Why do I have this issue?</a>",
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "บันทึกข้อมูลสำเร็จ",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      nextPageByPage(8);
    });
  };

  const createUser = async () => {
    let tempUser = user;

    if (user.profileFile) {
      const formData = new FormData();
      formData.append("file", user.profileFile);
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

    if (user.image1File) {
      const formData = new FormData();
      formData.append("file", user.image1File);
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
      tempUser.image1Url = res.data.data.url;
    }

    if (user.image2File) {
      const formData = new FormData();
      formData.append("file", user.image2File);
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
      tempUser.image2Url = res.data.data.url;
    }

    if (user.image3File) {
      const formData = new FormData();
      formData.append("file", user.image3File);
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
      tempUser.image3Url = res.data.data.url;
    }

    if (user.videoFile) {
      const formData = new FormData();
      formData.append("file", user.videoFile);
      const res = await axios.post(
        process.env.API_BASE + "/upload/" + user.memberCode,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
      if (res.data.status == "error") return;
      tempUser.videoUrl = res.data.data.url;
    }

    console.log(tempUser);

    const res = await axios.post(process.env.API_BASE + "/create", tempUser);
    console.log(res.data);
    if (res.data.status == "error") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<a href>Why do I have this issue?</a>",
      });
      return;
    }
    nextPage();
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
          <Box className="">
            {/* วัน เวลา สถานที่จัดงาน */}
            <Box className="flex flex-col">
              <Typography className="text-center text-white font-light  tracking-widest">
                เวทีมอบรางวัลคนตัวเล็กที่ยิ่งใหญ่
              </Typography>
              <Typography
                className="text-center text-white tracking-widest mt-3 mb-[-5px]"
                sx={{
                  fontSize: "1.5rem",
                }}
              >
                23 มกราคม 2567
              </Typography>
              <Typography
                className="text-center text-white tracking-widest  "
                sx={{
                  fontSize: "1.5rem",
                }}
              >
                สถานที่ xxxxxxxx
              </Typography>
            </Box>
            <Welcome nextPageByPage={nextPageByPage} />
          </Box>
        );
      case 1:
        return (
          <Box className="px-8">
            {/* วัน เวลา สถานที่จัดงาน */}
            <Typography className="text-center text-white font-light  tracking-widest">
              เวทีมอบรางวัลคนตัวเล็กที่ยิ่งใหญ่
            </Typography>
            <Login
              handleChange={handleChange}
              user={user}
              submitData={submitData}
              nextPage={nextPage}
              nextPageByPage={nextPageByPage}
            />
          </Box>
        );
      case 2:
        return (
          <Box className="px-2">
            {/* วัน เวลา สถานที่จัดงาน */}

            <Register
              handleChange={handleChange}
              user={user}
              nextPage={nextPage}
              prevPage={prevPage}
              handleUploadProfile={handleUploadProfile}
              registerNow={registerNow}
              nextPageByPage={nextPageByPage}
            />
          </Box>
        );
      case 3:
        return (
          <Box className="px-2">
            <TermAndCondition
              nextPage={nextPage}
              nextPageByPage={nextPageByPage}
            />
          </Box>
        );
      case 4:
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
      case 5:
        return (
          <Box className="px-3 pt-5">
            <Rules nextPage={nextPage} />
          </Box>
        );
      case 6:
        return (
          <Box className="px-2 pb-10">
            <Works
              nextPage={nextPage}
              user={user}
              handleChange={handleChange}
              createUser={createUser}
            />
          </Box>
        );
      case 7:
        return (
          <Box className="px-2">
            <Success />
          </Box>
        );
      case 8:
        return (
          <Box className="px-2 pb-10">
            <Profile user={user} nextPage={nextPage} />
          </Box>
        );
      case 9:
        return (
          <Box className="px-2 pb-10">
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
      case 10:
        return (
          <Box className="px-3 pb-10">
            <Rewards
              user={user}
              handleChange={handleChange}
              nextPage={nextPage}
              page={page}
              prevPage={prevPage}
            />
          </Box>
        );
      case 11:
        return (
          <Box className="px-2 pb-10">
            <Works
              nextPage={nextPage}
              user={user}
              handleChange={handleChange}
              createUser={createUser}
              page={page}
              nextPageByPage={nextPageByPage}
              updateUser={updateUser}
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
    if (page == 8) {
      signInUser();
    }
  }, [page]);

  return <AppWrapper page={page}>{pageElement()}</AppWrapper>;
}
