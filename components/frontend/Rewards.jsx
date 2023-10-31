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
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function Rewards({
  user,
  handleChange,
  nextPage,
  page,
  prevPage,
}) {
  const [open, setOpen] = useState(null);
  const [selectReward, setSelectReward] = useState(user.reward || []);

  const handleSelectReward = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;

    if (selectReward.includes(value)) {
      setSelectReward(selectReward.filter((item) => item !== value));
    } else {
      if (user.reward.length >= 3) {
        Swal.fire({
          icon: "error",
          // title: "กรุณาเลือกสิทธิประโยชน์ไม่เกิน 3 สิทธิ",
          text: "กรุณาเลือกสิทธิประโยชน์ไม่เกิน 3 สิทธิ",
          heightAuto: false,
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      setSelectReward([...selectReward, value]);
    }
  };

  useEffect(() => {
    console.log(selectReward);
    handleChange({
      target: {
        name: "reward",
        value: selectReward,
      },
    });
  }, [selectReward]);

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

          {/* {rewardData.map((item, index) => (
            <Button
              name="reward"
              key={index}
              sx={{
                backgroundColor: `${
                  parseInt(user.reward) === item.value
                    ? "#A5278F !important"
                    : "white !important"
                }`,
                color: `${
                  parseInt(user.reward) === item.value
                    ? "white !important"
                    : "#A5278F !important"
                }`,
                py: "0.8rem",
                borderRadius: "1rem",
                border: "0.3rem solid #A5278F",
                fontSize: "1.3rem",
              }}
              onClick={() => {
                const e = {
                  target: {
                    name: "reward",
                    value: item.value,
                  },
                };
                handleChange(e);
              }}
              className="normal-case"
            >
              {item.name}
            </Button>
          ))} */}
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

          <Button
            onClick={nextPage}
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
          >
            Next <NavigateNextIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const RewardsElement = ({ data, user, setOpen, open, handleSelectReward }) => {
  const [expanded, setExpanded] = useState(false);

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
    console.log("user.reward", user.reward.includes(data.value.toString()));
  }, [user.reward]);

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      sx={{
        backgroundColor: "white !important",
        color: "#A5278F !important",
        borderRadius: "1rem !important",
        border: "0.3rem solid #A5278F !important",

        "&:hover": {
          backgroundColor: "white !important",
        },
        "& .MuiAccordionSummary-content": {
          alignItems: "center",
          py: "0.3rem !important",
          my: "0rem !important",
        },
        "& .MuiPaper-root": {
          backgroundColor: "white !important",
          color: "#A5278F !important",
          borderRadius: "1rem !important",
        },
        "& .MuiButtonBase-root": {
          backgroundColor: "white !important",
          color: "#A5278F !important",
          borderRadius: "1rem !important",
        },
      }}
    >
      <AccordionSummary
        sx={{
          // backgroundColor: "white !important",
          // color: "#A5278F !important",
          // borderRadius: "1rem",
          // border: "0.3rem solid #A5278F !important",

          "&:hover": {
            backgroundColor: "white !important",
          },
          "& .MuiAccordionSummary-content": {
            alignItems: "center",
            py: "0.3rem !important",
            my: "0rem !important",
          },
        }}
      >
        <Checkbox
          onChange={handleSelectReward}
          value={data.value}
          name={"reward"}
          checked={user.reward.includes(data.value.toString())}
          //  disabled={user.reward.length >= 3 && !user.reward.includes(data.value.toString())}
        />
        <Box className="w-full h-full">
          <Typography >
            {data.name}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Divider
          sx={{
            backgroundColor: "#A5278F !important",
            height: "1px",
            width: "100%",
            mb: "1rem",
          }}
        />
        <Typography>{data.detail}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
