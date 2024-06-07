import Image from "next/image";

const CardProfile = () => {
  return (
    <div className="w-full h-32 bg-gradient-to-r from-primary to-[#C30F63] p-4 rounded-xl text-white">
      <div className="flex justify-between">
        <div className="flex items-start">
          <Image
            src="/profile.jpg"
            alt="profile"
            width={54}
            height={54}
            className="rounded-full drop-shadow-lg"
          />
          <div className="ml-4">
            <p className="text-sm font-bold">Tabay</p>
            <p className="text-xs italic">UI/UX Designer</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs font-light">Member since</p>
          <p className="text-md font-semibold">01 Juni 2021</p>
        </div>
      </div>
      <div className="flex justify-between items-end mt-3">
        <div>
          <p className="text-xs font-light ">Location</p>
          <p className="text-sm font-semibold -mt-1">Kantor Sahid</p>
        </div>
        <p className="text-md italic">ICO</p>
      </div>
    </div>
  );
};

export default CardProfile;
