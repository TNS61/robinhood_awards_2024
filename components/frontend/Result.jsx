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
  LOGO,
  NOTE,
  PIN_WHITE,
  PIN_YELLOW,
  UNCHECKED,
} from "@/assets";

export default function Result({ user, nextPage }) {
  const [open, setOpen] = useState(null);
  const [statusButton, setStatusButton] = useState(false);

  useEffect(() => {
    const checkData = user?.reward?.length;
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
      <Box className="flex flex-col gap-5">
        <Typography
          sx={{
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          ประเภทรางวัลที่ท่านได้ลงสมัคร
        </Typography>
        {user?.reward.length > 0 ? (
          <Box className="flex flex-col gap-3">
            {user?.reward.map((item, index) => (
              <RewardsElement
                key={index}
                data={item}
                user={user}
                setOpen={setOpen}
                open={open}
              />
            ))}
          </Box>
        ) : (
          "กรุณาเลือกประเภทของรางวัล"
        )}

        <Box className="mt-5 w-full flex flex-row gap-5 justify-center">
          <Button className="p-0" onClick={nextPage}>
            <Image
              src={BTN_NEXT.src}
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

const RewardsElement = ({ data, setOpen, open }) => {
  const [expanded, setExpanded] = useState(false);
  const [currentAward, setCurrentAward] = useState(null);
  const [status, setStatus] = useState(false);

  const handleChangeOpen = () => {
    setExpanded(!expanded);
    setOpen(data.awardId);
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
              // onClick={handleChangeOpen}
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
                  placeholder="พื้นที่สำหรับการเขียนบรรยาย"
                  inputProps={{
                    maxLength: 300,
                    readOnly: true,
                  }}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "1rem",

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
                      <Image
                        src={data.image1Url || LOGO.src}
                        width={512}
                        height={512}
                        alt="image1"
                        className="w-full h-20 sm:h-44 object-cover rounded-xl"
                      />
                    </Box>
                    <Box className="">
                      <Image
                        src={data.image2Url || LOGO.src}
                        width={512}
                        height={512}
                        alt="image1"
                        className="w-full h-20 sm:h-44 object-cover rounded-xl"
                      />
                    </Box>
                    <Box className="">
                      <Image
                        src={data.image3Url || LOGO.src}
                        width={512}
                        height={512}
                        alt="image1"
                        className="w-full h-20 sm:h-44 object-cover rounded-xl"
                      />
                    </Box>
                    <Box className="col-span-3">
                      <video
                        src={data.videoUrl}
                        className="w-full h-32 sm:h-56 object-cover rounded-xl"
                        autoPlay
                        muted
                        controls
                        playsInline
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
