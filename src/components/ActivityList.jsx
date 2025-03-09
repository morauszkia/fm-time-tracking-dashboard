import timeData from "../data/data.json";

const ActivityList = ({ timeframe }) => {
  return (
    <ul>
      {timeData.map((activity) => (
        <li className="text-white">
          {activity.title}:{" "}
          {activity.timeframes[timeframe.toLowerCase()].current}
        </li>
      ))}
    </ul>
  );
};

export default ActivityList;
