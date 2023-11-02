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
import React, { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";
import {
  BTN_BACK,
  BTN_NEXT,
  CHECKED,
  NOTE,
  PIN_WHITE,
  PIN_YELLOW,
  UNCHECKED,
} from "@/assets";

export default function FormAward({
  user,
  handleChange,
  nextPage,
  page,
  prevPage,
}) {
  const [open, setOpen] = useState(null);
  const [selectReward, setSelectReward] = useState(user?.reward || []);

  const handleSelectReward = (value) => {
    if (selectReward.includes(value)) {
      setSelectReward(selectReward.filter((item) => item !== value));
    } else {
      if (user?.reward.length >= 3) {
        Swal.fire({
          icon: "error",
          // title: "กรุณาเลือกสิทธิประโยชน์ไม่เกิน 3 สิทธิ",
          text: "กรุณาเลือกประเภทของรางวัลได้ไม่เกิน 3 ประเภท",
          heightAuto: false,
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      setSelectReward([...selectReward, value]);
    }
  };

  return (
    <Box className="py-5">
      {/* <Typography
        sx={{
          color: `white !important`,
          fontSize: "1.5rem !important",
          fontWeight: "bold !important",
          mb: "1rem !important",
          textAlign: "center !important",
        }}
      >
        ประเภทรางวัลที่ท่านได้ลงสมัคร
      </Typography> */}
      <Box>
        <Box className="flex flex-col gap-3">
          {user?.reward.length > 0 ? (
            <>
              {user?.reward.map((item, index) => (
                <RewardsElement
                  key={index}
                  data={item}
                  setOpen={setOpen}
                  open={open}
                />
              ))}
            </>
          ) : (
            <Box className="h-[50vh] flex justify-center items-center">
              <Typography>ไม่พบข้อมูลสิทธิประโยชน์</Typography>
            </Box>
          )}
        </Box>

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
        </Box>
        <Box className="flex flex-col gap-5">
          <Button className="p-0" onClick={nextPage}>
            <Image
              src={BTN_NEXT.src}
              width={256}
              height={128}
              alt="login"
              className="w-[60%] sm:w-[40%] h-auto"
            />
          </Button>
          {/* <Button className="p-0" onClick={prevPage}>
            <Image
              src={BTN_BACK.src}
              width={256}
              height={128}
              alt="login"
              className="w-[60%] sm:w-[40%] h-auto"
            />
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
}

const RewardsElement = ({ data, setOpen, open }) => {
  const [expanded, setExpanded] = useState(false);
  const [dataReward, setDataReward] = useState(null);

  const initAward = {
    awardId: data,
    caption: "",
    urlImage1: "",
    urlImage2: "",
    urlImage3: "",
    urlVideo: "",
    urlImage1File: null,
    urlImage2File: null,
    urlImage3File: null,
    urlVideoFile: null,
  };

  const [award, setAward] = useState(initAward);

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setAward({ ...award, [name]: value });
  };

  const handleChange = () => {
    setExpanded(!expanded);
    setOpen(data);
  };

  useEffect(() => {
    if (open === data) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [open]);

  useEffect(() => {
    const cuurentData = rewardData.find((item) => item.value == parseInt(data));
    console.log(cuurentData);
    setDataReward(cuurentData);
  }, [data]);

  useEffect(() => {
    console.log(award);
  }, [award]);

  return (
    <>
      {dataReward && (
        <Box className="flex flex-col gap-1">
          <Box className="flex flex-row justify-start items-center gap-3">
            <Button
              onClick={handleChange}
              className="flex flex-col items-start normal-case"
              sx={{
                backgroundColor: "white !important",
                borderRadius: "1rem !important",
                color: "#A5278F !important",
                fontSize: "1.3rem !important",
                borderWidth: "1px 1px 0.4rem 1px !important",
                borderColor: "#A5278F !important",
                borderStyle: "solid !important",
                width: "100% !important",
                px: "2rem !important",
                m: "auto !important",
              }}
            >
              <Typography className="text-xl">{dataReward.name}</Typography>
              <Typography className="text-sm text-[#ec008c]">
                {dataReward.description}
              </Typography>
            </Button>
          </Box>
          <Accordion
            expanded={expanded}
            onChange={handleChange}
            sx={{
              margin: "0 !important",
              backgroundColor: "transparent !important",
              color: "white !important",
              borderRadius: "0 !important",
              boxShadow: "none !important",
              marginBottom: "0.5rem !important",
              padding: "0 !important",
              "& .MuiAccordionDetails-root": {
                // backgroundColor: "#ffffff40 !important",
                color: "white !important",
                borderRadius: "1rem !important",
                padding: "0 !important",
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
            <AccordionSummary>
              {/* <Box className="w-full h-full pl-8 flex gap-2">
                <Image
                  src={expanded ? PIN_YELLOW.src : PIN_WHITE.src}
                  width={128}
                  height={128}
                  alt="checked"
                  className="h-5 w-auto"
                />
                <Typography
                  sx={{
                    color: `${
                      expanded ? `#ed9a22 !important` : `white !important`
                    }`,
                  }}
                  className="duration-300"
                >
                  รายละเอียดเพิ่มเติม
                </Typography>
              </Box> */}
            </AccordionSummary>
            <AccordionDetails>
              <Box className="flex flex-col gap-3">
                <Box className="flex flex-row gap-2">
                  <Image
                    src={PIN_WHITE.src}
                    width={10}
                    height={10}
                    alt="pin"
                    className="h-5 w-auto"
                  />
                  <Typography className="font-light">
                    เขียนบรรยายเหตุผลถึงการเข้าร่วมการประกวดในหัวข้อนี้ไม่เกิน
                    300 คำ
                  </Typography>
                </Box>
                <Box>
                  <TextField
                    id="joinReason"
                    multiline
                    rows={9}
                    variant="outlined"
                    fullWidth
                    name="caption"
                    value={award.caption}
                    onChange={handleChangeForm}
                    placeholder="พื้นที่สำหรับการเขียนบรรยาย"
                    inputProps={{
                      maxLength: 300,
                    }}
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "1rem",
                      //   border: "0.3rem solid #A5278F",
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
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      )}
    </>
  );
};
