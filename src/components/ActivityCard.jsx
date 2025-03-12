import { getImageURL, toKebabCase } from "../util/util";

const ActivityCard = ({ activity, timeframe }) => {
  const previousPeriod =
    timeframe === "Daily"
      ? "Yesterday"
      : timeframe === "Weekly"
      ? "Last week"
      : "Last month";

  const bgColor = getComputedStyle(document.documentElement).getPropertyValue(
    `--${toKebabCase(activity.title)}`
  );

  const { current, previous } = activity.timeframes[timeframe.toLowerCase()];

  return (
    <li
      className="rounded-[15px] w-full relative overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <section>
        <img
          src={getImageURL(`icon-${toKebabCase(activity.title)}.svg`)}
          alt={`${activity.title} icon`}
          className="absolute right-2 -translate-y-[10%] z-0"
        />
      </section>
      <section className="relative bg-(--dark-blue) mt-[2.375rem] rounded-[15px] text-white p-6 z-10">
        <div className="flex justify-between items-center">
          <span className="font-medium">{activity.title}</span>
          <img
            src={getImageURL("icon-ellipsis.svg")}
            alt=""
            className="cursor-pointer hover:brightness-200"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[2rem] font-light">{current}hrs</span>
          <span className="text-[0.9375rem] text-(--pale-blue)">
            {previousPeriod} &ndash; {previous}hrs
          </span>
        </div>
      </section>
    </li>
  );
};

export default ActivityCard;
