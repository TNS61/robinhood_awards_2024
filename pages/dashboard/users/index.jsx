import { NO_IMAGE } from "@/assets";
import AppWrapperBackEnd from "@/components/AppWrapperBackEnd";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get(process.env.API_BASE + "/users");

    if (res.data.status == "error") return;
    setUsers(res.data.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <AppWrapperBackEnd>
      <Box>
        <Box className="grid grid-cols-3 gap-5">
          {users.map((item, index) => (
            <Box className="w-full flex flex-col justify-center items-center bg-white rounded-xl shadow-lg">
              <Box className="py-3">
                <Image
                  src={item.profile || NO_IMAGE.src}
                  width={512}
                  height={512}
                  alt="profile"
                  className="rounded-full object-cover w-24 h-24"
                  draggable={false}
                />

                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    textAlign: "center",
                    fontWeight: "light",
                  }}
                >
                  {item.shopName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    textAlign: "center",
                    fontWeight: "light",
                  }}
                >
                  {item.memberCode}
                </Typography>
              </Box>
              <Box className="py-5 bg-[#F2F6FA] w-full flex justify-center items-center cursor-pointer rounded-b-xl">
                <Typography >ดูข้อมูลเพิ่มเติม</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </AppWrapperBackEnd>
  );
}
