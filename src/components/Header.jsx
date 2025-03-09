import { getImageURL } from "../util/image-util";
import TimeframeOption from "./TimeframeOption";

const timeframes = ["Daily", "Weekly", "Monthly"];

const Header = ({ activeTimeframe, handleChoice }) => {
  return (
    <header className="rounded-[15px] overflow-hidden bg-(--dark-blue)">
      <section className="bg-(--primary) w-full p-8 flex gap-5 items-center rounded-[15px]">
        <img
          src={getImageURL("image-jeremy.png")}
          alt="Jeremy Robson"
          className="size-16 md:size-20 border-[3px] border-white rounded-full"
        />
        <h1 className="flex flex-col gap-1">
          <span className="text-(--pale-blue) text-(length:--normal)">
            Report for
          </span>
          <span className="text-white text-2xl font-light">Jeremy Robson</span>
        </h1>
      </section>
      <section className="flex w-full justify-between text-(--desaturated-blue) text-[1.125rem] py-6">
        {timeframes.map((timeframe) => (
          <TimeframeOption
            key={timeframe}
            timeframe={timeframe}
            active={activeTimeframe == timeframe}
            onClick={handleChoice.bind(null, timeframe)}
          />
        ))}
      </section>
    </header>
  );
};

export default Header;
