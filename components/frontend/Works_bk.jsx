import { buttonStyle } from "@/utils/buttonStyle";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DeleteIcon from "@mui/icons-material/Delete";

export default function WorksBk({ user, handleChange, nextPage, createUser }) {
  const [joinReasonLength, setJoinReasonLength] = useState(
    user?.joinReason.length || 0
  );

  const [element, setElement] = useState(user?.file || []);

  const handleChangeElement = (index, file) => {
    if (file) {
      let tempFiles = element.map((fitem, findex) => {
        if (findex == index) {
          return file;
        } else {
          return fitem;
        }
      });
      setElement(tempFiles);
    }
  };

  const deleteElement = (index) => {
    let tempFiles = element.filter((fitem, findex) => {
      if (findex != index) {
        return fitem;
      }
    });
    setElement(tempFiles);
  };

  const AddElement = () => {
    return (
      <Box
        className="h-60 w-full bg-white rounded-[1rem] border-4 border-[#A5278F]  flex justify-center items-center"
        onClick={() => {
          setElement([...element, { file: null }]);
        }}
      >
        <Typography
          sx={{
            fontSize: "1.2rem",
            textAlign: "center",
            color: "#A5278F",
          }}
        >
          Drop an image, Clip here
        </Typography>
      </Box>
    );
  };

  useEffect(() => {
    setJoinReasonLength(user.joinReason.length);
  }, [user.joinReason]);

  useEffect(() => {
    const event = {
      target: {
        name: "file",
        value: element,
      },
    };
    handleChange(event);
  }, [element]);
  return (
    <Box className="flex flex-col gap-5">
      <Box className="flex flex-col gap-3">
        <Typography className="font-light">
          เขียนบรรยายเหตุผลถึงการเข้าร่วมการประกวดในหัวข้อนี้ไม่เกิน 300 คำ
        </Typography>
        <Box>
          <TextField
            id="joinReason"
            multiline
            rows={9}
            variant="outlined"
            fullWidth
            name="joinReason"
            value={user?.joinReason || ""}
            onChange={handleChange}
            placeholder="Caption"
            inputProps={{
              maxLength: 300,
            }}
            sx={{
              backgroundColor: "white",
              borderRadius: "1rem",
              border: "0.3rem solid #A5278F",
              "& .MuiOutlinedInput-root": {
                borderRadius: "1rem",
                fontWeight: "light",
              },

              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          />
          <Typography className="font-light text-end">
            {joinReasonLength}/300
          </Typography>
        </Box>
      </Box>
      <Box className="flex flex-col gap-3">
        <Typography className="font-light">
          แนบภาพจำนวน 3 ภาพ หรือหรือคลิปแนะนำร้านของตัวเองความยาวไม่เกิน 2 นาที
        </Typography>
        <Box className="flex flex-col gap-5 w-full">
          {element.map((item, i) => (
            <MediaInput
              key={i}
              index={i}
              data={item}
              onChange={(index, file) => {
                handleChangeElement(index, file);
              }}
              deleteElement={(index) => {
                deleteElement(index);
              }}
            />
          ))}
          <Typography className="font-light text-end">
            *ขนาดไฟล์ภาพไม่เกิน 25MB
          </Typography>
          {element.length <= 2 && <Box>{AddElement()}</Box>}
        </Box>
      </Box>
      <Box className="flex justify-center">
        <Button sx={buttonStyle} onClick={createUser}>
          NEXT <NavigateNextIcon />
        </Button>
      </Box>
    </Box>
  );
}

const MediaInput = ({ data, onChange, index, deleteElement }) => {
  const ref = useRef(null);
  const [previewJoinReason, setPreviewJoinReason] = useState(null);

  const changeFile = () => {
    ref.current.click();
  };

  const handleChangeFile = (e) => {
    if (e.target.files.length == 0) {
      onChange(index, { ...data, file: null });
    } else {
      onChange(index, { ...data, file: e.target.files[0] });
    }
  };

  const checkFile = () => {
    let type = "";
    if (data.url) {
      type = data.type.split("/")[0];
    } else {
      type = data.file.type.split("/")[0];
    }

    if (!previewJoinReason) {
      return (
        <Typography className="text-main text-sm text-center ">
          Upload
        </Typography>
      );
    }
    if (type === "image") {
      return (
        <Image
          src={previewJoinReason}
          width={512}
          height={512}
          alt="joinReason"
          className="w-full h-full object-contain rounded-xl"
        />
      );
    } else {
      return (
        <Box className="flex flex-col gap-2 pb-2">
          <video
            src={previewJoinReason}
            width={512}
            height={512}
            alt="joinReason"
            className="w-full h-full object-contain rounded-t-xl"
            controls
            playsInline
            autoPlay
            muted
          />
          <Box className="flex justify-center items-center">
            <Button
              sx={{
                backgroundColor: "white",
                color: "#A5278F",
                py: "0rem",
                px: "1rem",
                borderRadius: "10rem",
                border: "0.3rem solid #A5278F",
              }}
              onClick={changeFile}
            >
              Upload
            </Button>
          </Box>
        </Box>
      );
    }
  };

  useEffect(() => {
    if (!data) return;
    if (data?.file) {
      const objectUrl = URL.createObjectURL(data?.file);
      setPreviewJoinReason(objectUrl);
    }
    if (data.url && !data.file) {
      setPreviewJoinReason(data.url);
    }
  }, [data]);
  return (
    <Box className="w-full relative">
      <IconButton
        className="absolute top-2 right-2"
        sx={{
          backgroundColor: "#A5278F !important",
          color: "white",
        }}
        onClick={() => {
          deleteElement(index);
        }}
      >
        <DeleteIcon />
      </IconButton>
      <label className="flex m-auto " htmlFor={`upload${index}`}>
        <Box className="h-60 w-full bg-white rounded-[1rem] border-4 border-[#A5278F]  flex justify-center items-center">
          {previewJoinReason ? (
            <>{checkFile()}</>
          ) : (
            <Typography className="text-main  text-center ">Upload</Typography>
          )}
        </Box>
      </label>

      <input
        type="file"
        id={`upload${index}`}
        ref={ref}
        onChange={handleChangeFile}
        hidden
        accept="image/*,video/*"
      />
    </Box>
  );
};
