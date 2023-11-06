import { buttonStyle } from "@/utils/buttonStyle";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  ListItemText,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";
import {
  AGREE,
  BTN_BACK,
  BTN_LOGIN,
  BTN_NEXT,
  CHECKED,
  NOT_AGREE,
  RADIO_CHECK,
  RADIO_CHECKED,
} from "@/assets";

export default function TermAndCondition({
  nextPage,
  nextPageByPage,
  prevPage,
}) {
  const [checked, setChecked] = React.useState(null);

  const handleChange = (value) => {
    setChecked(value);
  };

  return (
    <Box className="pt-5 pb-10">
      <Typography
        sx={{
          fontSize: "1.4rem",
          textAlign: "center",
        }}
      >
        เงื่อนไขและนโยบายความเป็นส่วนตัว
      </Typography>

      <Box className="termandcondition mt-5 text-sm px-5">
        <ol className="list-decimal gap-3 flex flex-col">
          <li className="">
            บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลง
            ยกเลิกหรือหยุดกิจกรรมดังกล่าวได้ โดยไม่ต้องแจ้งให้ทราบล่วงหน้า
          </li>
          <li className="">
            บริษัทฯ ขอสงวนสิทธิ์ในการเผยแพร่
            หรือแสดงรายละเอียดข้อมูลเกี่ยวกับกิจกรรมดังกล่าว
            เพื่อประโยชน์สำหรับกิจกรรมทางการตลาด การโฆษณา
            รวมทั้งวัตถุประสงค์ในการเผยแพร่ที่เหมาะสมได้ นอกจากนี้ บริษัทฯ
            มีสิทธิ์ในการใช้ข้อมูลส่วนบุคคลของผู้ร่วมกิจกรรมสำหรับวัตถุประสงค์ที่เหมาะสมอย่างเช่น
            การใช้ ชื่อ และ นามสกุล เพื่อการประชาสัมพันธ์ทางการตลาดในสื่อต่างๆ
            ไม่ว่าจะเป็น สื่อวิทยุ โทรทัศน์ สื่อกลางแจ้ง สื่ออินเตอร์เนต
            สื่อสิ่งพิมพ์ และอื่นๆ ซึ่งทางบริษัทฯ
            ถือว่าได้รับอนุญาตจากผู้เข้าร่วมกิจกรรมดังกล่าวเป็นที่เรียบร้อยแล้ว
          </li>
          <li className="">
            ผู้เข้าร่วมกิจกรรมยินดีและตกลงที่จะทำตามข้อกำหนดและเงื่อนไข
            รวมทั้งการตัดสินของคณะกรรมการการจัดกิจกรรม
          </li>
          <li className="">คำตัดสินของคณะกรรมการถือเป็นที่สิ้นสุด</li>
          <li className="">
            หากได้รับเลือก ผู้เข้าร่วมกิจกรรมต้องมานำเสนอผลงานได้ ในวันคัดเลือก
            และสามารถมาร่วมงานในวันงานได้
          </li>
        </ol>
      </Box>

      <Box className="py-10 text-center flex flex-col gap-5 justify-center items-center">
        {/* <Button sx={buttonStyle}>dfsdf</Button> */}

        <Box
          className="flex flex-row gap-3 justify-center"
          onClick={() => handleChange(0)}
        >
          <Image
            src={checked === 0 ? RADIO_CHECKED.src : RADIO_CHECK.src}
            width={128}
            height={128}
            alt="agree"
            className="w-8 sm:w-10 duration-300 h-auto"
            draggable="false"
            // className="w-[50%] sm:w-[35%]"
          />
          <Image
            src={AGREE.src}
            width={256}
            height={128}
            alt="agree"
            className="w-[40%] sm:w-[35%] !h-auto"
            draggable="false"
          />
        </Box>
        <Box
          className="p-0 flex gap-3  m-0 text-start  justify-center"
          onClick={() => handleChange(1)}
          sx={{
            width: "fit-content",
          }}
        >
          <Image
            src={checked === 1 ? RADIO_CHECKED.src : RADIO_CHECK.src}
            width={128}
            height={128}
            alt="agree"
            className="w-8 sm:w-10 duration-300 h-auto"
            draggable="false"
            // className="w-[50%] sm:w-[35%]"
          />
          <Image
            src={NOT_AGREE.src}
            width={256}
            height={128}
            alt="agree"
            className="w-[40%] sm:w-[35%] !h-auto"
            draggable="false"
          />
        </Box>
      </Box>

      {checked != null && (
        <Box className="mb-5 w-full flex flex-col gap-4 justify-center items-center">
          {checked == 0 ? (
            <Button className="p-0" onClick={nextPage}>
              <Image
                src={BTN_NEXT.src}
                width={256}
                height={128}
                alt="login"
                className="w-[60%] sm:w-[40%] h-auto object-contain"
              />
            </Button>
          ) : (
            <Button className="p-0" onClick={() => nextPageByPage(2)}>
              <Image
                src={BTN_BACK.src}
                width={256}
                height={128}
                alt="login"
                className="w-[60%] sm:w-[40%] h-auto object-contain"
              />
            </Button>
          )}
        </Box>
      )}
      <Box className=" w-full flex flex-col gap-4 justify-center items-center">
        {" "}
        {checked != true && (
          <Button className="p-0" onClick={prevPage}>
            <Image
              src={BTN_BACK.src}
              width={256}
              height={128}
              alt="login"
              className="w-[60%] sm:w-[40%] h-auto object-contain"
            />
          </Button>
        )}
      </Box>
    </Box>
  );
}
