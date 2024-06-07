import BottomNav from "@/components/BottomNavigation";
import Activity from "@/components/Home/Activity";
import CardProfile from "@/components/Home/CardProfile";
import News from "@/components/Home/News";
import Online from "@/components/Home/Online";
import MainLayout from "@/components/MainLayout";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <main className="mx-auto max-w-sm bg-white">
        <div className="px-4">
          <p className="text-sm font-[500] mb-2">Hi, Good Morning!</p>
          <CardProfile />
        </div>
        <div className="px-4 mt-4">
          <p className="text-sm font-bold">Today&#39;s Activity</p>
          <Activity />
        </div>
        <div className="px-4 mt-4">
          <p className="text-sm font-bold">PCS&#39;s News</p>
          <News />
        </div>
        <div className="px-4 mt-4 mb-16 pb-16">
          <p className="text-sm font-bold">Online</p>
          <Online />
        </div>
      </main>
    </MainLayout>
  );
}
