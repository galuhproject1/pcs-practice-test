import { Avatar, AvatarGroup } from "@mui/material";

const listOnline = [
  {
    name: "Jefril",
    place: "Sahid",
  },
  {
    name: "Zasami",
    place: "BSD",
  },
  {
    name: "Sam",
    place: "Sahid",
  },
  { name: "Aldo", place: "Sahid" },
  {
    name: "Erwin",
    place: "Sahid",
  },
  {
    name: "Arye",
    place: "BSD",
  },
  {
    name: "Risya",
    place: "BSD",
  },
  {
    name: "Nesha",
    place: "WFH",
  },
];
const Online = () => {
  return (
    <div className="w-full p-4 bg-white rounded-xl shadow-lg">
      <AvatarGroup max={9} total={18}>
        <Avatar alt="Remy Sharp" src="/profile.jpg" />
        <Avatar alt="Travis Howard" src="/profile.jpg" />
        <Avatar alt="Cindy Baker" src="/profile.jpg" />
        <Avatar alt="Agnes Walker" src="/profile.jpg" />
        <Avatar alt="Trevor Henderson" src="/profile.jpg" />
        <Avatar alt="Remy Sharp" src="/profile.jpg" />
        <Avatar alt="Travis Howard" src="/profile.jpg" />
        <Avatar alt="Cindy Baker" src="/profile.jpg" />
        <Avatar alt="Agnes Walker" src="/profile.jpg" />
      </AvatarGroup>
      <div className="flex gap-[6px] text-center">
        {listOnline.map((item, index) => (
          <div key={index}>
            <p className="text-xs font-semibold">{item.name}</p>
            <p className="text-[10px] font-light">{item.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Online;
