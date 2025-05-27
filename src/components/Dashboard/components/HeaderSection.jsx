import Header from "../../shared/Header";

const HeaderSection = ({ dashboardInfo }) => {
    if (!dashboardInfo) return null;

    const { title, subtitle, weekSection } = dashboardInfo;

    return (
        <Header title={title} subtitle={subtitle}>
            <div>
                <span className="text-gray-500 font-medium">{weekSection?.title}</span>
                <p className="text-lg font-medium">{weekSection?.date}</p>
            </div>
        </Header>
    );
};

export default HeaderSection;
