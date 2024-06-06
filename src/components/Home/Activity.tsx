import { LuClock9 } from "react-icons/lu";
import { PiArrowClockwiseFill } from "react-icons/pi";
import { LuClock6 } from "react-icons/lu";

const Activity = () => {
  return (
    <div className="w-full flex justify-between items-center mt-2 px-8">
      <div className="flex flex-col items-center">
        <LuClock9 size={26} className="text-primary mb-2" />
        <p className="text-sm font-semibold">08:30</p>
        <p className="text-xs font-medium">check in</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative">
          <PiArrowClockwiseFill size={26} className="text-primary mb-2" />
          <p className="text-sm font-semibold absolute top-1 left-2 text-primary">8</p>
        </div>
        <p className="text-sm font-semibold text-primary">03:00:00</p>
        <p className="text-xs font-medium">working hours</p>
      </div>
      <div className="flex flex-col items-center">
        <LuClock6 size={26} className="text-primary mb-2" />
        <p className="text-sm font-semibold">--:--</p>
        <p className="text-xs font-medium">check out</p>
      </div>
    </div>
  );
};

export default Activity;
