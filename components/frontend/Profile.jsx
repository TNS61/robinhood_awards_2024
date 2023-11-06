import { rewardData } from "@/utils/rewardsData";
import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function Profile({ user, nextPage }) {
  const checkFile = (data) => {
    const type = data?.type.split("/")[0];
    console.log(data);
    if (type === "image") {
      return (
        <PhotoView src={data?.url}>
          <Image
            src={data?.url}
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
          src={data?.url}
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
          {user?.profile ? (
            <PhotoView src={user?.profile}>
              <Image
                src={user?.profile}
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
              <Typography>ชื่อร้านค้า : </Typography>
            </Box>
            <Box className="col-span-3">
              <Typography className="font-light">
                {user?.shopName || ""}
              </Typography>
            </Box>
          </Box>
          <Box className="grid grid-cols-5">
            <Box className="col-span-2">
              <Typography>รหัสร้านค้า : </Typography>
     
            </Box>
            <Box className="col-span-3">
              <Typography className="font-light">
                {user?.memberCode || ""}
              </Typography>
            </Box>
          </Box>
          <Box className="grid grid-cols-5">
            <Box className="col-span-2">
              <Typography>ชื่อ : </Typography>
            </Box>
            <Box className="col-span-3">
              {" "}
              <Typography className="font-light">
                {user?.firstName || ""}
              </Typography>
            </Box>
          </Box>
          <Box className="grid grid-cols-5">
            <Box className="col-span-2">
              <Typography>นามสกุล : </Typography>
            </Box>
            <Box className="col-span-3">
              {" "}
              <Typography className="font-light">
                {user?.lastName || ""}
              </Typography>
            </Box>
          </Box>
          <Box className="grid grid-cols-5">
            <Box className="col-span-2">
              <Typography>อีเมล : </Typography>
            </Box>
            <Box className="col-span-3">
              <Typography className="font-light">{user?.email || ""}</Typography>
            </Box>
          </Box>
          <Box className="grid grid-cols-5">
            <Box className="col-span-5">
              <Typography>ประเภทของกลุ่มรางวัล : </Typography>
            </Box>
            <Box className="col-span-5">
              {user?.reward.length > 0 && (
                <>
                  {user?.reward.map((item, index) => (
                    <Box key={index}>
                      <Awards data={item} />
                      {/* <Typography className="font-light">{rewardsData.find((item)=>) }</Typography> */}
                    </Box>
                  ))}
                </>
              )}
            </Box>
          </Box>
          <Divider
            sx={{
              backgroundColor: "white",
              height: "2px",
              width: "100%",
            }}
          />
          {/* <Box className="grid grid-cols-5">
            <Box className="col-span-5">
              <Typography>ช่องทางโซเชียลมีเดีย </Typography>
            </Box>
            <Box className="col-span-5">
              <Typography className="font-light">
                {user?.socialMedia || ""}
              </Typography>
            </Box>
          </Box> */}
          <Divider
            sx={{
              backgroundColor: "white",
              height: "2px",
              width: "100%",
            }}
          />
          <Box>
            <Typography>เหตุผลในการเข้าร่วมประกวด</Typography>
            <Typography className="font-light">
              {user?.joinReason || ""}{" "}
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
            <Typography>ภาพ</Typography>
            <Box className="grid grid-cols-2 gap-3">
              {user?.image1Url && (
                <PhotoView src={user?.image1Url}>
                  <Image
                    src={user?.image1Url}
                    width={512}
                    height={512}
                    alt="image1Url"
                    className="w-full h-28 sm:h-48 object-cover rounded-xl"
                  />
                </PhotoView>
              )}
              {user?.image2Url && (
                <PhotoView src={user?.image2Url}>
                  <Image
                    src={user?.image2Url}
                    width={512}
                    height={512}
                    alt="image2Url"
                    className="w-full h-28 sm:h-48 object-cover rounded-xl"
                  />
                </PhotoView>
              )}
              {user?.image3Url && (
                <PhotoView src={user?.image3Url}>
                  <Image
                    src={user?.image3Url}
                    width={512}
                    height={512}
                    alt="image3Url"
                    className="w-full h-28 sm:h-48 object-cover rounded-xl"
                  />
                </PhotoView>
              )}
              {/* {user?.file.map((item, index) => (
                <Box key={index}>{checkFile(item)}</Box>
              ))} */}
            </Box>
          </Box>
          <Box className="flex flex-col gap-3">
            <Typography>คลิปแนะนำร้าน</Typography>
            {user?.videoUrl && (
              <video
                src={user?.videoUrl}
                width={512}
                height={512}
                alt="videoUrl"
                className="w-full h-50 object-cover rounded-xl"
                muted
                controls
                playsInline
                autoPlay
              />
            )}
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

const Awards = ({ data }) => {
  const [rewards, setRewards] = React.useState(null);

  React.useEffect(() => {
    setRewards(rewardData.find((item) => item.value === data));
  }, []);
  return <>{rewards && <Typography>{rewards.name || ""}</Typography>}</>;
};
