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

export default function TermAndCondition({ nextPage }) {
  return (
    <Box className="pt-5">
      <Typography
        sx={{
          fontSize: "1.2rem",
          textAlign: "center",
        }}
      >
        เงื่อนไขและนโยบายความเป็นส่วนตัว
      </Typography>

      <Box className="termandcondition mt-5 text-sm ">
        <ol className="list-decimal gap-3 flex flex-col">
          <li>
            บริษัทฯ ขอสงวนสิทธิ์ ในการเปลี่ยนแปลง ยกเลิกหรือ
            หยุดกิจกรรมดังกล่าวได้ โดยไม่ต้องแจ้งให้ทราบล่วง หน้า
          </li>
          <li>
            บริษัทฯ ขอสงวนสิทธิ์ ในการเผยแพร่ หรือแสดงราย
            ละเอียดข้อมูลเกี่ยวกับกิจกรรมดังกล่าวเพื่อประโยชน์
            สำหรับกิจกรรมทางการตลาด การโฆษณา รวมทั้ง
            วัตถุประสงค์ในการเผยแพร่ที่เหมาะสมได้ นอกจากนี้ บริษัทฯ
            มีสิทธิ์ในการใช้ข้อมูลส่วนบุคคลของผู้ร่วมกิจกรรม
            สําหรับวัตถุประสงค์ที่เหมาะสมอย่างเช่น การใช้ชื่อ และ นามสกุล
            เพื่อการประชาสัมพันธ์ทางการตลาด ในสื่อต่างๆ ไม่ว่าจะเป็น สื่อวิทยุ
            โทรทัศน์ สื่อกลางแจ้ง สื่ออินเตอร์เนต สื่อสิ่งพิมพ์ และ อื่นๆ
            ซึ่งทางบริษัทฯ
            ถือว่าได้รับอนุญาตจากผู้เข้าร่วมกิจกรรมดังกล่าวเป็นที่ เรียบร้อยแล้ว
          </li>
          <li>
            ผู้เข้าร่วมกิจกรรมยินดีและตกลงที่จะทําตามข้อกําหนด และเงื่อนไข
            รวมทั้งการตัดสินของคณะกรรมการการจัดกิจกรรม
          </li>
          <li>คําตัดสินของคณะกรรมการถือเป็นที่สิ้นสุด</li>
        </ol>
      </Box>

      <Box className="my-5 text-center ">
        {/* <Button sx={buttonStyle}>dfsdf</Button> */}
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="ยินยอม"
              sx={{
                color: "white",
                "& .MuiButtonBase-root": {
                  color: "white",
                },
                // "& .MuiTypography-root": buttonStyle,
              }}
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="ไม่ยินยอม"
              sx={{
                color: "white",
                "& .MuiButtonBase-root": {
                  color: "white",
                },
                // "& .MuiTypography-root": buttonStyle,
              }}
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box className="flex justify-center">
        <Button sx={buttonStyle} onClick={nextPage}>
          NEXT <NavigateNextIcon />
        </Button>
      </Box>
    </Box>
  );
}
