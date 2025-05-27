import { dashboardInfo } from "../../data/dashboardinfo";
import ActivitySection from "./components/ActivitySection";
import AnatomySection from "./components/AnatomySection";
import Calendar from "./components/Calendar";
import HeaderSection from "./components/HeaderSection";
import HealthStatus from "./components/HealthStatus";
import StatisticSection from "./components/StatisticSection";
import UpcomingSchedule from "./components/UpcomingSchedule";

const DashBoard = () => {
  return (
    <>
      {/* Header and statistics */}
      <HeaderSection dashboardInfo={dashboardInfo} />
      <StatisticSection dashboardInfo={dashboardInfo} />

      <section className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-x-4 gap-y-6">
        {/* Top Row */}
        <AnatomySection />
        <HealthStatus dashboardInfo={dashboardInfo} />
        <Calendar dashboardInfo={dashboardInfo} />

        {/* Sidebar on medium and large screens */}
        <aside className="md:col-span-1 lg:col-span-1 order-last md:order-none">
          <UpcomingSchedule dashboardInfo={dashboardInfo} />
        </aside>

        {/* Bottom Row spanning two columns */}
        <aside className="md:col-span-2 lg:col-span-2 shadow-xl p-4 rounded-xl bg-white">
          <ActivitySection dashboardInfo={dashboardInfo} />
        </aside>
      </section>

    </>
  );
};

export default DashBoard;
