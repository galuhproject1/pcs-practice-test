import BottomNav from "./BottomNavigation";
import Navbar from "./Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <BottomNav />
    </div>
  );
};

export default MainLayout;