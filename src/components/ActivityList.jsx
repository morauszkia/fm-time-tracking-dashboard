import timeData from "../data/data.json";
import ActivityCard from "./ActivityCard";

const ActivityList = ({ timeframe }) => {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 md:gap-[1.875rem] xl:grid-cols-3 xl:gap-8">
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
