import { buttonStyle } from "@/utils/buttonStyle";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DeleteIcon from "@mui/icons-material/Delete";
import { BTN_NEXT, BTN_SAVE, PIN_WHITE, RADIO_CHECK } from "@/assets";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ImageIcon from "@mui/icons-material/Image";
import { rewardData } from "@/utils/rewardsData";
export default function Works({
  user,
  handleChange,
  nextPage,
  createUser,
  page,
  nextPageByPage,
  updateUser,
  selectAward,
}) {
  const [currentReward, setCurrentReward] = useState(null);

  const handleChangeElement = (e) => {
    const { name, value } = e.target;
    let index = user.reward.indexOf(
      user.reward.find((item) => item.awardId == selectAward)
    );
    let data = { ...user.reward[index], [name]: value };

    let dataReward = [...user.reward];
    dataReward[index] = data;
    console.log(dataReward);
    console.log(index);
    handleChange({
      target: {
        name: "reward",
        value: dataReward,
      },
    });
  };

  const handleChangeMedia = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    let data = { ...selectAward, [name]: value };
    console.log(data);
    let index = user.reward.findIndex((item) => item.awardId == selectAward);
    console.log(index);

    let dataReward = [...user.reward];
    dataReward[index] = data;

    handleChange({
      target: {
        name: "reward",
        value: dataReward,
      },
    });
  };
  // useEffect(() => {
  //   const data = rewardData.find((item) => item.value == parseInt(selectAward));
  //   setCurrentReward(data);
  // }, [selectAward]);

  // useEffect(() => {
  //   console.log(selectAward);
  // }, [selectAward]);
  return (
    <Box className="flex flex-col gap-5 pt-5">
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
            เขียนบรรยายเหตุผลถึงการเข้าร่วมการประกวดในหัวข้อนี้ไม่เกิน 300 คำ
          </Typography>
        </Box>

        <Box>
          <TextField
            id="joinReason"
            multiline
            rows={8}
            variant="outlined"
            fullWidth
            name="joinReason"
            value={
              user?.reward.find((item) => item.awardId == selectAward)
                ?.joinReason || ""
            }
            onChange={handleChangeElement}
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
          <Typography className="font-light text-end">
            {/* {joinReasonLength}/300 */}
          </Typography>
        </Box>
      </Box>
      <Box className="flex flex-col gap-3">
        <Box className=" flex flex-row  gap-3 items-start">
          <Image
            src={PIN_WHITE.src}
            width={10}
            height={10}
            alt="pin"
            className="w-auto h-4"
          />
          <Typography className="font-light">
            แบบภาพจำนวน 3 ภาพและคลิปแนะนำร้านของตัวเอง ความยาวไม่เกิน 2 นาที
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
                data={user.reward.find((item) => item.awardId == selectAward)}
                onChange={handleChangeElement}
              />
            </Box>
            <Box className="">
              <MediaInput
                type={"image"}
                index={2}
                data={user.reward.find((item) => item.awardId == selectAward)}
                onChange={handleChangeElement}
              />
            </Box>
            <Box className="">
              <MediaInput
                type={"image"}
                index={3}
                data={user.reward.find((item) => item.awardId == selectAward)}
                onChange={handleChangeElement}
              />
            </Box>
            <Box className="col-span-3">
              <MediaInput
                type={"video"}
                index={4}
                data={user.reward.find((item) => item.awardId == selectAward)}
                onChange={handleChangeElement}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="flex justify-center mt-3">
        {page != 11 ? (
          <Button
            className="p-0"
            onClick={() => {
              nextPageByPage(5);
            }}
          >
            <Image
              src={BTN_NEXT.src}
              width={256}
              height={128}
              alt="login"
              className="w-[60%] sm:w-[40%] h-auto"
            />
          </Button>
        ) : (
          <Button className="p-0" onClick={updateUser}>
            <Image
              src={BTN_SAVE.src}
              width={256}
              height={128}
              alt="login"
              className="w-[60%] sm:w-[40%] h-auto"
            />
          </Button>
        )}
      </Box>
    </Box>
  );
}

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
      if (e.target.files[0].size > 25000000) {
        Swal.fire({
          icon: "error",
          title: "ขนาดไฟล์ใหญ่เกินไป",
          text: "กรุณาอัพโหลดไฟล์ขนาดไม่เกิน 25MB",
          confirmButtonText: "ตกลง",
        });
        return;
      }

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
        index == 4 ? "h-44 sm:h-56" : "h-28 sm:h-44"
      } bg-[#f0f0f0] w-full flex justify-center  p-0`}
      // className="h-48 sm:h-44 bg-white w-full"
      sx={{
        borderRadius: "1rem",
        // border: "0.3rem solid #A5278F",
        color: "#A5278F",
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
          <Typography className="text-main text-sm text-center">
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
