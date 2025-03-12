import timeData from "../data/data.json";
import ActivityCard from "./ActivityCard";

const ActivityList = ({ timeframe }) => {
  return (
    <ul className="grid gap-6 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-3">
      {timeData.map((activity) => (
        <ActivityCard
          key={activity.title}
          activity={activity}
          timeframe={timeframe}
        />
      ))}
    </ul>
  );
};

export default ActivityList;
