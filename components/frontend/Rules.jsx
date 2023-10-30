import { buttonStyle } from "@/utils/buttonStyle";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function Rules({nextPage}) {
  return (
    <Box className="flex flex-col gap-3">
      <Typography variant="h4">Best Trendy</Typography>
      <Typography variant="h6">เมนูเด่นเทรนดี้</Typography>
      <Typography className="font-light">
        รางวัลสำหรับร้านอาหารที่สร้างสรรค์เมนูเด่นได้ฮิตติดโซเชียลการแชร์มากมายผ่านโซเชียลมีเดีย
      </Typography>
      <Typography variant="h6" className="underline">
        เกณฑ์การรับสมัคร
      </Typography>
      <ul className="list-disc pl-5">
        <li>มีคอนเทนต์ผ่านสื่อโซเชียลมีเดียต่างๆ อย่างน้อยวันลั คอนเทนต์</li>
        <li>ค่าเฉลี่ยเรตติ้งบนหน้าแอปมากกว่า 4.0</li>
      </ul>
      <Typography variant="h6" className="underline">
        ชิ้นงานสำหรับส่งประกวด
      </Typography>
      <ul className="list-disc pl-5">
        <li>
          เขียนบรรยายเหตุผลถึงการเข้าร่วมการประกวดในหัวข้อนี้ไม่เกิน 300 คำ
        </li>
        <li>
          แนบภาพจำนวน 3 ภาพ หรือหรือคลิปแนะนำร้านของตัวเองความยาวไม่เกิน 2 นาที
        </li>
        <li>แนบสูตรเด็ดวิธ</li>
      </ul>

      <Box className="flex justify-center">
        <Button sx={buttonStyle} onClick={nextPage}>
          NEXT <NavigateNextIcon />
        </Button>
      </Box>
    </Box>
  );
}
