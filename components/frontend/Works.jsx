import { buttonStyle } from "@/utils/buttonStyle";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DeleteIcon from "@mui/icons-material/Delete";
import { BTN_NEXT, BTN_SAVE, RADIO_CHECK } from "@/assets";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ImageIcon from "@mui/icons-material/Image";
export default function Works({
  user,
  handleChange,
  nextPage,
  createUser,
  page,
  nextPageByPage,
  updateUser,
}) {
  const [joinReasonLength, setJoinReasonLength] = useState(
    user?.joinReason.length || 0
  );

  const [element, setElement] = useState(user?.file || []);

  const handleChangeElement = (e) => {
    const { name, value } = e.target;
    handleChange({
      target: {
        name: name,
        value: value,
      },
    });
    // if (file) {
    //   let tempFiles = element.map((fitem, findex) => {
    //     if (findex == index) {
    //       return file;
    //     } else {
    //       return fitem;
    //     }
    //   });
    //   setElement(tempFiles);
    // }
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
        {/* <Typography className="font-light">
          แนบภาพจำนวน 3 ภาพ หรือหรือคลิปแนะนำร้านของตัวเองความยาวไม่เกิน 2 นาที
        </Typography> */}
        {/* <Box className="flex flex-col gap-5 w-full">
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
        </Box> */}
        <Box className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Box className="col-span-2 sm:col-span-2 flex items-center gap-5">
            <Image
              src={RADIO_CHECK.src}
              width={50}
              height={50}
              alt="title"
              className="w-5 h-5"
              draggable={false}
            />
            <Typography className="font-light">แนบภาพจำนวน 3 ภาพ</Typography>
          </Box>
          <Box className="col-span-2 sm:col-span-1">
            <MediaInput
              type={"image"}
              index={1}
              data={user}
              onChange={handleChangeElement}
            />
          </Box>
          <Box className="col-span-2 sm:col-span-1">
            <MediaInput
              type={"image"}
              index={2}
              data={user}
              onChange={handleChangeElement}
            />
          </Box>
          <Box className="col-span-2 sm:col-span-1">
            <MediaInput
              type={"image"}
              index={3}
              data={user}
              onChange={handleChangeElement}
            />
          </Box>

          <Box className="col-span-2 flex flex-col gap-3">
            <Box className="flex items-center gap-5">
              <Image
                src={RADIO_CHECK.src}
                width={50}
                height={50}
                alt="title"
                className="w-5 h-5"
                draggable={false}
              />
              <Typography className="font-light">
                {" "}
                แนบคลิปวิดีโอแนะนำร้านของตัวเองความยาวไม่เกิน 2 นาที
              </Typography>
            </Box>

            <MediaInput
              type={"video"}
              index={4}
              data={user}
              onChange={handleChangeElement}
            />
          </Box>
        </Box>
        <Typography className="text-end font-light">
          *ขนาดไฟล์ไม่เกิน 25MB
        </Typography>
      </Box>
      <Box className="flex justify-center mt-3">
        {page != 11 ? (
          <Button className="p-0" onClick={createUser}>
            <Image
              src={BTN_NEXT.src}
              width={256}
              height={128}
              alt="login"
              className="w-[60%] sm:w-[40%] h-auto"
            />
          </Button>
        ) : (
          <Button className="p-0" onClick={updateUser}>
            <Image
              src={BTN_SAVE.src}
              width={256}
              height={128}
              alt="login"
              className="w-[60%] sm:w-[40%] h-auto"
            />
          </Button>
        )}
      </Box>
    </Box>
  );
}

// const MediaInput = ({ data, onChange, index, deleteElement }) => {
//   const ref = useRef(null);
//   const [previewJoinReason, setPreviewJoinReason] = useState(null);

//   const changeFile = () => {
//     ref.current.click();
//   };

//   const handleChangeFile = (e) => {
//     if (e.target.files.length == 0) {
//       onChange(index, { ...data, file: null });
//     } else {
//       onChange(index, { ...data, file: e.target.files[0] });
//     }
//   };

//   const checkFile = () => {
//     let type = "";
//     if (data.url) {
//       type = data.type.split("/")[0];
//     } else {
//       type = data.file.type.split("/")[0];
//     }

//     if (!previewJoinReason) {
//       return (
//         <Typography className="text-main text-sm text-center ">
//           Upload
//         </Typography>
//       );
//     }
//     if (type === "image") {
//       return (
//         <Image
//           src={previewJoinReason}
//           width={512}
//           height={512}
//           alt="joinReason"
//           className="w-full h-full object-contain rounded-xl"
//         />
//       );
//     } else {
//       return (
//         <Box className="flex flex-col gap-2 pb-2">
//           <video
//             src={previewJoinReason}
//             width={512}
//             height={512}
//             alt="joinReason"
//             className="w-full h-full object-contain rounded-t-xl"
//             controls
//             playsInline
//             autoPlay
//             muted
//           />
//           <Box className="flex justify-center items-center">
//             <Button
//               sx={{
//                 backgroundColor: "white",
//                 color: "#A5278F",
//                 py: "0rem",
//                 px: "1rem",
//                 borderRadius: "10rem",
//                 border: "0.3rem solid #A5278F",
//               }}
//               onClick={changeFile}
//             >
//               Upload
//             </Button>
//           </Box>
//         </Box>
//       );
//     }
//   };

