import StatisticCard from "../../shared/StatisticCard";

const StatisticSection = ({ dashboardInfo }) => {
    return (
        <div className="mt-8 flex justify-between flex-wrap gap-4">
            {dashboardInfo.rptSection.map((ele, idx) => (
                <StatisticCard
                    key={idx}
                    bgColor={ele.bgColor}
                    title={ele.title}
                    cnt={ele.cnt}
                    footer={ele.pl}
                    icon={ele.icon}
                    iconBg={ele.gradient} />))}
        </div>
    )
}

export default StatisticSection