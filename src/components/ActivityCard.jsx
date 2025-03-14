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

  const gradient = `linear-gradient(to bottom, ${bgColor}, ${bgColor} 75%, var(--dark-blue))`;

  const { current, previous } = activity.timeframes[timeframe.toLowerCase()];

  return (
    <li
      className="rounded-[15px] w-full relative overflow-hidden lg:min-w-[16rem]"
      style={{ background: gradient }}
    >
      <header>
        <img
          src={getImageURL(`icon-${toKebabCase(activity.title)}.svg`)}
          alt={`${activity.title} icon`}
          className="absolute right-2 -translate-y-[10%] z-0"
        />
      </header>
      <section className="relative bg-(--dark-blue) hover:brightness-150 cursor-pointer mt-[2.375rem] rounded-[15px] text-white p-6 z-10 xl:mt-11 xl:p-6">
        <div className="flex justify-between items-center xl:mb-6">
          <h2 className="font-medium inline-block">{activity.title}</h2>
          <img
            src={getImageURL("icon-ellipsis.svg")}
            alt=""
            className="cursor-pointer hover:brightness-200"
          />
        </div>
        <div className="flex justify-between items-center xl:flex-col xl:items-start gap-2">
          <span className="text-[2rem] font-light xl:text-[3.5rem]">
            {current}hrs
          </span>
          <span className="text-[0.9375rem] text-(--pale-blue) text-nowrap">
            {previousPeriod} &ndash; {previous}hrs
          </span>
        </div>
      </section>
    </li>
  );
};

export default ActivityCard;