//   useEffect(() => {
//     if (!data) return;
//     if (data?.file) {
//       const objectUrl = URL.createObjectURL(data?.file);
//       setPreviewJoinReason(objectUrl);
//     }
//     if (data.url && !data.file) {
//       setPreviewJoinReason(data.url);
//     }
//   }, [data]);
//   return (
//     <Box className="w-full relative">
//       <IconButton
//         className="absolute top-2 right-2"
//         sx={{
//           backgroundColor: "#A5278F !important",
//           color: "white",
//         }}
//         onClick={() => {
//           deleteElement(index);
//         }}
//       >
//         <DeleteIcon />
//       </IconButton>
//       <label className="flex m-auto " htmlFor={`upload${index}`}>
//         <Box className="h-60 w-full bg-white rounded-[1rem] border-4 border-[#A5278F]  flex justify-center items-center">
//           {previewJoinReason ? (
//             <>{checkFile()}</>
//           ) : (
//             <Typography className="text-main  text-center ">Upload</Typography>
//           )}
//         </Box>
//       </label>

//       <input
//         type="file"
//         id={`upload${index}`}
//         ref={ref}
//         onChange={handleChangeFile}
//         hidden
//         accept="image/*,video/*"
//       />
//     </Box>
//   );
// };

const MediaInput = ({ data, onChange, type, index }) => {
  const ref = useRef(null);
  const [previewJoinReason, setPreviewJoinReason] = useState(null);

  const handleChangeFile = (e) => {
    let event = {
      target: {
        name: `${type}${index != "4" ? index : ""}File`,
        value: null,
      },
    };

    if (e.target.files.length == 0) {
      onChange(event.target);
    } else {
      // check file size
      if (e.target.files[0].size > 25000000) {
        Swal.fire({
          icon: "error",
          title: "ขนาดไฟล์ใหญ่เกินไป",
          text: "กรุณาอัพโหลดไฟล์ขนาดไม่เกิน 25MB",
          confirmButtonText: "ตกลง",
        });
        return;
      }

      onChange({
        target: {
          name: `${type}${index != "4" ? index : ""}File`,
          value: e.target.files[0],
        },
      });
    }
  };

  const changeFile = () => {
    ref.current.click();
  };

  useEffect(() => {
    if (!data) return;
    if (index == 1) {
      if (data?.image1File) {
        const objectUrl = URL.createObjectURL(data?.image1File);
        setPreviewJoinReason(objectUrl);
      }
      if (data.image1Url && !data.image1File) {
        setPreviewJoinReason(data.image1Url);
      }
    }
    if (index == 2) {
      if (data?.image2File) {
        const objectUrl = URL.createObjectURL(data?.image2File);
        setPreviewJoinReason(objectUrl);
      }
      if (data.image2Url && !data.image2File) {
        setPreviewJoinReason(data.image2Url);
      }
    }
    if (index == 3) {
      if (data?.image3File) {
        const objectUrl = URL.createObjectURL(data?.image3File);
        setPreviewJoinReason(objectUrl);
      }
      if (data.image3Url && !data.image3File) {
        setPreviewJoinReason(data.image3Url);
      }
    }
    if (index == 4) {
      if (data?.videoFile) {
        const objectUrl = URL.createObjectURL(data?.videoFile);
        setPreviewJoinReason(objectUrl);
      }
      if (data.videoUrl && !data.videoFile) {
        setPreviewJoinReason(data.videoUrl);
      }
    }
  }, [
    data.image1File,
    data.image2File,
    data.image3File,
    data.videoFile,

    data.image1Url,
    data.image2Url,
    data.image3Url,
    data.videoUrl,
  ]);

  useEffect(() => {
    console.log(previewJoinReason);
  }, [previewJoinReason]);

  return (
    <Box
      className={`${
        index == 4 ? "h-64" : "h-48 sm:h-44"
      } bg-white w-full flex justify-center  p-0`}
      // className="h-48 sm:h-44 bg-white w-full"
      sx={{
        borderRadius: "1rem",
        border: "0.3rem solid #A5278F",
        color: "#A5278F",
      }}
    >
      {previewJoinReason ? (
        <>
          {type == "image" ? (
            <Image
              src={previewJoinReason}
              width={256}
              height={256}
              alt="Image"
              className="w-full h-full object-cover rounded-xl"
              onClick={() => {
                changeFile();
              }}
            />
          ) : (
            <Box className="w-full relative">
              <video
                src={previewJoinReason}
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                muted
                controls
                playsInline
              />

              <Button
                className="text-center text-sm  "
                sx={{
                  backgroundColor: "#492E91 !important",
                  color: "white   !important",
                  py: "0.1rem",
                  px: "1rem",
                  borderRadius: "10rem",
                  position: "absolute",
                  top: "0.2rem",
                  right: "0.2rem",
                }}
                onClick={() => {
                  changeFile();
                }}
              >
                คลิกเพื่อแก้ไข
              </Button>
            </Box>
          )}
        </>
      ) : (
        <Box
          className="h-full w-full  flex flex-col justify-center items-center"
          onClick={() => {
            changeFile();
          }}
        >
          {type == "image" ? (
            <ImageIcon sx={{ fontSize: "3rem" }} />
          ) : (
            <OndemandVideoIcon sx={{ fontSize: "3rem" }} />
          )}
          <Typography className="text-main text-sm text-center">
            แนบ{type == "image" ? "รูปภาพ" : "คลิปวิดีโอ"}
          </Typography>
        </Box>
      )}

      <input
        type="file"
        id={`upload${index}`}
        ref={ref}
        onChange={handleChangeFile}
        hidden
        accept={`${type == "image" ? "image" : "video"}/*`}
      />
    </Box>
  );
};
