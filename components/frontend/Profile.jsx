import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function Profile({ user, nextPage }) {
  const checkFile = (data) => {
    const type = data.type.split("/")[0];
    console.log(data);
    if (type === "image") {
      return (
        <PhotoView src={data.url}>
          <Image
            src={data.url}
            width={512}
            height={512}
            alt="profile"
            className="w-full h-52 object-contain rounded-xl"
          />
        </PhotoView>
      );
    } else {
      return (
        <video
          src={data.url}
          width={512}
          height={512}
          controls
          className="w-full h-60 object-contain rounded-xl"
        />
      );
    }
  };

  return (
    <PhotoProvider>
      <Box className="flex flex-col gap-5 mt-3">
        <Typography variant="h6" className="text-center">
          ข้อมูลของฉัน
        </Typography>

        <Box className="h-40 w-40 bg-white mx-auto rounded-full border-4 border-[#A5278F]  flex justify-center items-center">
          {user.profile ? (
            <PhotoView src={user.profile}>
              <Image
                src={user.profile}
                width={512}
                height={512}
                alt="profile"
                className="w-full h-full object-cover rounded-full"
              />
            </PhotoView>
          ) : (
            <Typography className="text-main text-sm text-center ">
              ไม่มีรูปโปรไฟล์
            </Typography>
          )}
        </Box>

        <Box className="flex flex-col gap-3">
          <Box className="grid grid-cols-5">
            <Box className="col-span-2">
              <Typography>Name : </Typography>
            </Box>
            <Box className="col-span-3">
              <Typography className="font-light">{user.name || ""}</Typography>
            </Box>
          </Box>
          <Box className="grid grid-cols-5">
            <Box className="col-span-2">
              <Typography>Member Code : </Typography>
            </Box>
            <Box className="col-span-3">
              <Typography className="font-light">
                {user.memberCode || ""}
              </Typography>
            </Box>
          </Box>
          <Box className="grid grid-cols-5">
            <Box className="col-span-2">
              <Typography>Tel : </Typography>
            </Box>
            <Box className="col-span-3">
              {" "}
              <Typography className="font-light">{user.tel || ""}</Typography>
            </Box>
          </Box>
          <Box className="grid grid-cols-5">
            <Box className="col-span-2">
              <Typography>Email : </Typography>
            </Box>
            <Box className="col-span-3">
              <Typography className="font-light">{user.email || ""}</Typography>
            </Box>
          </Box>
          <Box className="grid grid-cols-5">
            <Box className="col-span-2">
              <Typography>ประเภทของกลุ่มรางวัล : </Typography>
            </Box>
            <Box className="col-span-3">
              <Typography className="font-light">
                {user.reward || ""}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography>เหตุผลในการเข้าร่วมประกวด</Typography>
            <Typography className="font-light">
              {user.joinReason || ""}{" "}
            </Typography>
          </Box>
          <Divider
            sx={{
              backgroundColor: "white",
              height: "2px",
              width: "100%",
            }}
          />
          <Box className="flex flex-col gap-3">
            <Typography>ภาพหรือคลิปแนะนำร้าน</Typography>
            <Box className="flex flex-col gap-3">
              {user.file.map((item, index) => (
                <Box key={index}>{checkFile(item)}</Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box className="flex justify-center">
          <Button
            sx={{
              backgroundColor: "white !important",
              borderRadius: "100px !important",
              color: "#A5278F !important",
              fontSize: "1.3rem !important",
              // border: "5px solid #A5278F !important",
              borderWidth: "1px 1px 0.4rem 1px !important",
              borderColor: "#A5278F !important",
              borderStyle: "solid !important",
              width: "fit-content !important",
              px: "2rem !important",
              py: "0rem !important",
              m: "auto !important",
            }}
            onClick={nextPage}
          >
            แก้ไขข้อมูล
          </Button>
        </Box>
      </Box>
    </PhotoProvider>
  );
}
