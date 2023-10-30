import { Box, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

export default function Success() {
  return (
    <Box className="flex flex-col justify-center items-center gap-5 pt-10">
      <Box
        sx={{
          backgroundColor: "#A5278F",
          p: "0.3rem",
          borderRadius: "100%",
          width: "fit-content",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#D41876",
            p: 1,
            borderRadius: "100%",
            border: "0.3rem solid #ffffff",
            height: "fit-content",
            width: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CheckIcon
            sx={{
              fontSize: "8rem",
              color: "white",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "1rem",
          px: 2,
          py: 2,
          textAlign: "center",
          color: "#A5278F",
          borderWidth: "1px 1px 0.4rem 1px",
          borderColor: "#A5278F",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            
          }}
          className="tracking-wider"
        >
          Register Complete !
        </Typography>
        <Typography className="text-center font-light">
          ระบบได้รับข้อมูลการลงสมัครของท่าน<br/> เรียบร้อยแล้ว
          โปรดรอการแจ้งยืนยันผลทาง<br/> SMS และ E-mail ที่ลงทะเบียนไว้<br/>
          หลังตรวจสอบข้อมูลเสร็จสิ้น
        </Typography>
      </Box>
    </Box>
  );
}
