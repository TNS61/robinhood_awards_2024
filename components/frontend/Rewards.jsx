import { buttonStyle } from "@/utils/buttonStyle";
import { rewardData } from "@/utils/rewardsData";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

export default function Rewards({
  user,
  handleChange,
  nextPage,
  page,
  prevPage,
}) {
  return (
    <Box className="py-5">
      <Box>
        {/* <Box className="h-[70vh] overflow-y-auto"> */}
        {/* <FormControl className="flex gap-1">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            className="flex gap-5"
          >
            {rewardData.map((item, index) => (
              <FormControlLabel
                value={item.value}
                control={<Radio />}
                label={item.name}
                sx={{
                  color: "white",
                  "& .MuiButtonBase-root": {
                    color: "white",
                  },
                  "& .MuiTypography-root": buttonStyle,
                }}
              />
            ))}
          </RadioGroup>
        </FormControl> */}
        <Box className="flex flex-col gap-3">
          {rewardData.map((item, index) => (
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
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
