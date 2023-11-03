import { buttonStyle } from "@/utils/buttonStyle";
import { rewardData } from "@/utils/rewardsData";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { use, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";

import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ImageIcon from "@mui/icons-material/Image";
import {
  BTN_BACK,
  BTN_NEXT,
  CHECKED,
  NOTE,
  PIN_WHITE,
  PIN_YELLOW,
  UNCHECKED,
} from "@/assets";

export default function Works({
  user,
  handleChange,
  nextPage,
  page,
  prevPage,
  handleChangeAward,
  createUser,
  updateUser,
}) {
  const [open, setOpen] = useState(null);
  const [statusButton, setStatusButton] = useState(false);

  const handleSelectReward = (value) => {
    let newReward = [];

    if (user?.reward?.find((item) => item?.awardId == value)) {
      newReward = user?.reward?.filter((item) => item?.awardId != value);
    }

    if (
      user?.reward?.length >= 3 &&
      !user?.reward?.find((item) => item?.awardId == value)
    ) {
      Swal.fire({
        icon: "error",
        text: "กรุณาเลือกประเภทของรางวัลได้ไม่เกิน 3 ประเภท",
        heightAuto: false,
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!user?.reward?.find((item) => item?.awardId == value)) {
      newReward = [
        ...user?.reward,
        {
          awardId: value,
          joinReason: "",
          image1Url: "",
          image2Url: "",
          image3Url: "",
          videoUrl: "",
          image1File: null,
          image2File: null,
          image3File: null,
          videoFile: null,
        },
      ];
    }

    let evt = { target: { name: "reward", value: newReward } };
    handleChange(evt);
  };

  useEffect(() => {
    const checkData = user?.reward?.length;
    // check status inout data
    // if(user.reward[0].)
    if (checkData == 1) {
      if (
        (user.reward[0].image1File != null || user.reward[0].image1Url != "") &&
        (user.reward[0].image2File != null || user.reward[0].image2Url != "") &&
        (user.reward[0].image3File != null || user.reward[0].image3Url != "") &&
        (user.reward[0].videoFile != null || user.reward[0].videoUrl != "") &&
        user.reward[0].joinReason != ""
      ) {
        setStatusButton(true);
      } else {
        setStatusButton(false);
      }
    }
    if (checkData == 2) {
      if (
        (user.reward[0].image1File != null || user.reward[0].image1Url != "") &&
        (user.reward[0].image2File != null || user.reward[0].image2Url != "") &&
        (user.reward[0].image3File != null || user.reward[0].image3Url != "") &&
        (user.reward[0].videoFile != null || user.reward[0].videoUrl != "") &&
        user.reward[0].joinReason != "" &&
        (user.reward[1].image1File != null || user.reward[1].image1Url != "") &&
        (user.reward[1].image2File != null || user.reward[1].image2Url != "") &&
        (user.reward[1].image3File != null || user.reward[1].image3Url != "") &&
        (user.reward[1].videoFile != null || user.reward[1].videoUrl != "") &&
        user.reward[1].joinReason != ""
      ) {
        setStatusButton(true);
      } else {
        setStatusButton(false);
      }
    }
    if (checkData == 3) {
      if (
        (user.reward[0].image1File != null || user.reward[0].image1Url != "") &&
        (user.reward[0].image2File != null || user.reward[0].image2Url != "") &&
        (user.reward[0].image3File != null || user.reward[0].image3Url != "") &&
        (user.reward[0].videoFile != null || user.reward[0].videoUrl != "") &&
        user.reward[0].joinReason != "" &&
        (user.reward[1].image1File != null || user.reward[1].image1Url != "") &&
        (user.reward[1].image2File != null || user.reward[1].image2Url != "") &&
        (user.reward[1].image3File != null || user.reward[1].image3Url != "") &&
        (user.reward[1].videoFile != null || user.reward[1].videoUrl != "") &&
        user.reward[1].joinReason != "" &&
        (user.reward[2].image1File != null || user.reward[2].image1Url != "") &&
        (user.reward[2].image2File != null || user.reward[2].image2Url != "") &&
        (user.reward[2].image3File != null || user.reward[2].image3Url != "") &&
        (user.reward[2].videoFile != null || user.reward[2].videoUrl != "") &&
        user.reward[2].joinReason != ""
      ) {
        setStatusButton(true);
      } else {
        setStatusButton(false);
      }
    }
  }, [user.reward]);

  useEffect(() => {
    console.log(statusButton);
  }, [statusButton]);

  useEffect(() => {
    console.log(user.reward.length);
  }, [user]);

  return (
    <Box className="py-10">
      <Box>
        {user?.reward.length > 0 ? (
          <Box className="flex flex-col gap-3">
            {user?.reward.map((item, index) => (
              <RewardsElement
                key={index}
                data={item}
                user={user}
                setOpen={setOpen}
                open={open}
                handleSelectReward={handleSelectReward}
                handleChangeValue={handleChange}
              />
            ))}
          </Box>
        ) : (
          "กรุณาเลือกประเภทของรางวัล"
        )}

        <Box className="mt-5 w-full flex flex-row gap-5 justify-center">
          {page == 9 && (
            <Button
              sx={{
                backgroundColor: "white !important",
                borderRadius: "100px !important",
                color: "#A5278F !important",
                fontSize: "1.3rem !important",
                borderWidth: "1px 1px 0.4rem 1px !important",
                borderColor: "#A5278F !important",
                borderStyle: "solid !important",
                width: "fit-content !important",
                px: "2rem !important",
                m: "auto !important",
              }}
              className="normal-case font-bold"
              onClick={prevPage}
            >
              Back
            </Button>
          )}

          {statusButton && (
            <Button
              className="p-0"
              onClick={!user?.id ? createUser : updateUser}
            >
              <Image
                src={BTN_NEXT.src}
                width={256}
                height={128}
                alt="login"
                className="w-[60%] sm:w-[40%] h-auto"
              />
            </Button>
          )}
        </Box>
        {/* <Image
          src={NOTE.src}
          width={720}
          height={128}
          alt="note"
          className="w-full h-auto mt-3"
        /> */}
      </Box>
    </Box>
  );
}

const RewardsElement = ({
  data,
  user,
  setOpen,
  open,
  handleSelectReward,
  handleChangeValue,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);
  const [currentAward, setCurrentAward] = useState(null);
  const [status, setStatus] = useState(false);

  const handleChangeOpen = () => {
    setExpanded(!expanded);
    setOpen(data.awardId);
  };

  const handleChangeUser = (e) => {
    const { name, value } = e.target;

    let index = user.reward.indexOf(
      user.reward.find((item) => item.awardId == data.awardId)
    );
    let currentData = { ...user.reward[index], [name]: value };

    let dataReward = [...user.reward];
    dataReward[index] = currentData;
    console.log(dataReward);
    console.log(index);
    handleChangeValue({
      target: {
        name: "reward",
        value: dataReward,
      },
    });
  };

  useEffect(() => {
    if (open === data.awardId) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [open]);

  useEffect(() => {
    if (data?.awardId) {
      const award = rewardData.find((item) => item.value == data.awardId);
      setCurrentAward(award);
    }

    if (
      (data.image1File != null || data.image1Url != "") &&
      (data.image2File != null || data.image2Url != "") &&
      (data.image3File != null || data.image3Url != "") &&
      (data.videoFile != null || data.videoUrl != "") &&
      data.joinReason != ""
    ) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [data]);

  return (
    <>
      {currentAward && (
        <Box className="flex flex-col gap-1">
          <Box className="flex flex-row justify-start items-center gap-3">
            <Button
              onClick={handleChangeOpen}
              className="flex flex-col items-start normal-case duration-500"
              sx={{
                background: `${
                  status
                    ? `linear-gradient(90deg, #472f91 0%, #eb008b 90%) !important`
                    : `white !important`
                }`,
                borderRadius: "1rem !important",
                color: `${status ? `white !important` : `#90278e !important`}`,
                fontSize: "1.3rem !important",
                fontWeight: "bold !important",
                borderWidth: "1px 1px 0.4rem 1px !important",
                borderColor: `${
                  status ? `white !important` : `#A5278F !important`
                }`,
                borderStyle: "solid !important",
                width: "100% !important",
                px: "2rem !important",
                m: "auto !important",
              }}
            >
              <Typography className="text-xl">{currentAward.name}</Typography>
              <Typography
                className="text-sm duration-500"
                sx={{
                  color: `${
                    status ? `white !important` : `#eb008b !important`
                  }`,
                }}
              >
                {currentAward.description}
              </Typography>
            </Button>
          </Box>
          <Accordion
            expanded={expanded}
            onChange={handleChangeOpen}
            sx={{
              margin: "0 !important",
              backgroundColor: "transparent !important",
              color: "white !important",
              borderRadius: "0 !important",
              boxShadow: "none !important",
              marginBottom: "0.5rem !important",
              "& .MuiAccordionDetails-root": {
                backgroundColor: "#ffffff40 !important",
                color: "white !important",
                borderRadius: "1rem !important",
                padding: "1rem !important",
              },
              "& .MuiAccordionSummary-content": {
                py: "0 !important",
                mb: "0.2rem !important",
                mt: "0 !important",
              },
              "& .MuiButtonBase-root": {
                minHeight: "0 !important",
              },
              ":before": {
                display: "none !important",
              },
            }}
          >
            <AccordionSummary></AccordionSummary>
            <AccordionDetails>
              <Box className="flex flex-col gap-3">
                <Box className="flex flex-row  gap-3 items-start">
                  <Image
                    src={PIN_WHITE.src}
                    width={10}
                    height={10}
                    alt="pin"
                    className="w-auto h-4"
                  />
                  <Typography className="font-light">
                    เขียนบรรยายเหตุผลถึงการเข้าร่วมการประกวดในหัวข้อนี้ไม่เกิน
                    300 คำ
                  </Typography>
                </Box>
                <TextField
                  id="joinReason"
                  multiline
                  rows={8}
                  variant="outlined"
                  fullWidth
                  name="joinReason"
                  value={data?.joinReason || ""}
                  // value={
                  //   user?.reward.find((item) => item.awardId == data.awardId)
                  //     ?.joinReason || ""
                  // }
                  onChange={handleChangeUser}
                  placeholder="พื้นที่สำหรับการเขียนบรรยาย"
                  inputProps={{
                    maxLength: 300,
                  }}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "1rem",
                    // border: "0.3rem solid #A5278F",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "1rem",
                      fontWeight: "light",
                    },

                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />
              </Box>

              <Box className="flex flex-col gap-3 mt-3">
                <Box className=" flex flex-row  gap-3 items-start">
                  <Image
                    src={PIN_WHITE.src}
                    width={10}
                    height={10}
                    alt="pin"
                    className="w-auto h-4"
                  />
                  <Typography className="font-light">
                    แบบภาพจำนวน 3 ภาพและคลิปแนะนำร้านของตัวเอง ความยาวไม่เกิน 2
                    นาที
                  </Typography>
                </Box>
                <Box className="bg-white p-4 rounded-xl">
                  <Typography className="font-light text-[#808080] text-center mb-3">
                    อัพโหลดรูปภาพและคลิป
                  </Typography>
                  <Box className="grid grid-cols-3 sm:grid-cols-3 gap-2 ">
                    <Box className="">
                      <MediaInput
                        type={"image"}
                        index={1}
                        data={data}
                        onChange={handleChangeUser}
                      />
                    </Box>
                    <Box className="">
                      <MediaInput
                        type={"image"}
                        index={2}
                        data={data}
                        onChange={handleChangeUser}
                      />
                    </Box>
                    <Box className="">
                      <MediaInput
                        type={"image"}
                        index={3}
                        data={data}
                        onChange={handleChangeUser}
                      />
                    </Box>
                    <Box className="col-span-3">
                      <MediaInput
                        type={"video"}
                        index={4}
                        data={data}
                        onChange={handleChangeUser}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      )}
    </>
  );
};
const MediaInput = ({ data, onChange, type, index }) => {
  const ref = useRef(null);
  const [previewJoinReason, setPreviewJoinReason] = useState(null);

  const handleChangeFile = (e) => {
    let event = {
      target: {
        name: `${type}${index != "4" ? index : ""}File`,
        value: null,
      },
    };

    if (e.target.files.length == 0) {
      onChange(event.target);
    } else {
      // check file size
      if (e.target.files[0].size > 200000000) {
        Swal.fire({
          icon: "error",
          title: "ขนาดไฟล์ใหญ่เกินไป",
          text: "กรุณาอัพโหลดไฟล์ขนาดไม่เกิน 200MB",
          confirmButtonText: "ตกลง",
        });
        return;
      }
      // if (e.target.files[0].type.includes("video")) {
      //   let video = document.createElement("video");
      //   video.preload = "metadata";

      //   video.onloadedmetadata = function () {
      //     window.URL.revokeObjectURL(video.src);
      //     let duration = video.duration;
      //     if (duration > 120) {
      //       Swal.fire({
      //         icon: "error",
      //         title: "คลิปวิดีโอยาวเกินไป",
      //         text: "กรุณาอัพโหลดคลิปวิดีโอที่ยาวไม่เกิน 2 นาที",
      //         confirmButtonText: "ตกลง",
      //       });
      //     }
      //     return;
      //   };
      //   video.src = URL.createObjectURL(e.target.files[0])
      //     ? URL.createObjectURL(e.target.files[0])
      //     : "";
      //   return
      // }

      onChange({
        target: {
          name: `${type}${index != "4" ? index : ""}File`,
          value: e.target.files[0],
        },
      });
    }
  };

  const changeFile = () => {
    ref.current.click();
  };

  useEffect(() => {
    if (!data) return;
    if (index == 1) {
      if (data?.image1File) {
        const objectUrl = URL.createObjectURL(data?.image1File);
        setPreviewJoinReason(objectUrl);
      }
      if (data.image1Url && !data.image1File) {
        setPreviewJoinReason(data.image1Url);
      }
    }
    if (index == 2) {
      if (data?.image2File) {
        const objectUrl = URL.createObjectURL(data?.image2File);
        setPreviewJoinReason(objectUrl);
      }
      if (data.image2Url && !data.image2File) {
        setPreviewJoinReason(data.image2Url);
      }
    }
    if (index == 3) {
      if (data?.image3File) {
        const objectUrl = URL.createObjectURL(data?.image3File);
        setPreviewJoinReason(objectUrl);
      }
      if (data.image3Url && !data.image3File) {
        setPreviewJoinReason(data.image3Url);
      }
    }
    if (index == 4) {
      if (data?.videoFile) {
        const objectUrl = URL.createObjectURL(data?.videoFile);
        setPreviewJoinReason(objectUrl);
      }
      if (data.videoUrl && !data.videoFile) {
        setPreviewJoinReason(data.videoUrl);
      }
    }
  }, [
    data?.image1File,
    data?.image2File,
    data?.image3File,
    data?.videoFile,

    data?.image1Url,
    data?.image2Url,
    data?.image3Url,
    data?.videoUrl,
  ]);

  // useEffect(() => {
  //   console.log(previewJoinReason);
  // }, [previewJoinReason]);

  return (
    <Box
      className={`${
        index == 4 ? "h-32 sm:h-56" : "h-20 sm:h-44"
      } bg-[#f0f0f0] w-full flex justify-center  p-0`}
      // className="h-48 sm:h-44 bg-white w-full"
      sx={{
        borderRadius: "1rem",
        // border: "0.3rem solid #808080",
        color: "#808080",
      }}
    >
      {previewJoinReason ? (
        <>
          {type == "image" ? (
            <Image
              src={previewJoinReason}
              width={256}
              height={256}
              alt="Image"
              className="w-full h-full object-cover rounded-xl"
              onClick={() => {
                changeFile();
              }}
            />
          ) : (
            <Box className="w-full relative">
              <video
                src={previewJoinReason}
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                muted
                controls
                playsInline
              />

              <Button
                className="text-center text-sm  "
                sx={{
                  backgroundColor: "#492E91 !important",
                  color: "white   !important",
                  py: "0.1rem",
                  px: "1rem",
                  borderRadius: "10rem",
                  position: "absolute",
                  top: "0.2rem",
                  right: "0.2rem",
                }}
                onClick={() => {
                  changeFile();
                }}
              >
                คลิกเพื่อแก้ไข
              </Button>
            </Box>
          )}
        </>
      ) : (
        <Box
          className="h-full w-full  flex flex-col justify-center items-center"
          onClick={() => {
            changeFile();
          }}
        >
          {type == "image" ? (
            <ImageIcon sx={{ fontSize: "2rem" }} />
          ) : (
            <OndemandVideoIcon sx={{ fontSize: "2rem" }} />
          )}
          <Typography className="text-[#808080] text-sm text-center font-light">
            แนบ{type == "image" ? "รูปภาพ" : "คลิปวิดีโอ"}
          </Typography>
        </Box>
      )}

      <input
        type="file"
        id={`upload${index}`}
        ref={ref}
        onChange={handleChangeFile}
        hidden
        accept={`${type == "image" ? "image" : "video"}/*`}
      />
    </Box>
  );
};
