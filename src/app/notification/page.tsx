"use client";

import { Box, List, ListItem, ListItemAvatar, Typography } from "@mui/material";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdCheck } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

type Notification = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  status: string;
  isRead: boolean;
};

const data: Notification[] = [
  {
    id: 1,
    image: "/reimbuse.png",
    title: "Reimbursement",
    description:
      "Your submission Lorem ipsum dolor sit amet... th the with a total cost of 50,000s been pald, please check your BRIMO application, Thankyou",
    date: "Today",
    status: "Approved",
    isRead: false,
  },
  {
    id: 2,
    title: "Reimbursement",
    image: "/reimbuse.png",
    description:
      "Your submission Lorem ipsum dolor sit amet... th the with a total cost of 50,000s been pald, please check your BRIMO application, Thankyou",
    date: "22-Feb-2022",
    status: "Rejected",
    isRead: true,
  },
  {
    id: 3,
    image: "/reimbuse.png",
    title: "Reimbursement",
    description:
      "Your submission Lorem ipsum dolor sit amet... th the with a total cost of 50,000s been pald, please check your BRIMO application, Thankyou",
    date: "22-Feb-2022",
    status: "onProsses",
    isRead: false,
  },
  {
    id: 4,
    image: "/sickness.png",
    title: "Sickness",
    description:
      "Your submission Lorem ipsum dolor sit amet... th the with a total cost of 50,000s been pald, please check your BRIMO application, Thankyou",
    date: "22-Feb-2023",
    status: "Approved",
    isRead: true,
  },
  {
    id: 5,
    image: "/sickness.png",
    title: "Sickness",
    description:
      "Your submission Lorem ipsum dolor sit amet... th the with a total cost of 50,000s been pald, please check your BRIMO application, Thankyou",
    date: "22-Feb-2022",
    status: "onProsses",
    isRead: true,
  },
  {
    id: 6,
    image: "/sickness.png",
    title: "Sickness",
    description:
      "Your submission Lorem ipsum dolor sit amet... th the with a total cost of 50,000s been pald, please check your BRIMO application, Thankyou",
    date: "2-Feb-2022",
    status: "Rejected",
    isRead: true,
  },
  {
    id: 7,
    image: "/jam.png",
    title: "Overtime",
    description:
      "Your submission Lorem ipsum dolor sit amet... th the with a total cost of 50,000s been pald, please check your BRIMO application, Thankyou",
    date: "10-10-2024",
    status: "Approved",
    isRead: true,
  },
  {
    id: 8,
    image: "/jam.png",
    title: "Overtime",
    description:
      "Your submission Lorem ipsum dolor sit amet... th the with a total cost of 50,000s been pald, please check your BRIMO application, Thankyou",
    date: "22-Feb-2022",
    status: "onProsses",
    isRead: false,
  },
  {
    id: 9,
    image: "/jam.png",
    title: "Overtime",
    description:
      "Your submission Lorem ipsum dolor sit amet... th the with a total cost of 50,000s been pald, please check your BRIMO application, Thankyou",
    date: "22-Feb-2022",
    status: "Rejected",
    isRead: true,
  },
];
const Notifications = () => {
  return (
    <div className="w-full">
      {data.map((item) => (
        <List key={item.id} sx={{ gap: 0, padding: 0 }}>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "start",
              gap: 1,
              backgroundColor: item.isRead ? "#FFFFFF" : "#93c5fd",
            }}
          >
            <ListItemAvatar sx={{ position: "relative" }}>
              <Box
                sx={{
                  backgroundColor: "#C30F63",
                  width: 46,
                  height: 46,
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={item.image}
                  alt="image"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 8,
                  backgroundColor:
                    item.status === "Approved"
                      ? "green"
                      : item.status === "Rejected"
                      ? "red"
                      : item.status === "onProsses"
                      ? "#0ea5e9"
                      : "#0ea5e9",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.status === "Approved" ? (
                  <MdCheck size={12} />
                ) : item.status === "Rejected" ? (
                  <AiOutlineClose size={12} />
                ) : item.status === "onProsses" ? (
                  <FaArrowRightLong size={12} />
                ) : (
                  <FaArrowRightLong size={12} />
                )}
              </Box>
            </ListItemAvatar>
            <Box sx={{ width: "300px" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontWeight: "light", fontSize: "12px" }}>
                {item.description}
              </Typography>
            </Box>
            <Box sx={{ width: "100px" }}>
              <Typography
                sx={{
                  fontWeight: "light",
                  fontSize: "12px",
                  color: "#64748b",
                  textAlign: "end",
                }}
              >
                {item.date}
              </Typography>
            </Box>
          </ListItem>
        </List>
      ))}
    </div>
  );
};

export default Notifications;
