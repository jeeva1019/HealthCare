import ActivityChart from "./ActivityChart"
import { HiArrowTrendingUp } from "react-icons/hi2";
import StatsOverview from "./StatusOverView";

const ActivitySection = ({ dashboardInfo }) => {
    return (
        <div>
            <div className="flex items-center gap-3.5 h-fit ">
                <div className="p-1 text-2xl text-white inline-block rounded-lg bg-gradient-to-tl from-green-500 to-green-700"><HiArrowTrendingUp /></div>
                <h1 className="bg-gradient-to-br from-blue-500 to-violet-400 text-2xl font-bold text-transparent bg-clip-text">Activity</h1>
            </div>
            <p className="text-gray-500 mt-2 font-medium mb-4">3 appointments on this week</p>
            <ActivityChart activityData={dashboardInfo.activityData} />
            <StatsOverview stats={dashboardInfo.statusOverView}/>
        </div>
    )
}

export default ActivitySection