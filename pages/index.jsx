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
import ResultAward from "@/components/frontend/ResultAward";
import { Edit } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import FormAward from "@/components/frontend/FormAward";

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
  };

  const initSignIn = { memberCode: "", tel: "" };

  const [user, setUser] = useState(initUser);
  const [signIn, setSignIn] = useState(initSignIn);
  const [page, setPage] = useState(0);
  const [selectAward, setSelectAward] = useState(null);

  const handleSelectAward = (value) => {
    setSelectAward(value);
  };

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

    setSignIn(res.data.data);
    setUser(res.data.data);
    setPage(7);
  };
  const signInUser = async () => {
    const res = await axios.post(process.env.API_BASE + "/signin", user);

    setSignIn(res.data.data);
    setUser(res.data.data);
  };

  const updateUser = async () => {
    Swal.fire({
      title: "คุณต้องการบันทึกข้อมูลใช่หรือไม่?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `บันทึก`,
      denyButtonText: `ไม่บันทึก`,
    }).then(async (result) => {
      if (!result.isConfirmed) return;

      let tempUser = { ...user };

      if (user?.reward?.length > 0) {
        const reward = await Promise.all(
          user.reward.map(async (item) => {
            if (item.image1File) {
              const image1Url = await handleUploadFile(item.image1File);

              if (image1Url) {
                item.image1Url = image1Url;
              }
            }

            if (item.image2File) {
              const image2Url = await handleUploadFile(item.image2File);

              if (image2Url) {
                item.image2Url = image2Url;
              }
            }

            if (item.image3File) {
              const image3Url = await handleUploadFile(item.image3File);

              if (image3Url) {
                item.image3Url = image3Url;
              }
            }

            if (item.videoFile) {
              const videoUrl = await handleUploadFile(item.videoFile);

              if (videoUrl) {
                item.videoUrl = videoUrl;
              }
            }

            return item;
          })
        );

        tempUser.reward = reward;

        console.log(tempUser.reward);
      }

      if (tempUser?.reward?.length > 0) {
        tempUser.reward.map(async (item) => {
          const res = await axios.put(process.env.API_BASE + "/update", {
            ...item,
            userId: tempUser.userId,
          });

          if (res.data.status == "error") return;
        });
      }

      Swal.fire({
        icon: "success",
        title: "บันทึกข้อมูลสำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        // nextPage();
      });
    });
  };

  const createUser = async () => {
    Swal.fire({
      title: "คุณต้องการบันทึกข้อมูลใช่หรือไม่?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `บันทึก`,
      denyButtonText: `ไม่บันทึก`,
    }).then(async (result) => {
      if (!result.isConfirmed) return;

      let tempUser = { ...user };

      if (user?.profileFile) {
        const profile = await handleUploadFile(user?.profileFile);

        if (profile) {
          tempUser.profile = profile;
        }
      }

      if (user?.reward?.length > 0) {
        const reward = await Promise.all(
          user.reward.map(async (item) => {
            if (item.image1File) {
              const image1Url = await handleUploadFile(item.image1File);

              if (image1Url) {
                item.image1Url = image1Url;
              }
            }

            if (item.image2File) {
              const image2Url = await handleUploadFile(item.image2File);

              if (image2Url) {
                item.image2Url = image2Url;
              }
            }

            if (item.image3File) {
              const image3Url = await handleUploadFile(item.image3File);

              if (image3Url) {
                item.image3Url = image3Url;
              }
            }

            if (item.videoFile) {
              const videoUrl = await handleUploadFile(item.videoFile);

              if (videoUrl) {
                item.videoUrl = videoUrl;
              }
            }

            return item;
          })
        );

        tempUser.reward = reward;
      }

      const res = await axios.post(process.env.API_BASE + "/create", tempUser);

      if (res.data.status == "error") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong create!",
          footer: "<a href>Why do I have this issue?</a>",
        });
        return;
      }

      tempUser.userId = res.data.data;

      if (tempUser?.userId) {
        if (tempUser?.reward?.length > 0) {
          tempUser.reward.map(async (item) => {
            const res = await axios.post(process.env.API_BASE + "/createFile", {
              ...item,
              userId: tempUser.userId,
            });

            if (res.data.status == "error") return;
          });
        }
      }

      const res_sendEmail = await axios.post(
        process.env.API_BASE + "/sendEmail",
        tempUser
      );

      if (res_sendEmail.data.status == "error") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong email!",
          footer: "<a href>Why do I have this issue?</a>",
        });
        return;
      }

      // tempUser.message = "ขอบคุณที่ร่วมลงทะเบียน Awards 2024 by robinhood";
      // const res_sendSms = await axios.post(
      //   process.env.API_BASE + "/sendEmail",
      //   tempUser
      // );

      // if (res_sendSms.data.status == "error") {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Something went wrong!",
      //     footer: "<a href>Why do I have this issue?</a>",
      //   });

      //   return;
      // }

      Swal.fire({
        icon: "success",
        title: "บันทึกข้อมูลสำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        nextPage();
      });
    });

    // let tempUser = user;
    // if (user?.profileFile) {
    //   const formData = new FormData();
    //   formData.append("file", user?.profileFile);
    //   const res = await axios.post(
    //     process.env.API_BASE + "/upload/" + user.memberCode,
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );
    //   // console.log(res.data);
    //   if (res.data.status == "error") return;
    //   tempUser.profile = res.data.data.url;
    // }
    // if (user?.reward?.length > 0) {
    //   user.reward.map(async (item) => {
    //     if (item.image1File) {
    //       const formData = new FormData();
    //       formData.append("file", item.image1File);
    //       const res = await axios.post(
    //         process.env.API_BASE + "/upload/" + user.memberCode,
    //         formData,
    //         {
    //           headers: {
    //             "Content-Type": "multipart/form-data",
    //           },
    //         }
    //       );
    //       // console.log(res.data);
    //       if (res.data.status == "error") return;
    //       item.image1Url = res.data.data.url;
    //     }
    //     if (item.image2File) {
    //       const formData = new FormData();
    //       formData.append("file", item.image2File);
    //       const res = await axios.post(
    //         process.env.API_BASE + "/upload/" + user.memberCode,
    //         formData,
    //         {
    //           headers: {
    //             "Content-Type": "multipart/form-data",
    //           },
    //         }
    //       );
    //       // console.log(res.data);
    //       if (res.data.status == "error") return;
    //       item.image2Url = res.data.data.url;
    //     }
    //     if (item.image3File) {
    //       const formData = new FormData();
    //       formData.append("file", item.image3File);
    //       const res = await axios.post(
    //         process.env.API_BASE + "/upload/" + user.memberCode,
    //         formData,
    //         {
    //           headers: {
    //             "Content-Type": "multipart/form-data",
    //           },
    //         }
    //       );
    //       // console.log(res.data);
    //       if (res.data.status == "error") return;
    //       item.image3Url = res.data.data.url;
    //     }
    //     if (item.videoFile) {
    //       const formData = new FormData();
    //       formData.append("file", item.videoFile);
    //       const res = await axios.post(
    //         process.env.API_BASE + "/upload/" + user.memberCode,
    //         formData,
    //         {
    //           headers: {
    //             "Content-Type": "multipart/form-data",
    //           },
    //         }
    //       );
    //       console.log(res.data);
    //       if (res.data.status == "error") return;
    //       item.videoUrl = res.data.data.url;
    //     }
    //   });
    // }
    // const res = await axios.post(process.env.API_BASE + "/create", tempUser);
    // if (res.data.status == "error") {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Something went wrong!",
    //     footer: "<a href>Why do I have this issue?</a>",
    //   });
    //   return;
    // }
    // tempUser.userId = res.data.data;
    // if (user?.reward?.length > 0) {
    //   user.reward.map(async (item) => {
    //     const res = await axios.post(process.env.API_BASE + "/createFile", {
    //       ...item,
    //       userId: user.userId,
    //     });
    //     console.log(res.data);
    //     if (res.data.status == "error") return;
    //   });
    // }
    // const res_sendEmail = await axios.post(
    //   process.env.API_BASE + "/sendEmail",
    //   tempUser
    // );
    // if (res_sendEmail.data.status == "error") {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Something went wrong!",
    //     footer: "<a href>Why do I have this issue?</a>",
    //   });
    //   return;
    // }
    // tempUser.message = "ขอบคุณที่ร่วมลงทะเบียน Awards 2024 by robinhood";
    // const res_sendSms = await axios.post(
    //   process.env.API_BASE + "/send/sms",
    //   tempUser
    // );
    // if (res_sendSms.data.status == "error") {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Something went wrong!",
    //     footer: "<a href>Why do I have this issue?</a>",
    //   });
    //   return;
    // }
    // Swal.fire({
    //   icon: "success",
    //   title: "บันทึกข้อมูลสำเร็จ",
    //   showConfirmButton: false,
    //   timer: 1500,
    // }).then(() => {
    //   nextPage();
    // });
  };

  const handleUploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post(
      process.env.API_BASE + "/upload/" + user.memberCode,
      formData
    );
    if (res?.status == "error") {
      console.log(res?.message || res?.error);
      return null;
    }

    return res?.data?.data?.url;
  };

  const getUserByTel = async () => {
    const res = await axios.post(process.env.API_BASE + "/getbytel" + user.tel);

    console.log(res.data);
  };

  const previewProfile = () => {
    if (user?.profileFile) {
      let url = URL.createObjectURL(user?.profileFile);

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
          <Box className="px-3 py-10">
            <ResultAward
              user={user}
              nextPage={nextPage}
              page={page}
              prevPage={prevPage}
              selectAward={selectAward}
              handleSelectAward={handleSelectAward}
              nextPageByPage={nextPageByPage}
              handleChange={handleChange}
            />
          </Box>
        );

      case 6:
        return (
          <Box className="px-3 pt-10">
            <Rules
              nextPage={nextPage}
              selectAward={selectAward}
              prevPage={prevPage}
            />
          </Box>
        );
      // case 7:
      //   return (
      //     <Box className="px-3 pt-5">
      //       <FormAward
      //         user={user}
      //         nextPage={nextPage}
      //         page={page}
      //         prevPage={prevPage}
      //       />
      //     </Box>
      //   );
      case 7:
        return (
          <Box className="px-2 pb-10">
            <Works
              user={user}
              nextPage={nextPage}
              page={page}
              prevPage={prevPage}
              selectAward={selectAward}
              handleSelectAward={handleSelectAward}
              nextPageByPage={nextPageByPage}
              handleChange={handleChange}
              createUser={createUser}
              updateUser={updateUser}
            />
          </Box>
        );
      case 8:
        return (
          <Box className="px-2">
            <Success nextPageByPage={nextPageByPage} />
          </Box>
        );
      case 9:
        return (
          <Box className="px-2 pb-10">
            <Profile user={user} nextPage={nextPage} />
          </Box>
        );
      case 10:
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
      case 11:
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
      case 12:
        return (
          <Box className="px-2 pb-10">
            <Works
              nextPage={nextPage}
              user={user}
              handleChange={handleChange}
              createUser={createUser}
              page={page}
              prevPage={prevPage}
              nextPageByPage={nextPageByPage}
              updateUser={updateUser}
            />
          </Box>
        );
    }
  };

  useEffect(() => {
    console.log(selectAward);
  }, [selectAward]);

  useEffect(() => {
    previewProfile();
  }, [user?.profileFile]);

  useEffect(() => {
    // check status input and upload file by award all //
  }, [user?.reward]);

  // useEffect(() => {
  //   if (user?.tel?.length == 10) {
  //     getUserByTel();
  //   }
  // }, [user?.tel]);

  useEffect(() => {
    console.log("user changed:", user);
  }, [user]);
  useEffect(() => {
    if (page == 0) {
      setUser(initUser);
      setSignIn(initSignIn);
    }

    if (page == 8) {
      signInUser();
    }
  }, [page]);

  return <AppWrapper page={page}>{pageElement()}</AppWrapper>;
}
