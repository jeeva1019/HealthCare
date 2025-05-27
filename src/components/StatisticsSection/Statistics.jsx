import { dashboardInfo } from "../../data/dashboardinfo"
import StatisticSection from "../Dashboard/components/StatisticSection"
import Button from "../shared/Button"
import Header from "../shared/Header"
import { LuDownload } from "react-icons/lu";


const StatisticsCard = () => {
    return (
        <div>
            {/* Header */}
            <Header title='Statistics & Analytics' subtitle='Healthcare insights and performance metrics'>
                <Button icon={<LuDownload />} label='export report' />
            </Header>
            {/* Statistics Cards */}
            <StatisticSection dashboardInfo={dashboardInfo} />
        </div>
    )
}

export default StatisticsCard