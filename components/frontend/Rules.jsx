import { buttonStyle } from "@/utils/buttonStyle";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { BTN_BACK, BTN_NEXT, PIN_WHITE } from "@/assets";
import Image from "next/image";
import { rewardData } from "@/utils/rewardsData";

export default function Rules({ nextPage, selectAward, prevPage }) {
  // const [currentReward, setCurrentReward] = useState(null);
  // useEffect(() => {
  //   console.log(selectAward);
  //   const data = rewardData.find((item) => item.value == selectAward);
  //   console.log(data);
  //   setCurrentReward(data);
  // }, [selectAward]);

  return (
    <Box className="flex flex-col gap-3 pb-10">
      <Typography variant="h6" className="underline">
        ชิ้นงานสำหรับส่งประกวด
      </Typography>

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

      <Box className="flex flex-row  gap-3 items-start">
        <Image
          src={PIN_WHITE.src}
          width={10}
          height={10}
          alt="pin"
          className="w-auto h-4"
        />
        <Typography className="font-light">
          แนบภาพจำนวน 3 ภาพ หรือหรือคลิปแนะนำร้านของตัวเองความยาวไม่เกิน 2 นาที
        </Typography>
      </Box>

      <Typography variant="h6">หมายเหตุ</Typography>
      <Box className="flex flex-row  gap-3 items-start">
        <Image
          src={PIN_WHITE.src}
          width={10}
          height={10}
          alt="pin"
          className="w-auto h-4"
        />
        <Typography className="font-light">
          ภาพถ่ายควรมีความละเอียดไม่ต่ำกว่า 3 mb ในรูปแบบไฟล์ .jpg .png
        </Typography>
      </Box>
      <Box className="flex flex-row  gap-3 items-start">
        <Image
          src={PIN_WHITE.src}
          width={10}
          height={10}
          alt="pin"
          className="w-auto h-4"
        />
        <Typography className="font-light">
          คลิปวิดีโอความยาวไม่เกิน 2 นาที ขนาดไฟล์ไม่เกิด 200 mb ในรูปแบบไฟล์
          .mp4
        </Typography>
      </Box>

      <Box className="flex justify-center items-center flex-col gap-5 mt-10">
        <Button className="p-0" onClick={nextPage}>
          <Image
            src={BTN_NEXT.src}
            width={256}
            height={128}
            alt="login"
            className="w-[60%] sm:w-[40%] h-auto"
          />
        </Button>
        <Button className="p-0" onClick={prevPage}>
          <Image
            src={BTN_BACK.src}
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
