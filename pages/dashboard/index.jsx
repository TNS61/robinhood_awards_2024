import AppWrapperBackEnd from "@/components/AppWrapperBackEnd";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import StarIcon from "@mui/icons-material/Star";

export default function Dashboard() {
  return (
    <AppWrapperBackEnd>
      <Box>
        <Box className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <Box
            sx={{
              width: "100%",
              p: 5,
              background:
                "linear-gradient(90deg, #472f92 0%, #ec008c 100%) !important",
              borderRadius: "10px",
              color: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            className="flex gap-4 flex-col justify-between"
          >
            <Box className="flex justify-between items-center ">
              <GroupIcon
                sx={{
                  fontSize: "3rem",
                }}
              />
              <Typography
                sx={{
                  fontSize: "2rem",
                }}
              >
                0
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "1.5rem",
                textAlign: "end",
              }}
            >
              จำนวนผู้เข้าร่วมกิจกรรม
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              p: 5,
              background:
                "linear-gradient(90deg, #472f92 0%, #ec008c 100%) !important",
              borderRadius: "10px",
              color: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            className="flex gap-4 flex-col justify-between"
          >
            <Box className="flex justify-between items-center ">
              <StarIcon
                sx={{
                  fontSize: "3rem",
                }}
              />
              <Typography
                sx={{
                  fontSize: "2rem",
                }}
              >
                0
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "1.5rem",
                textAlign: "end",
              }}
            >
              จำนวนผู้ที่ได้รับเลือก
            </Typography>
          </Box>
        </Box>
      </Box>
    </AppWrapperBackEnd>
  );
}
