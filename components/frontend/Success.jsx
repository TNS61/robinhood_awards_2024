import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import { BTN_BACKHOME, SUCCESS } from "@/assets";

export default function Success({nextPageByPage}) {
  return (
    <Box className="flex flex-col justify-center items-center gap-5 pt-10">
      <Image src={SUCCESS.src} width={512} height={512} alt="success" className="w-[50%] sm:w-[30%] h-auto" />
      {/* <Box
        sx={{
          backgroundColor: "linear-gradient(90deg, #D41876 0%, #FFA000 100%) !important",
          p: "0.3rem",
          borderRadius: "100%",
          width: "fit-content",
        }}
      >
        <Box
          sx={{
            // backgroundColor: "#D41876",
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
      </Box> */}
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
        <Typography className="text-center font-light italic">
          ระบบได้รับข้อมูลการลงสมัครของท่าน<br/> เรียบร้อยแล้ว
          โปรดรอการแจ้งยืนยันผลทาง<br/> SMS และ E-mail ที่ลงทะเบียนไว้<br/>
          หลังตรวจสอบข้อมูลเสร็จสิ้น
        </Typography>
      </Box>

      <Box className="flex justify-center mt-5">
        <Button className="p-0" onClick={()=>{nextPageByPage(0)}}>
          <Image
            src={BTN_BACKHOME.src}
            width={256}
            height={128}
            alt="login"
            className="w-[60%] sm:w-[40%] h-auto"
          />
        </Button>
      </Box>
    </Box>
  );
}
