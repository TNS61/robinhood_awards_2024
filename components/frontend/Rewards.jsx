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
  Typography,
} from "@mui/material";
import React, { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";
import {
  BTN_NEXT,
  CHECKED,
  NOTE,
  PIN_WHITE,
  PIN_YELLOW,
  UNCHECKED,
} from "@/assets";

export default function Rewards({
  user,
  handleChange,
  nextPage,
  page,
  prevPage,
  handleChangeAward,
}) {
  const [open, setOpen] = useState(null);

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
    console.log(user.reward);
  }, [user.reward]);

  return (
    <Box className="py-5">
      <Box>
        <Box className="flex flex-col gap-3">
          {rewardData.map((item, index) => (
            <RewardsElement
              key={index}
              data={item}
              user={user}
              setOpen={setOpen}
              open={open}
              handleSelectReward={handleSelectReward}
            />
          ))}
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
        <Image
          src={NOTE.src}
          width={720}
          height={128}
          alt="note"
          className="w-full h-auto mt-3"
        />
      </Box>
    </Box>
  );
}

const RewardsElement = ({ data, user, setOpen, open, handleSelectReward }) => {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
    setOpen(data.value);
  };

  useEffect(() => {
    if (open === data.value) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [open]);

  useEffect(() => {
    const check = user?.reward.filter((item) => item.awardId === data.value);
    if (check.length > 0) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [user.reward]);

  return (
    <Box className="flex flex-col gap-1">
      <Box className="flex flex-row justify-start items-center gap-3">
        <IconButton
          className="p-0"
          onClick={() => {
            handleSelectReward(data.value);
          }}
        >
          <Image
            src={checked ? CHECKED.src : UNCHECKED.src}
            width={128}
            height={128}
            alt="checked"
            className="h-8 w-8"
          />
        </IconButton>
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
          <Typography className="text-xl">{data.name}</Typography>
          <Typography className="text-sm text-[#ec008c]">
            {data.description}
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
        <AccordionSummary>
          <Box className="w-full h-full pl-8 flex gap-2">
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
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="font-light italic">{data.detail}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
